import React, { createContext, useContext, useReducer, useState } from 'react';
import createDataConext from './DataContext';
import jsonBlogServer from '../api/jsonBlogServer';
import axios from 'axios';


//let blogCount = 2;
const blogReducer = (state, action) => {
    switch (action.type) {
        case "get_posts":
            return {
                ...state,
                blogs: action.payload,
                selectedBlog: null,
                status: 'records fetched'
            };

        case "add_dummy_post":
            //let id = ++blogCount;
            let newPost = { id, title: 'Blog #' + id, body: 'content for blog #' + id };
            return {
                ...state,
                blogs: [newPost, ...state.blogs],
                selectedBlog: newPost,
                status: null
            };
        case "remove_post":
            //console.log('reducer received remove_blog',action.payload);
            let blogs = state.blogs.filter(b => b.id !== action.payload);
            let selectedBlog = blogs.length ? blogs[0] : null;
            return { blogs, selectedBlog, error: null };

        case "select_post":
            return {
                ...state,
                blogs: state.blogs,
                selectedBlog: state.blogs.find(b => b.id === action.payload),
                status: null
            };

        case "add_post":
            //action.payload.id = ++blogCount;
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
                selectedBlog: action.payload,
                status: null
            };

        case "update_post":
            //let remainingPost= state.blogs.filter(b=>b.id!==action.payload.id);
            return {
                ...state,
                blogs: state.blogs.map(b => b.id === action.payload.id ? action.payload : b),
                selectedBlog: action.payload,
                status: null
            };
        case "status":
            return { ...state, status: action.payload }
        case "server_key":
            return {...state, key:action.payload};
        default:
            return state;
    }
}

const delayedFailingOperation = (delay, errorChance = 0) => {

    return new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            let val = Math.floor(Math.random() * 100);
            clearTimeout(id);
            if (val < errorChance)
                return reject(new Error('Operation Failed'));
            else
                return resolve();


        }, delay);

    });

}

const addDummyBlog = (dispatch) => () => dispatch({ type: 'add_dummy_post' });

const removeBlog = (dispatch,{key}) => async (id) => {
    //console.log('dispatching remove_blog',id);
    let request= http(key);
    let response=await request.delete(`/blogs/${id}`);
    dispatch({ type: 'remove_post', payload: id });
}

let _http=null;
const  http= (key)=>{
    if(!_http){
        let baseURL=`http://${key}.ngrok.io`;
        console.log('axios setup for ', baseURL);
        _http=axios.create({baseURL});
    }

    return _http;
}

const getBlogs = (dispatch,{key}) => async () => {
    try {
        console.log('key',key);
        const request=http(key);
        const response = await request.get('/blogs');
        console.log(response.data);
        dispatch({ type: 'get_posts', payload: response.data });
    } catch (e) {
        dispatch({ type: 'status', payload: e.message });
        console.log(e.message);
    }
}

const addBlog = (dispatch,{key}) => async (blog, callback) => {
    try {
        dispatch({ type: 'status', payload: 'adding...' })
        //await delayedFailingOperation(4000, 40);
        let request=http(key);
        let {title,body}=blog;
        let response=await request.post('/blogs',{title,body })
        dispatch({ type: 'add_post', payload: response.data });
        callback();
    } catch (err) {
        dispatch({ type: 'status', payload: err.message });
    }
}

const updateBlog = (dispatch,{key}) => async (blog, callback) => {
    try {
        dispatch({ type: 'status', payload: 'updating' })
        //await delayedFailingOperation(2000, 40);
        let request=http(key);
        let response= await request.put(`/blogs/${blog.id}`,blog);
        dispatch({ type: 'update_post', payload: blog });
        callback();
    } catch (err) {
        dispatch({ type: 'status', payload: err.message });
    }
}

const getBlogById= dispatch => async (id) =>{

    
};

const updateServerKey= dispatch => key => {
    dispatch({type:'server_key', payload:key});
}

export const { Context, Provider, dispatch } = createDataConext(

    blogReducer,
    {
        addDummyBlog,
        getBlogs,
        removeBlog,
        addBlog,
        updateBlog,
        getBlogById,
        updateServerKey
    },
    { blogs: [], selectedBlog: null, error: null,key:'' }
);

//returns {Context,Provider,dispatch} object
// const blogContext=createDataConext(blogReducer,{addBlog},[]);
// console.log('blogContext at the end of BlogContext',blogContext);
// export blogContext;
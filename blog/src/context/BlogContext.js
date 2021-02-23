import React,{createContext,useContext,useReducer,useState} from 'react';
import createDataConext from './DataContext';


let blogCount=0;
const blogReducer=(state,action)=>{
    switch(action.type){
        case "add_dummy_post":
            let id=++blogCount;
            let newPost={id, title:'Blog #'+id,body:'content for blog #'+id};
            return {
                blogs:[newPost,...state.blogs],
                selectedBlog: newPost
            };
        case "remove_post":
            //console.log('reducer received remove_blog',action.payload);
            let blogs= state.blogs.filter(b=>b.id!==action.payload);
            let selectedBlog= blogs.length? blogs[0] : null;
            return {blogs,selectedBlog};

        case "select_post":
            return {
                    blogs:state.blogs, 
                    selectedBlog: state.blogs.find(b=>b.id===action.payload)
                };

        case "add_post":
            action.payload.id=++blogCount;
            return {
                
                blogs:[...state.blogs,action.payload],
                selectedBlog: action.payload
            };

        case "update_post":
            let remainingPost= state.blogs.filter(b=>b.id!==action.payload.id);
            return {
                blogs:[...remainingPost,action.payload],
                selectedBlog: action.payload
            };
        default:
            return state;
    }
}

const addBlog= (dispatch)=> () => dispatch({type:'add_dummy_post'});

const removeBlog= (dispatch) => (id) => {
    //console.log('dispatching remove_blog',id);
    dispatch({type:'remove_post',payload:id});
}

export const {Context,Provider,dispatch} = createDataConext(
    
                blogReducer,
                {addBlog,removeBlog},
                {blogs:[],selectedBlog:null}
                );

//returns {Context,Provider,dispatch} object
// const blogContext=createDataConext(blogReducer,{addBlog},[]);
// console.log('blogContext at the end of BlogContext',blogContext);
// export blogContext;
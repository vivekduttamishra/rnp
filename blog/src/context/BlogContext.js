import React,{createContext,useContext,useReducer,useState} from 'react';
import createDataConext from './DataContext';


let blogCount=2;
const blogReducer=(state,action)=>{
    switch(action.type){
        case "add_dummy_post":
            let id=++blogCount;
            let newPost={id, title:'Blog #'+id,body:'content for blog #'+id};
            return {
                blogs:[newPost,...state.blogs],
                selectedBlog: newPost,
                status:null
            };
        case "remove_post":
            //console.log('reducer received remove_blog',action.payload);
            let blogs= state.blogs.filter(b=>b.id!==action.payload);
            let selectedBlog= blogs.length? blogs[0] : null;
            return {blogs,selectedBlog,error:null};

        case "select_post":
            return {
                    blogs:state.blogs, 
                    selectedBlog: state.blogs.find(b=>b.id===action.payload),
                    status:null
                };

        case "add_post":
            action.payload.id=++blogCount;
            return {
                
                blogs:[...state.blogs,action.payload],
                selectedBlog: action.payload,
                status:null
            };

        case "update_post":
            //let remainingPost= state.blogs.filter(b=>b.id!==action.payload.id);
            return {
                blogs:state.blogs.map(b=> b.id===action.payload.id?action.payload:b),
                selectedBlog: action.payload,
                status:null
            };
        case "status":
            return {...state, status: action.payload}
        default:
            return state;
    }
}

const delayedFailingOperation=(delay,errorChance=0)=>{

    return new Promise((resolve,reject)=>{
        let id=setTimeout(()=>{
            let val= Math.floor(Math.random()*100);
            clearTimeout(id);
            if(val<errorChance)
                return reject(new Error('Operation Failed'));
            else
                return resolve();
          

        },delay);

    });

}

const addDummyBlog= (dispatch)=> () => dispatch({type:'add_dummy_post'});

const removeBlog= (dispatch) => (id) => {
    //console.log('dispatching remove_blog',id);
    dispatch({type:'remove_post',payload:id});
}

const addBlog=(dispatch) => async (blog,callback)=>{
    try{
    dispatch({type:'status',payload:'adding...'})
    await delayedFailingOperation(4000, 40);
    dispatch({type:'add_post',payload:blog});
    callback();
    }catch(err){
        dispatch({type:'status',payload:err.message});
    }
}

const updateBlog= (dispatch) => async (blog,callback)=>{
    try{
        dispatch({type:'status',payload:'updating'})
        await delayedFailingOperation(2000,40); 
        dispatch({type:'update_post',payload:blog});
        callback();
    } catch(err){
        dispatch({type:'status',payload:err.message});
    }
}



export const {Context,Provider,dispatch} = createDataConext(
    
                blogReducer,
                {addDummyBlog,removeBlog,addBlog,updateBlog},
                {blogs:[
                    {id:1,title:'Test Blog',body:'This is Test Blog 1'},
                    {id:2,title:'Test Blog 2',body:'This is second Test blog'}
                ],selectedBlog:null,error:null}
                );

//returns {Context,Provider,dispatch} object
// const blogContext=createDataConext(blogReducer,{addBlog},[]);
// console.log('blogContext at the end of BlogContext',blogContext);
// export blogContext;
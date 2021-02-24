import React,{createContext,useContext,useReducer,useState} from 'react';
import { set } from 'react-native-reanimated';


const BlogContext=React.createContext();

const blogReducer=(state=[],action)=>{
    switch(action.type){
        case "add_dummy_post":
            let id=++blogCount;

            return [{id, title:'Blog #'+id,body:'content for blog #'+id},...state];

        default:
            return state;
    }
}

let blogCount=0;
export const BlogProvider=({children})=>{

    //let [blogs,setBlogs]=useState([]);
    let [blogs, dispatch]=useReducer(blogReducer,[]);

    const addBlog=()=>{
        dispatch({type:'add_dummy_post'});
    }


    return (
        <BlogContext.Provider value={{blogs,addBlog}} >
            {children}
        </BlogContext.Provider>
    );
};

export const getBlogs=()=> useContext(BlogContext).blogs;

export const getBlogApi=()=>{

    let context=useContext(BlogContext);
    //console.log('returning context', context);
    return context;
};


export default BlogContext;
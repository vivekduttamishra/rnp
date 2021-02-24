import React,{createContext,useContext,useState} from 'react';
import { set } from 'react-native-reanimated';


const BlogContext=React.createContext();


let blogCount=0;
export const BlogProvider=({children})=>{

    let [blogs,setBlogs]=useState([]);

    const addBlog=()=>{
        let id=++blogCount;
        let newBlog={id, title:`My Blog ${id}`, body:`Content for Blog #${id}`};
        setBlogs([...blogs,newBlog]);
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
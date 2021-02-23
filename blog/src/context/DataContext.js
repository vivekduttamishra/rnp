import React,{useReducer, createContext} from 'react';


export default (reducer, actions, initState=null)=>{
 
    let Context=createContext();
    
   // let _dispatch=null;

    let Provider=({children})=>{

       const [state, dispatch]= useReducer(reducer, initState);

         let dispatchableActions={};
        
         for(let key in actions){
             //key: fn(dispatch)=> ()=>{}
             dispatchableActions[key]=actions[key](dispatch);
         }
        // _dispatch=dispatch;


        return (
           <Context.Provider value={{state,...dispatchableActions,dispatch}}>
               {children}
           </Context.Provider>
        );
    };

    return {Context,Provider};
    
};
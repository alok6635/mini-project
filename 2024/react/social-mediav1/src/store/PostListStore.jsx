import { createContext, useReducer } from "react";


export const postListStoreData = createContext({
    postList:[],
    addpost:()=>{},
    deletepost:()=>{},
})

const postListReducer=(state,action)=>{
   if(action.type == 'ADD POST'){
     return [...state,action.payload]
   }

   else if(action.type=='DELETE'){
      return state.filter((item,id)=>id !==action.payload)
   }
}

const PostStore = ({ children }) => {
    const[postList,dispatch]=useReducer(postListReducer,[]);

    function addpost(formData){
        dispatch({
            type:'ADD POST',
            payload:formData
        })

      
    }
    function deletepost(index){
       dispatch({
        type:'DELETE',
        payload:index
       })
    }
    return (
        <>
            <postListStoreData.Provider value={{
                postList:postList,
                addpost:addpost,
                deletepost:deletepost}}>
                {children}
            </postListStoreData.Provider>
        </>
    )
}
export default PostStore;


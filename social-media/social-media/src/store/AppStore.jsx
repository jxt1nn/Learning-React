// AppStore.js
import React, { createContext } from 'react';

export const PostList = createContext(); 

// const postListReducer = () => {

// }

const AppStore = ({ children }) => {
  // const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const List = [];

  const addPost = () => {
    
  }

  const DeletePost = () => {

  }

  return (
    <PostList.Provider value={{List, addPost, DeletePost}}> 
      {children}
    </PostList.Provider>
  );
};

export default AppStore;

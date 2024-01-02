import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE":
      return currPostList.filter((post) => post.id !== action.payload.postId);
    case "ADDED":
      return [
        {
          id: new Date().getSeconds(),
          title: action.payload.title,
          body: action.payload.body,
          reactions: action.payload.reactions,
          tags: action.payload.tags,
        },
        ...currPostList,
      ];
    default:
      return currPostList;
  }
  
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );
  console.log(postList)
  const addPost = (title, body, reactions, tags) => {
    console.log(title, body, reactions, tags);
    dispatchPostList({
      type: "ADDED",
      payload: {
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;

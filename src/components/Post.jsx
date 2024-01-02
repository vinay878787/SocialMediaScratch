import React, { useContext } from "react";
import { PostList } from "../store/context";
import { AiFillDelete } from "react-icons/ai";

function Post() {
  const { postList, deletePost } = useContext(PostList);

  return (
    <>
      {postList.map((post) => {
        return (
          <div className="postCard" key={post.id}>
            <AiFillDelete onClick={() => deletePost(post.id)} />
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <div>Reactions: {post.reactions}</div>
                <button key={post.id}>{post.tags}</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;

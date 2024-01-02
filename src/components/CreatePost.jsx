import React, { useContext, useRef } from "react";
import { PostList } from "../store/context";

function CreatePost() {
const {addPost} = useContext(PostList);

  const titleRef = useRef("");
  const bodyRef = useRef("");
  const reactionsRef = useRef(0);
  const tagsRef = useRef("");

  function handleClick(e){
    e.preventDefault();
    let title = titleRef.current.value;
    let body = bodyRef.current.value;
    let reactions = reactionsRef.current.value;
    let tags = tagsRef.current.value;

    addPost(title,body,reactions,tags);
    titleRef.current.value="";
    bodyRef.current.value="";
    reactionsRef.current.value="";
    tagsRef.current.value="";

  }
  return (
    
    <div>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={titleRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Body
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            ref={bodyRef}
          />
        </div>

        <label>Reactions</label>
        <br></br>
        <input type="number" ref={reactionsRef}/>
        <br></br>

        <label>Tags </label>
        <br></br>
        <input type="text" ref={tagsRef}/>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostListProvider from "./store/context";

function App() {
  const [tab, setTab] = useState("");
  return (
    <>
    <PostListProvider>
      <div className="container">
        <button onClick={() => setTab("Home")}>Home</button>
        <button onClick={() => setTab("CreatePost")}>CreatePost</button>
      </div>
      {tab === "Home" ? <Home /> : <CreatePost />}
      </PostListProvider>
    </>
  );
}

export default App;

import React from "react";
import PostForm from "./components/PostForm/PostForm";
import AllPosts from "./components/AllPost/AllPosts";

const App: React.FC = () => {
  return (
    <div className="flexRow">
      <PostForm />
      <AllPosts />
    </div>
  );
};

export default App;

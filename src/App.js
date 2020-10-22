import React, { Component } from "react";
import PostForm from "./components/PostForm";
import AllPosts from "./components/AllPost/AllPosts";

class App extends Component {
  render() {
    return (
      <div className="flexRow">
        <PostForm />
        <AllPosts />
      </div>
    );
  }
}

export default App;

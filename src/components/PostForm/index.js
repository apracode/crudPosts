import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      title,
      message: text,
      editing: false,
    };
    dispatch({ type: "ADD_POST", data });
    setTitle("");
    setText("");
  };

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form className="createForm" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Enter Post Title"
          value={title}
          onChange={(e) => handleChange(e, setTitle)}
        />
        <br />
        <br />
        <textarea
          required
          cols="28"
          rows="5"
          placeholder="Enter Post Text"
          value={text}
          onChange={(e) => handleChange(e, setText)}
        ></textarea>
        <br />
        <br />
        <button className="postBut">Post</button>
      </form>
    </div>
  );
};

export default PostForm;

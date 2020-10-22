import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType, PostType } from "../types/types";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const dispatch: React.Dispatch<ActionType> = useDispatch();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => {
    set(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: PostType = {
      id: new Date().toString(),
      title,
      message: text,
      editing: false,
    };
    dispatch({ type: "ADD_POST", newData: data });
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
          cols={28}
          rows={5}
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

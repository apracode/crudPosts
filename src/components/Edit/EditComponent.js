import React, { useState } from "react";
import { useDispatch } from "react-redux";

const EditComponent = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.message);

  const dispatch = useDispatch();

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleSubmit = () =>
    dispatch({
      type: "UPDATE",
      id: post.id,
      data: { newTitle: title, newMessage: text },
    });

  return (
    <div className="updatePost">
      <form className="updateForm" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter Post Title"
          value={title}
          onChange={(e) => handleChange(e, setTitle)}
        />
        <br />
        <br />
        <textarea
          required
          rows="5"
          cols="28"
          placeholder="Enter Post"
          onChange={(e) => handleChange(e, setText)}
          value={text}
        />
        <br />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditComponent;

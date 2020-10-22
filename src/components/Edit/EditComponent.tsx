import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType, IPost } from "../types/types";

const EditComponent: React.FC<IPost> = ({ post }) => {
  const [title, setTitle] = useState<string | undefined>(post.title);
  const [text, setText] = useState<string | undefined>(post.message);

  const dispatch = useDispatch<React.Dispatch<ActionType>>();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    set: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    set(e.target.value);
  };

  const handleSubmit = () =>
    dispatch({
      type: "UPDATE",
      id: post.id,
      updateData: { newTitle: title, newMessage: text },
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
          rows={5}
          cols={28}
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

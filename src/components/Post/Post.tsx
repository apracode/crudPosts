import React from "react";
import { useDispatch } from "react-redux";
import { ActionType, IPost } from "../types/types";

const Post: React.FC<IPost> = ({ post }) => {
  const dispatch = useDispatch<React.Dispatch<ActionType>>();
  const { title, message, id } = post;
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={() => dispatch({ type: "EDIT_POST", id })}>Edit</button>
      <button onClick={() => dispatch({ type: "DELETE_POST", id })}>
        Delete
      </button>
    </div>
  );
};

export default Post;

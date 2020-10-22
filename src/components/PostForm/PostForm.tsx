import React from "react";
import { useDispatch } from "react-redux";

import { ActionType, PostType, ValuesType } from "../types/types";
import { useForm } from "../hooks/useForm";

const PostForm: React.FC = () => {
  const dispatch: React.Dispatch<ActionType> = useDispatch();

  const onFormSubmit = (values: ValuesType) => {
    const data: PostType = {
      id: new Date().toString(),
      title: values.title,
      message: values.message,
      editing: false,
    };
    dispatch({ type: "ADD_POST", newData: data });
  };
  const [Form] = useForm({ title: "", message: "" }, onFormSubmit, "Post");

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      {Form}
    </div>
  );
};

export default PostForm;

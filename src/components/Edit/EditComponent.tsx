import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { ActionType, IPost, ValuesType } from "../types/types";

const EditComponent: React.FC<IPost> = ({ post }) => {
  const dispatch = useDispatch<React.Dispatch<ActionType>>();

  const onFormSubmit = (values: ValuesType) =>
    dispatch({
      type: "UPDATE",
      id: post.id,
      updateData: { newTitle: values.title, newMessage: values.message },
    });

  const [Form] = useForm(
    { title: post.title, message: post.message },
    onFormSubmit,
    "Update"
  );

  return <div className="updatePost">{Form}</div>;
};

export default EditComponent;

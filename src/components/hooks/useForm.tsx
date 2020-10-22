import React from "react";
import { useFormik } from "formik";
import { ValuesType } from "../types/types";

export const useForm = (
  initvValues: ValuesType,
  onFormSubmit: (values: ValuesType) => void,
  buttonText: string
) => {
  const formik = useFormik({
    initialValues: {
      title: initvValues.title,
      message: initvValues.message,
    },
    onSubmit: (values: ValuesType) => {
      onFormSubmit(values);
      formik.resetForm();
    },
  });

  const Form = (
    <form className="createForm" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter Post Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <textarea
        rows={10}
        name="message"
        placeholder="Enter Post Text"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      <button type="submit" className="postBut">
        {buttonText}
      </button>
    </form>
  );

  return [Form];
};

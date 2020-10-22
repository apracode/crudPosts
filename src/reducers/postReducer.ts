import { Reducer } from "redux";
import { ActionType, PostType, StateType } from "../components/types/types";

const postReducer: Reducer<StateType, ActionType> = (
  state: StateType = [],
  action: ActionType
): StateType => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.newData!];
    case "DELETE_POST":
      return state.filter((post: PostType) => post.id !== action.id);
    case "EDIT_POST":
      return state.map((post: PostType) =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map((post: PostType) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.updateData?.newTitle,
            message: action.updateData?.newMessage,
            editing: !post.editing,
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;

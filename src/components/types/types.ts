export type PostType = {
  id: string;
  title?: string;
  message?: string;
  editing: boolean;
};

export type UpdatedDataType = {
  newTitle?: string;
  newMessage?: string;
};
export type StateType = PostType[];

export type ActionType = {
  type: string;
  updateData?: UpdatedDataType;
  newData?: PostType;
  id?: string;
};

export interface IPost {
  key?: string;
  post: PostType;
}

export type ValuesType = {
  title?: string;
  message?: string;
};

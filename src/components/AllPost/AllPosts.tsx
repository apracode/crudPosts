import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import EditComponent from "../Edit/EditComponent";
import { PostType, StateType } from "../types/types";

const AllPosts: React.FC = () => {
  const posts = useSelector((state: StateType) => state);
  return (
    <div className="allPosts">
      <h1>All Posts</h1>
      {posts
        ? posts.map((post: PostType) => (
            <div key={post.id}>
              {post.editing ? (
                <EditComponent post={post} key={post.id} />
              ) : (
                <Post key={post.id} post={post} />
              )}
            </div>
          ))
        : null}
    </div>
  );
};

export default AllPosts;

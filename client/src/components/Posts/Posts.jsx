import React from "react";
import Post from "../Post/Post";
import "./Posts.scss";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

import React from "react";
import PostItem from "./PostItem";
import { PostListsProps } from "../types/post";

const PostList = (props: PostListsProps) => {
  const posts = props.posts;
  const title = props.title;

  return (
    <div>
      <h1 className="postHeading"> {title} </h1>
      {posts.map((post) => (
        <PostItem value={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;

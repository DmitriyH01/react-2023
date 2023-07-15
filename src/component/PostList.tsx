import React from "react";
import PostItem from "./PostItem";
import { PostListsProps, PostValue } from "../types/post";

const PostList = (props: PostListsProps) => {
  const posts: PostValue[] = props.posts;

  return (
    <div>
      <h1 className="postHeading"> Posts List </h1>
      {posts.map((post) => (
        <PostItem value={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;

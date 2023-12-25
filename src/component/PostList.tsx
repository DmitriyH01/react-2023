import React from "react";
import PostItem from "./PostItem";
import { PostListsProps } from "../types/post";

const PostList = (props: PostListsProps) => {
  const posts = props.posts;
  const title = props.title;
  const deletePost = props.delete;

  return (
    <div>
      <h1 className="postHead"> {title} </h1>
      {posts.map((post) => (
        <PostItem value={post} postsList={title} delete={deletePost} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;

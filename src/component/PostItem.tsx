import React from "react";
import { PostPropsValue } from "../types/post";

const PostItem = (props: PostPropsValue) => {
  const post = props.value;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <button>Delete Post</button>
      </div>
    </div>
  );
};

export default PostItem;

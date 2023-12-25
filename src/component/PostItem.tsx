import React from "react";
import { PostPropsValue } from "../types/post";
import { PostValue } from "../types/post";

const PostItem = (props: PostPropsValue) => {
  const [post, postList]: [PostValue, string] = [props.value, props.postsList];
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <button onClick={() => props.delete(post.id, postList)}>Delete Post</button>
      </div>
    </div>
  );
};

export default PostItem;

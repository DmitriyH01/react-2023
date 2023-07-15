import React from "react";

const PostItem = () => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1. TypeScript</strong>
        <div>
          TypeScript - TypeScript adds additional syntax to JavaScript to support a tighter
          integration with your editor. Catch errors early in your editor.
        </div>
      </div>
      <div className="post__btn">
        <button>Delete Post</button>
      </div>
    </div>
  );
};

export default PostItem;

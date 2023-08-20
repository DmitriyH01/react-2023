import React from "react";
import PostInput from "./UI/input/PostInput";
import PostButton from "./UI/button/PostButton";
import { PostValue } from "../types/post";

const PostForm = (props: { postId: number; create: (newPost: PostValue) => void }) => {
     
  const [postId, create] = [props.postId, props.create];
  const [inputTitle, setInputTitle] = React.useState<string>("");
  const [inputBody, setInputBody] = React.useState<string>("");

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const newPost: PostValue = {
      id: postId + 1,
      title: inputTitle,
      body: inputBody,
    };
    create(newPost);

    setInputTitle("");
    setInputBody("");
  };

  return (
    <form>
      <PostInput
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        type="text"
        placeholder="Post name"
      />
      <PostInput
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
        type="text"
        placeholder="Post about"
      />
      <PostButton onClick={addNewPost}> Create Post</PostButton>
    </form>
  );
};

export default PostForm;

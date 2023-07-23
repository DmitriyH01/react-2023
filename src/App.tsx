import React from "react";
import "./styles/App.css";
import { PostValue } from "./types/post";
import { DEVELOPERS_ITEM_TEXT, LANGUAGES_ITEM_TEXT, LISTS_TITLES } from "./config/text";
import PostList from "./component/PostList";
import { getPostTitle } from "./utils/functions";
import PostButton from "./component/UI/button/PostButton";
import PostInput from "./component/UI/input/PostInput";

function App() {
  const [postsLanguages, setPostsLanguages] = React.useState<PostValue[]>([
    {
      id: 1,
      title: getPostTitle(LANGUAGES_ITEM_TEXT.typeScript),
      body: LANGUAGES_ITEM_TEXT.typeScript,
    },
    { id: 2, title: getPostTitle(LANGUAGES_ITEM_TEXT.java), body: LANGUAGES_ITEM_TEXT.java },
    { id: 3, title: getPostTitle(LANGUAGES_ITEM_TEXT.python), body: LANGUAGES_ITEM_TEXT.python },
  ]);
  const [postsDevelopers, setPostsDevelopers] = React.useState<PostValue[]>([
    {
      id: 1,
      title: getPostTitle(DEVELOPERS_ITEM_TEXT.frontend),
      body: DEVELOPERS_ITEM_TEXT.frontend,
    },
    {
      id: 2,
      title: getPostTitle(DEVELOPERS_ITEM_TEXT.backend),
      body: DEVELOPERS_ITEM_TEXT.backend,
    },
    {
      id: 3,
      title: getPostTitle(DEVELOPERS_ITEM_TEXT.fullstack),
      body: DEVELOPERS_ITEM_TEXT.fullstack,
    },
  ]);
  const [titleLanguages, setTitleLanguages] = React.useState<string>(LISTS_TITLES.listLanguages);
  const [titleDevelopers, setTitleDevelopers] = React.useState<string>(LISTS_TITLES.listDevelopers);

  const [inputTitle, setInputTitle] = React.useState<string>("");
  const bodyInputRef = React.useRef<HTMLInputElement>(null);

  const addNewPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <form>
        <PostInput
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />
        <PostInput ref={bodyInputRef} type="text" placeholder="Post about" />
        <PostButton>Create Post</PostButton>
      </form>
      <PostList posts={postsLanguages} title={titleLanguages} />
      <PostList posts={postsDevelopers} title={titleDevelopers} />
    </div>
  );
}

export default App;

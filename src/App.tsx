import React from "react";
import "./styles/App.css";
import { PostValue } from "./types/post";
import { DEVELOPERS_ITEM_TEXT, LANGUAGES_ITEM_TEXT, LISTS_TITLES } from "./config/text";
import PostList from "./component/PostList";
import { getPostTitle } from "./utils/functions";

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

  return (
    <div className="App">
      <PostList posts={postsLanguages} title={titleLanguages} />
      <PostList posts={postsDevelopers} title={titleDevelopers} />
    </div>
  );
}

export default App;

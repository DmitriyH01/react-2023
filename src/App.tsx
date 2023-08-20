import React from "react";
import "./styles/App.css";
import { PostValue } from "./types/post";
import { LISTS_TITLES } from "./config/text";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import { POSTS } from "./config/posts";

function App() {
  const [postsLanguages, setPostsLanguages] = React.useState<PostValue[]>(POSTS.languages);
  const [postsDevelopers, setPostsDevelopers] = React.useState<PostValue[]>(POSTS.developers);

  const [titleLanguages, setTitleLanguages] = React.useState<string>(LISTS_TITLES.listLanguages);
  const [titleDevelopers, setTitleDevelopers] = React.useState<string>(LISTS_TITLES.listDevelopers);

  const createPost = (newPost: PostValue) => {
    setPostsLanguages([...postsLanguages, newPost]);
  };

  return (
    <div className="App">
      <PostForm postId={postsLanguages.length} create={createPost} />
      <PostList posts={postsLanguages} title={titleLanguages} />
      <PostList posts={postsDevelopers} title={titleDevelopers} />
    </div>
  );
}

export default App;

import React from "react";
import "./styles/App.css";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import { PostValue } from "./types/post";
import { LISTS_TITLES } from "./config/text";
import { POSTS } from "./config/posts";

function App() {
  const [postsLanguages, setPostsLanguages] = React.useState<PostValue[]>(POSTS.languages);
  const [postsDevelopers, setPostsDevelopers] = React.useState<PostValue[]>(POSTS.developers);

  const [titleLanguages, setTitleLanguages] = React.useState<string>(LISTS_TITLES.listLanguages);
  const [titleDevelopers, setTitleDevelopers] = React.useState<string>(LISTS_TITLES.listDevelopers);

  const createPost = (newPost: PostValue, postList: string): void => {
    postList === LISTS_TITLES.listDevelopers
      ? setPostsDevelopers([...postsDevelopers, newPost])
      : setPostsLanguages([...postsLanguages, newPost]);
  };

  const deletePost = (postId: number, postList: string): void => {
    postList === LISTS_TITLES.listDevelopers
      ? setPostsDevelopers(getChangedPosts(postId, postsDevelopers))
      : setPostsLanguages(getChangedPosts(postId, postsLanguages));
  };

  const getNextPostId = (postList: string): number => {
    return postList === LISTS_TITLES.listDevelopers
      ? postsDevelopers.length + 1
      : postsLanguages.length + 1;
  };

  return (
    <div className="App">
      <PostForm postId={getNextPostId} create={createPost} />
      <PostList posts={postsLanguages} title={titleLanguages} delete={deletePost} />
      <PostList posts={postsDevelopers} title={titleDevelopers} delete={deletePost} />
    </div>
  );
}

const getChangedPosts = (postId: number, postList: PostValue[]): PostValue[] => {
  let changedPostLIst: PostValue[] = [];

  for (let i = 0; i < postList.length; i++) {
    if (postList[i].id === postId) {
      postList.splice(i, 1);
    }
    if (!postList[i]) {
      break;
    }
    if (i !== postList[i].id) {
      postList[i].id = i + 1;
    }

    changedPostLIst.push(postList[i]);
  }

  return changedPostLIst;
};

export default App;

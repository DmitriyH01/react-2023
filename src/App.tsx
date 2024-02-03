import React from "react";
import "./styles/App.css";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import { PostValue } from "./types/post";
import { LISTS_TITLES } from "./config/text";
import { POSTS } from "./config/posts";
import { getChangedPosts } from "./utils/postList";

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
      <div>
        <hr style={{ margin: "15px 0" }}></hr>
        <select>
          <option value="value1"> By name</option>
          <option value="value2"> By consists</option>
        </select>
      </div>
      {getPostsList(postsLanguages, titleLanguages, deletePost)}
      {getPostsList(postsDevelopers, titleDevelopers, deletePost)}
    </div>
  );
}

const getPostsList = (
  posts: PostValue[],
  title: string,
  deletePostLogic: (postId: number, postList: string) => void
) => {
  return posts.length ? (
    <PostList posts={posts} title={title} delete={deletePostLogic} />
  ) : (
    getEmptyPostHeader()
  );
};

const getEmptyPostHeader = (): React.JSX.Element => <h1 className="postHead">Posts don`t found</h1>;

export default App;

import React from "react";
import "./styles/App.css";
import { PostValue } from "./types/post";
import { POST_ITEM_TEXT, POST_ID_COUNT } from "./config/text";
import PostList from "./component/PostList";

function App() {
  const [posts, setPosts] = React.useState<PostValue[]>([
    { id: POST_ID_COUNT.typeScript, title: "TypeScript", body: POST_ITEM_TEXT.typeScript },
    { id: POST_ID_COUNT.java, title: "Java", body: POST_ITEM_TEXT.java },
    { id: POST_ID_COUNT.python, title: "Python", body: POST_ITEM_TEXT.python },
  ]);

  return (
    <div className="App">
      <PostList posts = {posts} />
    </div>
  );
}

export default App;

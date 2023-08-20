import React from "react";
import { LISTS_TITLES } from "../config/text";

const PostSelect = (props: { postList: (postTitle: string) => void }) => {
  const returnPostTitle = props.postList;
  const [selected, setSelected] = React.useState<string>("");

  const changeSelectedPost = (selectedPost: string) => {
    setSelected(selectedPost);
    returnPostTitle(selectedPost);
  };

  return (
    <div className="post__selection">
      <label>
        <input
          type="checkbox"
          checked={selected === LISTS_TITLES.listLanguages}
          onChange={() => changeSelectedPost(LISTS_TITLES.listLanguages)}
        />
        {LISTS_TITLES.listLanguages}
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected === LISTS_TITLES.listDevelopers}
          onChange={() => changeSelectedPost(LISTS_TITLES.listDevelopers)}
        />
        {LISTS_TITLES.listDevelopers}
      </label>
    </div>
  );
};

export default PostSelect;

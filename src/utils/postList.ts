import { PostValue } from "../types/post";


export const getChangedPosts = (postId: number, postList: PostValue[]): PostValue[] => {
  const changedPostList: PostValue[]=[];
  // Remove post with specified postId
  const filteredPostList = postList.filter((post) => post.id !== postId);

  updatePostId(filteredPostList, changedPostList);

  return changedPostList;
};

const updatePostId = (
  filteredPostsList: PostValue[],
  changedPostList: PostValue[]
): PostValue[] => {
  for (let i = 0; i < filteredPostsList.length; i++) {
    const updatedPost: PostValue = { ...filteredPostsList[i], id: i + 1 };
    changedPostList.push(updatedPost);
  }
  return changedPostList;
};

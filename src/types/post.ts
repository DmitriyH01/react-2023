export type PostListsProps = {
  posts: PostValue[];
  title: string;
  delete: (postId: number, postList: string) => void;
};

export type PostPropsValue = {
  value: PostValue;
  postsList: string;
  delete: (postId: number, postList: string) => void;
};

export type PostValue = {
  id: number;
  title: string;
  body: string;
};

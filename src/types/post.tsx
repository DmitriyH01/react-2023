export type PostListsProps = {
  posts: PostValue[];
};

export type PostPropsValue = {
  value: PostValue;
};

export type PostValue = {
  id: number;
  title: string;
  body: string;
};

export type PostListsProps = {
  posts: PostValue[];
  title: string;
};

export type PostPropsValue = {
  value: PostValue;
};

export type PostValue = {
  id: number;
  title: string;
  body: string;
};

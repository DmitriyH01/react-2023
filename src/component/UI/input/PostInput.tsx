import React from "react";
import { HTMLInputProps } from "../../../types";
import classes from "./PostInput.module.css";

const PostInput = React.forwardRef((props: HTMLInputProps, ref: React.LegacyRef<HTMLInputElement>) => {
  return <input ref={ref} className={classes.postInput} {...props} />;
});

export default PostInput;

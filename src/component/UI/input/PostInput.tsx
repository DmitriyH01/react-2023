import React from "react";
import { HTMLInputProps } from "../../../types";
import classes from "./PostInput.module.css";

const PostInput = (props: HTMLInputProps) => {
  return <input className={classes.postInput} {...props} />;
};

export default PostInput;

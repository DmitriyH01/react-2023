import React from "react";
import classes from "./PostButton.module.css";
import { HTMLProps } from "../../../types";

const PostButton = (props: HTMLProps) => {
  return (
    <button {...props} className={classes.postBtn}>
      {}
    </button>
  );
};

export default PostButton;

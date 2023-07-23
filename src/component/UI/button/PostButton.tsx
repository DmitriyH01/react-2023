import React from "react";
import classes from "./PostButton.module.css";
import { HTMLButtonProps } from "../../../types";

const PostButton = (props: HTMLButtonProps) => {
  return (
    <button {...props} className={classes.postBtn}>
      {}
    </button>
  );
};

export default PostButton;

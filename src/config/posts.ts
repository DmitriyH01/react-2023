import { getPostTitle } from "../utils/functions";
import { LANGUAGES_ITEM_TEXT, DEVELOPERS_ITEM_TEXT } from "./text";

export const POSTS = {
  languages: [
    {
      id: 1,
      title: getPostTitle(LANGUAGES_ITEM_TEXT.typeScript),
      body: LANGUAGES_ITEM_TEXT.typeScript,
    },
    { id: 2, title: getPostTitle(LANGUAGES_ITEM_TEXT.java), body: LANGUAGES_ITEM_TEXT.java },
    { id: 3, title: getPostTitle(LANGUAGES_ITEM_TEXT.python), body: LANGUAGES_ITEM_TEXT.python },
  ],
  developers: [
    {
      id: 1,
      title: getPostTitle(DEVELOPERS_ITEM_TEXT.frontend),
      body: DEVELOPERS_ITEM_TEXT.frontend,
    },
    {
      id: 2,
      title: getPostTitle(DEVELOPERS_ITEM_TEXT.backend),
      body: DEVELOPERS_ITEM_TEXT.backend,
    },
    {
      id: 3,
      title: getPostTitle(DEVELOPERS_ITEM_TEXT.fullstack),
      body: DEVELOPERS_ITEM_TEXT.fullstack,
    },
  ],
};

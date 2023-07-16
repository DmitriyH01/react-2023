import { DEVELOPERS_ITEM_TEXT, LANGUAGES_ITEM_TEXT } from "../config/text";

const allItemTexts = [DEVELOPERS_ITEM_TEXT, LANGUAGES_ITEM_TEXT];

export const getPostTitle = (text: string): string => {
  let title: string = "";
  for (let i = 0; i < allItemTexts.length; i++) {
    for (let j = 0; j < Object.values(allItemTexts[i]).length; j++) {
      if (Object.values(allItemTexts[i])[j] === text) {
        title = Object.keys(allItemTexts[i])[j];
      }
    }
  }

  return title.charAt(0).toUpperCase().concat("", title.slice(1));
};

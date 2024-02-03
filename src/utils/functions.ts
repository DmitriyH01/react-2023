import { DEVELOPERS_ITEM_TEXT, LANGUAGES_ITEM_TEXT } from "../config/text";

const allItemTexts = [DEVELOPERS_ITEM_TEXT, LANGUAGES_ITEM_TEXT];

export const getPostTitle = (text: string): string => {
  let title: string = "";

  for (const item of allItemTexts) {
    const key = Object.keys(item).find(() => Object.values(item).includes(text));
    if (key) {
      title = key;
      break;
    }
  }
  return title.charAt(0).toUpperCase() + title.slice(1);
};

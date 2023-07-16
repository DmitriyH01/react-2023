export enum LANGUAGES_ITEM_TEXT {
  typeScript = "TypeScript - TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.",
  java = "Java is a widely used object-oriented programming language and software platform ",
  python = "Python is a high-level general-purpose programming language with dynamic strong typing and automatic memory management, focused on increasing developer productivity, code readability and quality, as well as ensuring the portability of programs written on it.",
}

export enum DEVELOPERS_ITEM_TEXT {
  fullstack = "Prefer Python or combine JS and Java",
  frontend = "Prefer TS or vanilla JS",
  backend = "Prefer Java",
}

export enum LISTS_TITLES {
  listLanguages = "Posts program languages",
  listDevelopers = "Posts developers",
}

export const LANGUAGE_TITLES: string[] = Object.keys(LANGUAGES_ITEM_TEXT);

export const DEVELOPER_TITLES: string[] = Object.keys(DEVELOPERS_ITEM_TEXT);

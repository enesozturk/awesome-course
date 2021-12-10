export type Page = {
  pageName: string;
  body: string;
};

export type EditorProps = {
  answerFile: Page;
  pages: Page[];
};

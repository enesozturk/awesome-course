export type Page = {
  pageName: string;
  body: string;
};

export type EditorProps = {
  answerPage: Page;
  pages: Page[];
  settings: boolean;
};

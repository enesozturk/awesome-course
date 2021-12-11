export type CodeFile = {
  fileName: string;
  body: string;
};

export type EditorProps = {
  answerFile: CodeFile;
  files: CodeFile[];
};

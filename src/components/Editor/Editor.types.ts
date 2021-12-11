export type CodeFile = {
  fileName: string;
  body: string;
};

export type EditorProps = {
  answerFile: CodeFile | undefined;
  files: CodeFile[];
  fileToEdit: string;
  showAnswer?: boolean;
};

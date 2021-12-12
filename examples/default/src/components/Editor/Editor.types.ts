export type CodeFile = {
  fileName: string;
  body: string;
};

export type EditorProps = {
  answerFile: CodeFile | undefined;
  files: CodeFile[];
  fileNameToEdit: string;
  showAnswer?: boolean;
};

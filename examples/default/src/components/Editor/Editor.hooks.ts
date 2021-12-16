import * as React from "react";
import { useEditorContext } from "../../context/hooks";
import { sortFiles } from "../../lib/file";
import type { CodeFile } from "./Editor.types";

type UseEditorProps = {
  files: CodeFile[];
  fileNameToEdit: string;
};

export const useEditor = ({ files, fileNameToEdit }: UseEditorProps) => {
  const { setFileContent, fileContent } = useEditorContext();

  const sortedFiles = sortFiles(files, fileNameToEdit);
  const fileToEdit = files.filter(
    (file: CodeFile) => file.fileName === fileNameToEdit
  )[0];

  const [activeFile, setActiveFile] = React.useState<CodeFile | undefined>(
    fileToEdit
  );

  React.useEffect(() => {
    setFileContent(fileToEdit?.body);
    const activeFile = sortedFiles.find(
      (file) => file.fileName === fileNameToEdit
    );
    activeFile && setActiveFile(activeFile);
  }, [files]);

  return {
    activeFile,
    setActiveFile,
    sortedFiles,
    fileContent,
    setFileContent,
  };
};

import { createContext } from "react";

export interface IEditorContext {
  fileContent: string | undefined;
  showAnswer: boolean;
  showDocument: boolean;
  isFailed: boolean;
  resetState: () => void;
  setFileContent: (arg: string | undefined) => void;
  setShowAnswer: (arg: boolean) => void;
  setShowDocument: (arg: boolean) => void;
  setIsFailed: (arg: boolean) => void;
}

export const EditorContext = createContext<IEditorContext | null>(null);

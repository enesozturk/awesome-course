import { createContext } from "react";

export interface IEditorContext {
  fileContent: string;
  setFileContent: (arg: string | undefined) => void;
}

export const EditorContext = createContext<IEditorContext | null>(null);

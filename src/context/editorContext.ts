import { createContext } from "react";

export interface IEditorContext {
  userFileContent: string;
  setUserFileContent: (arg: any) => void;
  editorRef: any;
}

export const EditorContext = createContext<IEditorContext | null>(null);

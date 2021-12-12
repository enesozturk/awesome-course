import { useReducer, useRef } from "react";
import { editorReducer, SET_FILE_CONTENT } from "../reducers/editor";
import { EditorContext } from "../editorContext";

export const EditorProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(editorReducer, {
    fileContent: "",
  });

  const setFileContent = (content: any) => {
    dispatch({ type: SET_FILE_CONTENT, payload: content });
  };

  return (
    <EditorContext.Provider
      value={{
        ...state,
        setFileContent,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

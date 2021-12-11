import { useReducer, useRef } from "react";
import { editorReducer, SET_USER_FILE } from "../reducers/editor";
import { EditorContext } from "../editorContext";

export const EditorProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(editorReducer, {
    userFileContent: "",
  });
  const editorRef = useRef();

  const setUserFileContent = (content: any) => {
    dispatch({ type: SET_USER_FILE, payload: content });
  };

  return (
    <EditorContext.Provider
      value={{
        ...state,
        editorRef,
        setUserFileContent,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

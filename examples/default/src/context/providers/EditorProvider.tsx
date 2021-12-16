import { useReducer } from "react";
import {
  editorReducer,
  RESET_STATE,
  SET_FILE_CONTENT,
  SET_SHOW_ANSWER,
  SET_SHOW_DOCUMENT,
  SET_IS_FAILED,
} from "../reducers/editor";
import { EditorContext } from "../editorContext";

export const EditorProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(editorReducer, {
    fileContent: "",
    showAnswer: false,
    showDocument: true,
    isFailed: false,
  });

  const setFileContent = (content: any) => {
    dispatch({ type: SET_FILE_CONTENT, payload: content });
  };

  const setShowAnswer = (state: boolean) => {
    dispatch({ type: SET_SHOW_ANSWER, payload: state });
  };

  const setShowDocument = (state: boolean) => {
    dispatch({ type: SET_SHOW_DOCUMENT, payload: state });
  };

  const setIsFailed = (state: boolean) => {
    dispatch({ type: SET_IS_FAILED, payload: state });
  };

  const resetState = () => {
    dispatch({ type: RESET_STATE });
  };

  return (
    <EditorContext.Provider
      value={{
        ...state,
        resetState,
        setFileContent,
        setShowAnswer,
        setShowDocument,
        setIsFailed,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const RESET_STATE = "RESET_STATE";
export const SET_FILE_CONTENT = "SET_FILE_CONTENT";
export const SET_SHOW_ANSWER = "SET_SHOW_ANSWER";
export const SET_SHOW_DOCUMENT = "SET_SHOW_DOCUMENT";
export const SET_IS_FAILED = "SET_IS_FAILED";

type EditorState = {
  fileContent: string | undefined;
  showAnswer: boolean;
  showDocument: boolean;
  isFailed: boolean;
};

export const editorReducer = (state: EditorState, action: any): EditorState => {
  switch (action.type) {
    case RESET_STATE:
      return {
        ...state,
        showAnswer: false,
        showDocument: true,
        isFailed: false,
      };
    case SET_FILE_CONTENT:
      return {
        ...state,
        fileContent: action.payload,
      };
    case SET_SHOW_ANSWER:
      return {
        ...state,
        showAnswer: action.payload,
      };
    case SET_SHOW_DOCUMENT:
      return {
        ...state,
        showDocument: action.payload,
      };
    case SET_IS_FAILED:
      return {
        ...state,
        isFailed: action.payload,
      };
    default:
      return state;
  }
};

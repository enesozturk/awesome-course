export const SET_FILE_CONTENT = "SET_FILE_CONTENT";

type EditorState = {
  fileContent: string | undefined;
};

export const editorReducer = (state: EditorState, action: any) => {
  switch (action.type) {
    case SET_FILE_CONTENT:
      return {
        ...state,
        fileContent: action.payload,
      };
    default:
      return state;
  }
};

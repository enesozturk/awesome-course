export const SET_USER_FILE = "SET_USER_FILE";

export const editorReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER_FILE:
      return {
        ...state,
        userFileContent: action.payload,
      };
    default:
      return state;
  }
};

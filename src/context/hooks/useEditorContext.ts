import { useContext } from "react";
import { EditorContext } from "../editorContext";

export const useEditorContext = () => {
  const context = useContext(EditorContext);

  if (context === null) {
    throw new Error(
      "Internal context cannot be null, please add 'Provider' to the root component."
    );
  }

  return context;
};

import React, { useState } from "react";

import MonacoEditor, { DiffEditor } from "@monaco-editor/react";

import type { EditorProps, CodeFile } from "./Editor.types";
import { useEditorContext } from "../../context/hooks";
import { sortFiles } from "../../lib/file";

const Editor = ({ answerFile, files, showAnswer, fileToEdit }: EditorProps) => {
  const sortedFiles = sortFiles(files, fileToEdit);

  const { editorRef } = useEditorContext();
  const diffEditorRef = React.useRef(null);

  const [activeFile, setActiveFile] = useState<CodeFile | undefined>(
    sortedFiles[0]
  );

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  function handleDiffEditorDidMount(editor: any) {
    diffEditorRef.current = editor;
  }

  return (
    <div className="editor overflow-hidden md:rounded-xl shadow-3xl dark: shadow-xl flex max-h-full bg-gray-900 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-100">
      <div className="w-full flex flex-col rounded-2xl">
        <div className="flex-none h-11 flex items-center px-4 border-b border-white-20 dark:border-dark-20">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-white bg-opacity-10" />
            <div className="w-3 h-3 rounded-full bg-white bg-opacity-10" />
            <div className="w-3 h-3 rounded-full bg-white bg-opacity-10" />
          </div>
        </div>
        <div className="flex-none relative overflow-auto whitespace-nowrap bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-5">
          <ul className="flex text-sm">
            {sortedFiles.map((file, index) => (
              <li
                key={index}
                className={`flex-none hover:text-white ${
                  activeFile?.fileName === file.fileName
                    ? `bg-white bg-opacity-10 text-white`
                    : `text-white-40`
                } ${
                  activeFile?.fileName !== file.fileName &&
                  file.fileName === fileToEdit
                    ? "text-cyan-200"
                    : ""
                }`}
                onClick={() => setActiveFile(file)}
              >
                <button className="py-2 px-4 font-medium focus:outline-none flex items-center m-0">
                  {file.fileName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex-auto flex min-h-0">
          <pre className="w-full flex min-h-full text-xs md:text-sm">
            {showAnswer ? (
              <DiffEditor
                theme="vs-dark"
                language="javascript"
                original={activeFile?.body || ""}
                modified={answerFile?.body || ""}
                onMount={handleDiffEditorDidMount}
                options={{
                  inDiffEditor: showAnswer,
                }}
              />
            ) : (
              <MonacoEditor
                theme="vs-dark"
                language="javascript"
                options={{
                  minimap: { enabled: false },
                }}
                value={activeFile?.body || ""}
                onMount={handleEditorDidMount}
              />
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Editor;

import React, { useState } from "react";

import MonacoEditor from "@monaco-editor/react";

import type { EditorProps, Page } from "./Editor.props";

export default function Editor({ answerFile, pages }: EditorProps) {
  const [activePage, setActivePage] = useState<Page | undefined>(pages[0]);

  const editorRef = React.useRef(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
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
            {pages.map((page, index) => (
              <li
                key={index}
                className={`flex-none hover:text-white ${
                  activePage?.pageName === page.pageName
                    ? `bg-white bg-opacity-10 text-white`
                    : `text-white-40`
                }`}
                onClick={() => setActivePage(page)}
              >
                <button className="py-2 px-4 font-medium focus:outline-none flex items-center m-0">
                  {page.pageName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex-auto flex min-h-0">
          <pre className="w-full flex min-h-full text-xs md:text-sm">
            <MonacoEditor
              theme="vs-dark"
              language="javascript"
              options={{
                minimap: { enabled: false },
              }}
              value={activePage?.body || ""}
              onMount={handleEditorDidMount}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

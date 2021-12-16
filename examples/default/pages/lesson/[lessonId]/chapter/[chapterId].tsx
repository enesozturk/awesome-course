import * as React from "react";

import dynamic from "next/dynamic";

import {
  _getStaticPaths,
  _getStaticProps,
} from "../../../../src/utils/chapterPageMethods";
import type { Context } from "../../../../src/utils/chapterPageMethods";
import Footer from "../../../../src/components/Footer";
import { ChapterProps } from "../../../../src/types/ChapterPage";
import { useEditorContext } from "../../../../src/context/hooks";

const Editor = dynamic(() => import("../../../../src/components/Editor"), {
  ssr: false,
});

export default function Chapter(props: ChapterProps) {
  const { showAnswer, showDocument, resetState } = useEditorContext();

  React.useEffect(() => {
    resetState();
  }, [props.currentChapterId]);

  const editorProps = {
    files: props.codeFiles,
    answerFile: props.answerFile,
    showAnswer,
    fileNameToEdit: props.fileNameToEdit,
  };

  return (
    <div className="app">
      <main className="flex-1 flex bg-white dark:bg-gray-800 text-gray-900 dark:text-white relative overflow-scroll">
        <div
          className={`flex-1 p-8 pb-0 box-border overflow-scroll markdown ${
            !showDocument ? "hidden md:flex" : ""
          }`}
        >
          <div
            className="pb-12"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
        <div
          className={`flex-1 p-4 md:p-8 box-border overflow-hidden relative ${
            showDocument ? "hidden md:flex" : ""
          }`}
        >
          <Editor {...editorProps} />
        </div>
      </main>
      <Footer {...props} />
    </div>
  );
}

export async function getStaticProps(context: Context) {
  return _getStaticProps(context);
}

export const getStaticPaths = () => {
  return _getStaticPaths();
};

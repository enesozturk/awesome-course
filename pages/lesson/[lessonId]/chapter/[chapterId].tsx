import dynamic from "next/dynamic";

import {
  _getStaticPaths,
  _getStaticProps,
} from "../../../../src/utils/chapterPageMethods";
import type { Context } from "../../../../src/utils/chapterPageMethods";

const Editor = dynamic(() => import("../../../../src/components/Editor"), {
  ssr: false,
});

export default function Home({ answerFile, content, codeFiles }: any) {
  return (
    <div className="app">
      <main className="flex-1 flex bg-white dark:bg-gray-800 text-gray-900 dark:text-white relative overflow-scroll">
        <div className="flex-1 p-8 pb-0 box-border overflow-scroll markdown">
          <div
            className="pb-12"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="flex-1 p-8 box-border overflow-hidden">
          <Editor answerFile={answerFile} pages={codeFiles} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context: Context) {
  return _getStaticProps(context);
}

export const getStaticPaths = () => {
  return _getStaticPaths();
};

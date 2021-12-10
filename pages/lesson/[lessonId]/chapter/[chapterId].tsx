import dynamic from "next/dynamic";
import { pages } from "./constants";

const Editor = dynamic(() => import("../../../../src/components/Editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="app">
      <main className="flex-1 flex bg-white dark:bg-gray-800 text-gray-900 dark:text-white relative overflow-scroll">
        <div className="flex-1 p-8 pb-0 box-border overflow-scroll markdown"></div>
        <div className="flex-1 p-8 box-border overflow-hidden">
          <Editor pages={pages} />
        </div>
      </main>
    </div>
  );
}

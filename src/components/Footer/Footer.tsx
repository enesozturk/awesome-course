import React from "react";

import Link from "next/link";
import type { FooterProps } from "./Footer.types";

export default function Footer({
  title,
  currentLessonId,
  currentChapterId,
  prevChapter,
  nextChapter,
  currentChapterIndex,
  chaptersLength,
}: FooterProps) {
  return (
    <footer className="flex justify-between w-full px-8 py-4 box-border bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
      <div className="flex-1 flex justify-start">
        <div className="p-2 box-border flex items-center justify-center rounded-md font-semibold">
          {title}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <button className="p-2 box-border bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-800 dark:bg-opacity-40 dark:hover:bg-opacity-50 text-blue-500 dark:text-blue-400 flex items-center justify-center rounded-md cursor-pointer">
          Check Answer
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex">
          <Link
            href={`/lesson/${currentLessonId}/chapter/${
              prevChapter?.id || currentChapterId
            }`}
          >
            <a
              className={`p-2 box-border flex items-center justify-center rounded-md cursor-pointer
                ${
                  !prevChapter
                    ? "text-gray-300"
                    : "bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10"
                }
                `}
            >
              Previous Chapter
            </a>
          </Link>
          <div className="p-2 mx-4 box-border flex items-center justify-center rounded-md cursor-pointer">
            {`${currentChapterIndex + 1} / ${chaptersLength}`}
          </div>
          <Link
            href={`/lesson/${currentLessonId}/chapter/${
              nextChapter?.id || currentChapterId
            }`}
          >
            <a
              className={`p-2 box-border flex items-center justify-center rounded-md cursor-pointer
              ${
                !nextChapter
                  ? "text-gray-300"
                  : "bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10"
              }
              `}
            >
              Next Chapter
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

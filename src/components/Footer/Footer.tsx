import React from "react";

import Link from "next/link";
import type { FooterProps } from "../../types/Footer";
import { useEditorContext } from "../../context/hooks";

export default function Footer({
  title,
  currentLessonId,
  currentChapterId,
  prevChapter,
  nextChapter,
  currentChapterIndex,
  chaptersLength,
  checkAnswer,
  showAnswer,
  setShowAnswer,
}: FooterProps) {
  const isLastChapter = currentChapterIndex === chaptersLength - 1;
  const { fileContent } = useEditorContext();

  return (
    <footer className="footer-container">
      <div className="flex-1 flex justify-start">
        <div className="p-2 box-border flex items-center justify-center rounded-md font-semibold">
          {title}
        </div>
      </div>
      {fileContent ? (
        <div className="flex-1 flex justify-center">
          <button onClick={checkAnswer} className="button mr-4 button-blue">
            Check Answer
          </button>
          <button
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
            className="button button-amber"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
      ) : null}
      <div className="flex-1 flex justify-end">
        <div className="flex">
          <Link
            href={`/lesson/${currentLessonId}/chapter/${
              prevChapter?.id || currentChapterId
            }`}
          >
            <a
              className={`p-2 box-border flex items-center justify-center rounded-md
                ${
                  !prevChapter
                    ? "text-gray-500 cursor-default"
                    : "button-default cursor-pointer"
                }
                `}
            >
              Previous Chapter
            </a>
          </Link>
          <div className="p-2 mx-4 box-border flex items-center justify-center rounded-md cursor-default">
            {`${currentChapterIndex + 1} / ${chaptersLength}`}
          </div>
          <Link
            href={`/lesson/${currentLessonId}/${
              isLastChapter
                ? "completed"
                : `chapter/${nextChapter?.id || currentChapterId}`
            }`}
          >
            <a
              className={`button
              ${isLastChapter ? "button-green" : "button-default"}
              `}
            >
              {isLastChapter ? "Complete Lesson" : "Next Chapter"}
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

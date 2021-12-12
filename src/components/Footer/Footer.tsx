import React from "react";

import Link from "next/link";
import type { FooterProps } from "../../types/Footer";
import { useEditorContext } from "../../context/hooks";

import QuestionCircleSVG from "../../../public/svg/question-circle.svg";
import EyeSVG from "../../../public/svg/eye.svg";
import EyeOffSVG from "../../../public/svg/eye-off.svg";
import ArrowLeftSVG from "../../../public/svg/arrow-left.svg";
import ArrowRightSVG from "../../../public/svg/arrow-right.svg";
import DocumentSVG from "../../../public/svg/document.svg";
import CodeFileSVG from "../../../public/svg/code-file.svg";

import { getFooterValues } from "./Footer.utils";

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
  toggleShowDocument,
  showDocument,
}: FooterProps) {
  const isLastChapter = currentChapterIndex === chaptersLength - 1;
  const { fileContent } = useEditorContext();

  const { previouseChapterHref, nextChapterHref, chapterIndicatorText } =
    getFooterValues({
      currentLessonId,
      currentChapterId,
      prevChapter,
      nextChapter,
      currentChapterIndex,
      chaptersLength,
    });

  return (
    <footer className="footer-container">
      <div className="flex-1 flex justify-start hidden md:flex">
        <div className="p-2 box-border flex items-center justify-center rounded-md font-semibold">
          {title}
        </div>
      </div>
      {fileContent ? (
        <div className="flex-1 flex justify-start md:justify-center">
          <button onClick={checkAnswer} className="mr-4 button button-blue">
            <span className="hidden md:flex">Check Answer</span>
            <span className="flex md:hidden icon">
              <QuestionCircleSVG />
            </span>
          </button>
          <button
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
            className="mr-4 button button-amber"
          >
            <span className="hidden md:flex">
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </span>
            <span className="flex md:hidden icon">
              {showAnswer ? <EyeSVG /> : <EyeOffSVG />}
            </span>
          </button>
          <button
            onClick={toggleShowDocument}
            className="button button-default flex md:hidden"
          >
            <span className="hidden sm:flex mr-2">
              {showDocument ? "Show Document" : "Show Code"}
            </span>
            <span className="flex md:hidden icon">
              {showDocument ? <DocumentSVG /> : <CodeFileSVG />}
            </span>
          </button>
        </div>
      ) : null}
      <div className="flex-1 flex justify-end ml-4">
        <div className="flex">
          <Link href={previouseChapterHref}>
            <a
              className={`p-2 box-border flex items-center justify-center rounded-md
                ${
                  !prevChapter
                    ? "text-gray-500 cursor-default"
                    : "button-default cursor-pointer"
                }
                `}
            >
              <span className="hidden md:flex">Previous Chapter</span>
              <span className="flex md:hidden icon">
                <ArrowLeftSVG />
              </span>
            </a>
          </Link>
          <div className="p-2 mx-4 box-border flex items-center justify-center rounded-md cursor-default whitespace-nowrap">
            {chapterIndicatorText}
          </div>
          <Link href={nextChapterHref}>
            <a
              className={`button ${
                isLastChapter ? "button-green" : "button-default"
              }`}
            >
              <span className="hidden md:flex">
                {isLastChapter ? "Complete Lesson" : "Next Chapter"}
              </span>
              <span className="flex md:hidden icon">
                <ArrowRightSVG />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

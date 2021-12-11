import * as React from "react";

import Link from "next/link";

import { getLessonProps, getLessons } from "../../../src/lib/file";
import type { Context } from "../../../src/utils/chapterPageMethods";
import { getCompletedFileProps } from "../../../src/lib/markdown";

type CompletedProps = {
  nextLessonId: string | undefined;
  lessonId: string;
  title: string;
  description: string;
  body: any;
};

export default function Completed({
  nextLessonId,
  lessonId,
  title,
  description,
  body,
}: CompletedProps) {
  return (
    <div className="app bg-white dark:bg-gray-800 text-gray-900 dark:text-white overflow-auto">
      <main className="flex flex-col items-center relative relative w-full max-w-3xl mx-auto mt-16">
        <div className="w-full flex flex-col items-center w-full p-16 rounded-xl mb-64">
          <h1 className="text-8xl font-semibold	text-center mb-8">🎉</h1>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            {title}
          </h1>
          <p className="mt-6 text-l md:text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col items-center mt-16">
            <div
              className="mb-4 markdown"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            {nextLessonId ? (
              <Link href={`/lesson/${parseInt(lessonId) + 1}`}>
                <a
                  className={`p-2 box-border flex items-center justify-center rounded-md bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10 cursor-pointer`}
                >
                  Start Lesson {nextLessonId}
                </a>
              </Link>
            ) : null}
          </div>
          <div className="flex mt-8 pt-4 border-t border-gray-700">
            <Link href="#">
              <a className="p-2 box-border flex items-center justify-center rounded-md cursor-pointer bg-green-200 hover: bg-green-400 dark:bg-green-800 dark:hover:bg-green-900 text-green-500 dark:text-green-400 mr-4">
                Share on Twitter
              </a>
            </Link>
            <Link href="#">
              <a className="p-2 box-border flex items-center justify-center rounded-md cursor-pointer bg-blue-200 hover: bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-900 text-blue-500 dark:text-blue-400">
                Share on Linkedin
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context: Context) {
  const {
    params: { lessonId },
  } = context;

  const { isLastLesson, nextLesson } = getLessonProps(lessonId);
  const { title, description, body } = getCompletedFileProps(lessonId);

  return {
    props: {
      nextLessonId: isLastLesson ? null : nextLesson?.id,
      lessonId,
      title,
      description,
      body,
    },
  };
}

export const getStaticPaths = () => {
  const lessons = getLessons();
  let paths: string[] = [];

  lessons.map((lesson: { id: number }) => {
    paths.push(`/lesson/${lesson.id}/completed`);
  });

  return {
    paths: paths,
    fallback: false,
  };
};

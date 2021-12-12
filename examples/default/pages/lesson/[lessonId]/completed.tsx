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
    <div className="page">
      <main className="flex flex-col items-center relative relative w-full max-w-3xl mx-auto mt-16">
        <div className="w-full flex flex-col items-center w-full p-16 rounded-xl mb-64">
          <h1 className="text-8xl font-semibold	text-center mb-8">🎉</h1>
          <h1 className="completed-title">{title}</h1>
          <p className="completed-description">{description}</p>
          <div className="flex flex-col items-center mt-16">
            <div
              className="mb-4 markdown"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            {nextLessonId ? (
              <Link href={`/lesson/${parseInt(lessonId) + 1}`}>
                <a className="button button-default">
                  Start Lesson {nextLessonId}
                </a>
              </Link>
            ) : null}
          </div>
          <div className="flex mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link href="#">
              <a className="button button-blue">Share on Twitter</a>
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

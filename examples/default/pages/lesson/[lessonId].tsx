import * as React from "react";

import Link from "next/link";

import { getChapterProps, getLessons } from "../../src/lib/file";
import type { Context } from "../../src/utils/chapterPageMethods";
import { getStartFileProps } from "../../src/lib/markdown";

type CompletedProps = {
  firstChapterId: string | undefined;
  lessonId: string;
  title: string;
  description: string;
  body: any;
};

export default function Start({
  firstChapterId,
  lessonId,
  title,
  description,
  body,
}: CompletedProps) {
  return (
    <div className="page">
      <main className="flex flex-col items-center relative relative w-full max-w-3xl mx-auto mt-16">
        <div className="w-full flex flex-col items-center w-full p-16 rounded-xl mb-64">
          <h1 className="text-8xl font-semibold	text-center mb-8">⌨️</h1>
          <h1 className="start-title">{title}</h1>
          <p className="start-description">{description}</p>
          <div className="flex flex-col items-center mt-16">
            <div
              className="mb-4 markdown"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            <Link href={`/lesson/${lessonId}/chapter/${firstChapterId}`}>
              <a
                className={`p-2 box-border flex items-center justify-center rounded-md bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10 cursor-pointer`}
              >
                Start Chapter {firstChapterId}
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

  const { firstChapter } = getChapterProps(lessonId);
  const { title, description, body } = getStartFileProps(lessonId);

  return {
    props: {
      firstChapterId: firstChapter?.id,
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
    paths.push(`/lesson/${lesson.id}`);
  });

  return {
    paths: paths,
    fallback: false,
  };
};

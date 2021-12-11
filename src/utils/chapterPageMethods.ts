import { NextPageContext } from "next";

export interface Context extends NextPageContext {
  params: {
    lessonId: string;
    chapterId: string;
  };
}

import {
  getAnswerFile,
  getChapters,
  getCodeFiles,
  getLessons,
} from "../lib/file";
import { renderHtml } from "../lib/markdown";

export const _getStaticProps = (context: Context) => {
  const {
    params: { lessonId, chapterId },
  } = context;

  const chapters = getChapters(parseInt(lessonId));
  const chapterIndex = chapters.findIndex(
    (l: { id: number }) => l.id === parseInt(chapterId)
  );

  const prevChapter = chapters[chapterIndex - 1] || null;
  const nextChapter = chapters[chapterIndex + 1] || null;

  const codeFiles = getCodeFiles(lessonId, chapterId);
  const answerFile = getAnswerFile(lessonId, chapterId);
  const content = renderHtml(lessonId, chapterId);

  const currentLessonId = lessonId;
  const currentChapterId = chapterId;

  return {
    props: {
      answerFile,
      content,
      codeFiles,
      currentLessonId,
      currentChapterId,
      prevChapter,
      nextChapter,
      currentChapterIndex: chapterIndex,
      chaptersLength: chapters.length,
    },
  };
};

export const _getStaticPaths = () => {
  const lessons = getLessons();
  let paths: string[] = [];

  lessons.map((lesson: { id: number }) => {
    const chapters = getChapters(lesson.id);
    chapters.map((chapter: { id: number }) => {
      paths.push(`/lesson/${lesson.id}/chapter/${chapter.id}`);
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

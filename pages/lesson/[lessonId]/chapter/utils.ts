import {
  getAnswerFile,
  getChapters,
  getCodeFiles,
  getLessons,
} from "../../../../src/components/lib/file";
import { renderHtml } from "../../../../src/components/lib/markdown";

import type { Context } from "./propTypes";

export const _getStaticProps = (context: Context) => {
  const {
    params: { lessonId, chapterId },
  } = context;

  const codeFiles = getCodeFiles(lessonId, chapterId);
  const answerFile = getAnswerFile(lessonId, chapterId);
  const content = renderHtml(lessonId, chapterId);

  return {
    props: {
      answerFile,
      content,
      codeFiles,
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

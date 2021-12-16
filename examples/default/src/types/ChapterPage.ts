import { CodeFile } from "../components/Editor/Editor.types";

type Chapter = {
  id: number;
};

export type ChapterProps = {
  title: string;
  content: string;
  codeFiles: CodeFile[];
  answerFile: CodeFile | undefined;
  fileNameToEdit: string;
  currentLessonId: string;
  currentChapterId: string;
  prevChapter: Chapter;
  nextChapter: Chapter;
  currentChapterIndex: number;
  chaptersLength: number;
};

type Chapter = {
  id: number;
};

export type FooterProps = {
  title: string;
  currentLessonId: string;
  currentChapterId: string;
  prevChapter: Chapter;
  nextChapter: Chapter;
  currentChapterIndex: number;
  chaptersLength: number;
  checkAnswer: () => void;
  showAnswer?: boolean;
  setShowAnswer: (arg: boolean) => void;
  toggleShowDocument: () => void;
  showDocument: boolean;
  isFailed: boolean;
};

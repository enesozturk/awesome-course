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
};

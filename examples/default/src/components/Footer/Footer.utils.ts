export const getFooterValues = ({
  currentLessonId,
  currentChapterId,
  prevChapter,
  isLastChapter,
  currentChapterIndex,
  chaptersLength,
  nextChapter,
}: any) => {
  const previouseChapterHref = `/lesson/${currentLessonId}/chapter/${
    prevChapter?.id || currentChapterId
  }`;
  const nextChapterHref = `/lesson/${currentLessonId}/${
    isLastChapter
      ? "completed"
      : `chapter/${nextChapter?.id || currentChapterId}`
  }`;
  const chapterIndicatorText = `${currentChapterIndex + 1} / ${chaptersLength}`;

  return {
    previouseChapterHref,
    nextChapterHref,
    chapterIndicatorText,
  };
};

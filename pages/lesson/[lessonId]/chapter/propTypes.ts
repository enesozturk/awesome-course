import { NextPageContext } from "next";

export interface Context extends NextPageContext {
  params: {
    lessonId: string;
    chapterId: string;
  };
}

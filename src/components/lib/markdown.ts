import fs from "fs";
import { remark } from "remark";
import remarkHtml from "remark-html";

import { ROOT_PATH } from "./constants";

export const renderHtml = (lessonId: string, chapterId: string) => {
  return remark()
    .use(remarkHtml)
    .processSync(
      fs.readFileSync(
        `${ROOT_PATH}/lesson-${lessonId}/chapter-${chapterId}/readme.md`
      )
    ).value;
};

import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

import { ROOT_PATH } from "./constants";

type ContentProps = {
  title: string;
  fileNameToEdit: string;
  body: any;
};

export const renderHtml = (
  lessonId: string,
  chapterId: string
): ContentProps => {
  const fileContent = fs.readFileSync(
    `${ROOT_PATH}/lesson-${lessonId}/chapter-${chapterId}/readme.md`
  );

  const { data, content } = matter(fileContent);

  return {
    title: data?.title || "",
    fileNameToEdit: data.fileNameToEdit || null,
    body: remark().use(remarkHtml).processSync(content).value,
  };
};

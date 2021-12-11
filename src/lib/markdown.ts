import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

import { ROOT_PATH } from "./constants";

export const renderHtml = (
  lessonId: string,
  chapterId: string
): {
  title: string;
  body: any;
} => {
  const fileContent = fs.readFileSync(
    `${ROOT_PATH}/lesson-${lessonId}/chapter-${chapterId}/readme.md`
  );

  const { data, content } = matter(fileContent);
  console.log(data);

  return {
    title: data?.title || "",
    body: remark().use(remarkHtml).processSync(content).value,
  };
};

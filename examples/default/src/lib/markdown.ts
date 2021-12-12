import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

import { ROOT_PATH } from "./constants";

const remarkRender = remark()
  .use(remarkRehype)
  .use(rehypeStringify)
  .use(rehypeHighlight)
  .processSync

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
    body: remarkRender(content).toString(),
  };
};

type StartPageProps = {
  title: string;
  description: string;
  body: any;
};

export const getStartFileProps = (lessonId: string): StartPageProps => {
  const fileContent = fs.readFileSync(
    `${ROOT_PATH}/lesson-${lessonId}/start.md`
  );

  const { data, content } = matter(fileContent);

  return {
    title: data?.title || "",
    description: data.description || "",
    body: remarkRender(content).toString(),
  };
};

export const getCompletedFileProps = (lessonId: string): StartPageProps => {
  const fileContent = fs.readFileSync(
    `${ROOT_PATH}/lesson-${lessonId}/completed.md`
  );

  const { data, content } = matter(fileContent);

  return {
    title: data?.title || "",
    description: data.description || "",
    body: remarkRender(content).toString(),
  };
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { ROOT_PATH } from "./constants";
import { CodeFile } from "../components/Editor/Editor.types";

export const queryFiles = ({
  _path,
  regex,
}: {
  _path: string;
  regex: string;
}) => {
  return fs.readdirSync(`${ROOT_PATH}/${_path}`).filter((file) => {
    return path.basename(file).match(regex);
  });
};

export const getLessons = () => {
  return queryFiles({ _path: ".", regex: "lesson" }).map((file) => {
    return {
      id: parseInt(path.basename(file).split("-")[1]),
    };
  });
};

export const getChapters = (lessonId: number) => {
  return queryFiles({ _path: `lesson-${lessonId}/`, regex: "chapter" }).map(
    (file) => {
      return {
        id: parseInt(path.basename(file).split("-")[1]),
      };
    }
  );
};

export const getCodeFiles = (lessonId: string, chapterId: string) => {
  const _path = `lesson-${lessonId}/chapter-${chapterId}/`;

  return queryFiles({
    _path,
    regex: "^((?!answer|md).)*$",
  }).map((file) => {
    const postContent = fs.readFileSync(`${ROOT_PATH}/${_path}${file}`, "utf8");
    const { content: body } = matter(postContent);

    return {
      fileName: path.basename(file),
      body,
    };
  });
};

export const getAnswerFile = (
  lessonId: string,
  chapterId: string
): CodeFile | undefined => {
  const _path = `lesson-${lessonId}/chapter-${chapterId}/`;

  const files = queryFiles({
    _path,
    regex: "answer",
  }).map((file) => {
    const postContent = fs.readFileSync(`${ROOT_PATH}/${_path}${file}`, "utf8");
    const { content: body } = matter(postContent);

    return {
      fileName: path.basename(file),
      body,
    };
  });

  return files?.[0];
};

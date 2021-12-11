import { CodeFile } from "../components/Editor/Editor.types";
import type { FooterProps } from "./Footer";

export type ChapterProps = {
  answerFile: CodeFile;
  content: string;
  codeFiles: CodeFile[];
} & FooterProps;

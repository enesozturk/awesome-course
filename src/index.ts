#!/usr/bin/env node

import path from "path";
import clear from "clear";
import { cleanupSync } from "temp";

import { copySync } from "fs-extra";

import { execSync } from "child_process";

import * as logs from "@utils/logs";
import { program } from "@utils/program";

(async (): Promise<void> => {
  clear();

  const userDir = process.cwd();
  const [projectDir] = program.args;
  const projectName = projectDir;

  if (projectName === undefined) {
    logs.showUsage({ programName: program.name });
    process.exit(1);
  }

  const projectPath = path.resolve(userDir, projectName);

  logs.startCreating({ projectPath });

  copySync(`${__dirname}/../examples/default`, projectPath, {
    overwrite: true,
  });

  logs.installingPackages();

  execSync(`cd ${projectPath} && npm install`);

  logs.finish({
    projectName,
    projectPath,
  });

  cleanupSync();
})();

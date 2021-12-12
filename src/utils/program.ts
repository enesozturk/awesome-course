import chalk from "chalk";
import commander from "commander";

import packageJSON from "../../package.json";

const program = new commander.Command();
program
  .version(packageJSON.version)
  .name(packageJSON.name)
  .description(packageJSON.description)
  .arguments("<project-directory>")
  .usage(chalk.green("<project-directory>"))
  .parse(process.argv);

export { program };

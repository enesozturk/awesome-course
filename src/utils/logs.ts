import chalk from "chalk";

export const installingPackages = () => {
  console.log(
    chalk.yellow("Installing packages. This might take a couple of minutes.\n")
  );
};

export const startCreating = ({ projectPath }) => {
  console.log(`Creating a new React app in ${chalk.green(projectPath)}\n`);
};

export const showUsage = ({ programName }) => {
  console.error("Please specify the project directory:");
  console.log(
    `  ${chalk.cyan(programName)} ${chalk.green("<project-directory>")}`
  );
  console.log();
};

export const finish = ({ projectName, projectPath }) => {
  console.log(`Success! Created ${projectName} at ${projectPath}`);
  console.log(`Inside that directory, you can run several commands:\n\n`);

  console.log(chalk.blue.bold(`   yarn dev`));
  console.log(`       Starts the development server.\n`);

  console.log(chalk.blue.bold(`   yarn build`));
  console.log(`       Bundles the app into static files for production.\n`);

  console.log(chalk.blue.bold(`   yarn start`));
  console.log(`       Stars the app with the production build.\n\n`);

  console.log("We suggest that you begin by typing:\n");
  console.log(chalk.blue.bold(`   cd ${projectName}`));
  console.log(chalk.blue.bold(`   yarn dev\n\n`));

  console.log("Happy hacking!");
};

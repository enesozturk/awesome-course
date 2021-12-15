import { execSync } from "child_process";

export const useYarn = () => {
    try {
        execSync("yarn --version", { stdio: "ignore" });
        return true;
    } catch (e) {
        return false;
    }
}

export const installPackages = (path: string) => {
    const installCommand = useYarn() ? 'yarn install' : 'npm install';
    execSync(`cd ${path} && ${installCommand}`);
}
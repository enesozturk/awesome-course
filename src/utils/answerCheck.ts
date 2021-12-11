import { error, success } from "./toast";

export const checkAnswer = (usersValue: string, originalValue: string) => {
  const orginalValueClean = usersValue.replace(/\s/g, "");
  const answerValueClean = originalValue.replace(/\s/g, "");

  if (orginalValueClean === answerValueClean) {
    success("Yaay! It's correct!");
    return true;
  } else {
    error("Oops! You missed something!");
    return false;
  }
};

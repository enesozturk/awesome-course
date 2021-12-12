import toast from "react-hot-toast";

export const error = (title: string) =>
  toast.error(title, {
    position: "bottom-right",
  });

export const success = (title: string) =>
  toast.success(title, {
    position: "bottom-right",
  });

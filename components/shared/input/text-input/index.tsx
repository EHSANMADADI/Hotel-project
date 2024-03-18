"use client";
import TextInputImpl from "./types";
import cls from "classnames";

const TextInput = ({ placeholder, textarea = false }: TextInputImpl) => {
  const className =
    "outline-none w-full border-[1px] border-primary p-4 text-zinc-600 caret-primary focus:border-cyan-500";
  return (
    <>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className={cls(className, "resize-none")}
          rows={7}
        />
      ) : (
        <input placeholder={placeholder} className={className} />
      )}
    </>
  );
};
export default TextInput;

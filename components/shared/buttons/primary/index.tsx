"use client";
import PrimaryButtonImpl from "./types";
import cls from "classnames";

const PrimaryButton = ({
  children,
  className = "",
  type = "button",
  onClick = () => {},
}: PrimaryButtonImpl) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={cls(
          `w-full relative flex justify-center items-center bg-primary text-white 
        cursor-pointer hover:bg-cyan-500 transition-all`,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
export default PrimaryButton;

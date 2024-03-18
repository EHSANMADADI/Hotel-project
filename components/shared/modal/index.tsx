"use client";
import cls from "classnames";
import useModal from "./use";
import { useClickOutside } from "@mantine/hooks";
import ModalImpl from "./types";
const Modal = ({ children, open, setOpen, className = "" }: ModalImpl) => {
  const { closeModal, showForm } = useModal({ open, setOpen });
  const ref = useClickOutside(closeModal);
  return (
    <>
      <div
        className={cls(
          `fixed inset-0 z-[9999] bg-black/50 backdrop-blur-md transition-all duration-300 flex justify-center items-center`,
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div
          className={cls(
            `absolute transition-all duration-300`,
            showForm
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0",
            className
          )}
          ref={ref}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default Modal;

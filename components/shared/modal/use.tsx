import { useEffect, useState } from "react";
import { UseModalImpl } from "./types";

const useModal = ({ open, setOpen }: UseModalImpl) => {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (open) {
      timeOut = setTimeout(() => {
        setShowForm(true);
      }, 100);
    }
    () => clearTimeout(timeOut);
  }, [open]);

  let modalTimeout: NodeJS.Timeout;
  const closeModal = () => {
    clearTimeout(modalTimeout);
    setShowForm(false);
    modalTimeout = setTimeout(() => {
      setOpen(false);
    }, 100);
  };
  return { closeModal, showForm };
};
export default useModal;

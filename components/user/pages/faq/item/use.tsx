import { useState } from "react";
import { UseFAQItemImpl } from "./types";

const useFAQItem = ({ open: openFAQ }: UseFAQItemImpl) => {
  const [open, setOpen] = useState(openFAQ);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return { open, toggleOpen };
};
export default useFAQItem;

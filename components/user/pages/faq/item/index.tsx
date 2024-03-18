"use client";
import { Add, AddSquare, ArrowDown2, Minus } from "iconsax-react";
import FAQItemImpl from "./types";
import useFAQItem from "./use";

const FAQItem = ({ desc, title, open = false }: FAQItemImpl) => {
  const { open: show, toggleOpen } = useFAQItem({ open });
  return (
    <>
      <div className="w-full flex justify-start flex-col bg-white mb-2 last:mb-0">
        <div
          className="cursor-pointer w-full flex justify-between"
          onClick={toggleOpen}
        >
          <h2 className="text-blue-950 px-4 py-3">{title}</h2>
          <div className="min-w-[50px] min-h-full flex justify-center items-center bg-primary p-2">
            {show ? (
              <Minus className="text-white" size="26" />
            ) : (
              <Add className="text-white" size="26" />
            )}
          </div>
        </div>
        {show && (
          <div className="p-4 border-t-[1px] border-black/10">
            <p className="text-[15px] text-zinc-600">{desc}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default FAQItem;

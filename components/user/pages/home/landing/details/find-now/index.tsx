"use client";

import { ArrowSquareDown, ArrowSquareUp, SearchNormal1 } from "iconsax-react";
import useFindNow from "./use";
import DatePickeer from "@/components/shared/date-picker";
import cls from "classnames";
import PrimaryButton from "@/components/shared/buttons/primary";
const FindNow = () => {
  const {
    people,
    decreasePeople,
    increasePeople,
    checkIn,
    setCheckInDatePicker,
  } = useFindNow();
  return (
    <>
      <div
        className="w-full p-5 bg-white/20 backdrop-blur-md flex justify-center items-start
      relative top-20 md:flex-wrap"
      >
        <div
          className="w-1/4 md:w-1/2 md:border-b-[1px] sm:w-full sm:p-2 sm:text-sm bg-white 
        p-4 border-l-[1px] border-zinc-200 relative"
        >
          <span className="relative z-10 text-zinc-400">ورود</span>
          <div className="absolute inset-0 flex justify-center items-center">
            <DatePickeer onChange={setCheckInDatePicker} value={checkIn} />
          </div>
        </div>
        <div
          className="w-1/4 md:w-1/2 md:border-b-[1px] sm:w-full sm:p-2 sm:text-sm bg-white 
        p-4 border-l-[1px] border-zinc-200 relative"
        >
          <span className="relative z-10 text-zinc-400">خروج</span>
          <div className="absolute inset-0 flex justify-center items-center">
            <DatePickeer onChange={setCheckInDatePicker} value={checkIn} />
          </div>
        </div>

        <div
          className="w-1/4 md:w-1/2 sm:w-full sm:p-2 sm:text-sm bg-white p-4 border-l-[1px] 
        border-zinc-200 flex justify-between items-center text-zinc-400 relative"
        >
          <div className="relative z-10">
            <span>تعداد</span>
          </div>
          <span className="text-primary mr-4 absolute inset-0 flex justify-center items-center">
            {people} نفر
          </span>
          <div className="flex justify-center items-center text-zinc-600 cursor-pointer relative z-10">
            <ArrowSquareUp
              size="18"
              className={cls(
                `transition-all hover:text-zinc-900 active:scale-95`,
                { "cursor-not-allowed opacity-20": people === 10 }
              )}
              onClick={increasePeople}
            />
            <ArrowSquareDown
              size="18"
              className={cls(
                `transition-all hover:text-zinc-900 active:scale-95`,
                { "cursor-not-allowed opacity-20": people === 1 }
              )}
              onClick={decreasePeople}
            />
          </div>
        </div>
        <div className="w-1/4 md:w-1/2  sm:w-full">
          <PrimaryButton className="p-4">
            <span className="ml-2">جست و جو</span>
            <SearchNormal1 size="18" />
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};
export default FindNow;

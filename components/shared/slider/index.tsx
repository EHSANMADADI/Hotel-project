// @ts-nocheck
"use client";

import "./index.css";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
import SliderImpl from "./types";

const Slider = ({ children, arrows = false, options }: SliderImpl) => {
  const ref = useRef(null);

  const next = () => {
    ref.current.splide.go(">");
  };
  const prev = () => {
    ref.current.splide.go("<");
  };
  return (
    <>
      <Splide ref={ref} hasTrack={false} options={options} className="w-full">
        {arrows && (
          <>
            <div
              className="absolute z-30 right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={prev}
            >
              <div
                className="w-[40px] aspect-square border-[1px] border-blue-400 rounded-full 
              flex justify-center items-center transition-all duration-200 hover:border-primary
              hover:scale-95
               group"
              >
                <ArrowRight3
                  className="text-blue-500 transition-all duration-200
                 group-hover:text-primary"
                />
              </div>
            </div>
            <div
              className="absolute z-30 left-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={next}
            >
              <div
                className="w-[40px] aspect-square border-[1px] border-blue-400 rounded-full 
              flex justify-center items-center transition-all duration-200 hover:border-primary
              hover:scale-95
               group"
              >
                <ArrowLeft3
                  className="text-blue-500 transition-all duration-200
                 group-hover:text-primary"
                />
              </div>
            </div>
          </>
        )}

        <SplideTrack>{children}</SplideTrack>
      </Splide>
    </>
  );
};
export default Slider;

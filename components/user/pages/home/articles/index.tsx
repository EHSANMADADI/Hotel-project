"use client";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import Slider from "@/components/shared/slider";
import BlogCard from "@/components/shared/cards/primary/blog";

const Articles = () => {
  return (
    <>
      <div className="w-full  bg-blue-950">
        <div className="container flex justify-start items-start flex-col py-[100px] md:py-12">
          <span className="text-primary font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-5xl md:text-4xl mb-6 leading-[1.4] text-white">
            تجربه های <span className="text-primary">اقامت</span>
          </h2>
          <Slider
            options={{
              gap: "2rem",
              autoWidth: true,
              height: "500px",
              direction: "rtl",
              pagination: false,
              type: "loop",
              arrows: false,
            }}
            arrows={true}
          >
            {Array(8)
              .fill("")
              .map((_, i) => (
                <SplideSlide key={i}>
                  <div className="w-[300px] h-full">
                    <BlogCard
                      date={{ day: "4", month: "آبان" }}
                      desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"
                      href="/"
                      src="/images/15.jpg"
                      title="لورم ایپسوم متن ساختگی "
                    />
                  </div>
                </SplideSlide>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Articles;

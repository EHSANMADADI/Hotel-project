"use client";

import { CallCalling } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import Slider from "@/components/shared/slider";
import { useViewportSize } from "@mantine/hooks";

const Testimonials = (props: { id?: number }) => {
  const { width } = useViewportSize();

  return (
    <>
      <div
        className="w-full relative min-h-[450px] py-10"
        style={{ clipPath: " inset(0)" }}
      >
        <div className="relative z-20 h-full flex justify-between lg:items-start items-center lg:flex-col container">
          <div className="w-[400px] flex justify-start items-start flex-col text-white sm:w-full">
            <h4 className="text-xl font-bold">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h4>
            <Link
              href="tel:09125632541"
              className="flex justify-start items-center mt-6"
            >
              <CallCalling size="38" />
              <div className="flex justify-start items-start flex-col mr-3">
                <span>لورم ایپسوم متن ساختگی</span>
                <h3 className="mt-1 text-2xl">09122563254</h3>
              </div>
            </Link>
            <span className="font-extralight text-xs mt-2">
              لورم ایپسوم متن ساختگی
            </span>
          </div>
          <div
            className="w-[450px] bg-white justify-center items-start flex-col p-[40px] sm:p-[20px] sm:pb-[60px]
            pb-[80px] hidden lg:flex lg:mt-9 lg:w-full
          "
          >
            <span className="text-primary font-light text-sm mb-2 mt-8">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl mb-3 leading-[1.4] text-blue-950">
              دیدگاه های مشتریان
            </h2>
            <span className="w-full inline-block h-[1px] border-b-[1px] border-zinc-200 mb-5"></span>
            <div className="w-full">
              <Slider
                options={{
                  gap: "1rem",
                  perPage: 1,
                  direction: "rtl",
                  pagination: true,
                  arrows: false,
                }}
                arrows={false}
              >
                {Array(8)
                  .fill("")
                  .map((_, i) => (
                    <SplideSlide key={i} className="cursor-grab">
                      <div className="w-full felx justify-center items-center flex-col">
                        <div className="text-zinc-500 min-h-[150px]">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد
                        </div>
                        <div className="flex justify-start items-center w-full">
                          <div className="min-w-[60px] max-w-[60px] aspect-square rounded-full overflow-hidden">
                            <Image
                              src={"/images/1.jpg"}
                              alt="landing"
                              className="w-full h-full object-cover object-center"
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="flex justify-start items-start flex-col mr-4">
                            <span className="text-xs mb-1">⭐⭐⭐⭐⭐</span>
                            <span>آرسام راد</span>
                            <span className="text-xs text-zinc-500">
                              مدیر بلوم
                            </span>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-slate-950  opacity-60 z-10"></div>
        {props.id ? (<Image
          src={"/images/res1.jpg"}
          alt="landing"
          className="fixed top-0 left-0 w-full h-full object-cover object-center"
          width={1500}
          height={800}
        />) : (<Image
          src={"/images/15.jpg"}
          alt="landing"
          className="fixed top-0 left-0 w-full h-full object-cover object-center"
          width={1500}
          height={800}
        />)}

      </div>
      <div className="w-full  py-4 rounded-2xl">
        <div className="container flex justify-start items-center relative rounded-2xl">
          <div
            className="w-[450px] dark:bg-slate-900 bg-white flex justify-center items-start flex-col p-[20px] rounded-2xl
            pb-[80px] absolute left-5 bottom-6 lg:hidden
          "
          >
            <span className="text-primary font-light text-sm mb-2 mt-8">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl mb-3 leading-[1.4] text-blue-950 dark:text-blue-300">
              دیدگاه های مشتریان
            </h2>
            <span className="w-full inline-block h-[1px] border-b-[1px] border-zinc-200 mb-5"></span>
            <div className="w-full ">
              <Slider
                options={{
                  gap: "1rem",
                  perPage: 1,
                  direction: "rtl",
                  pagination: true,
                  arrows: false,
                }}
                arrows={false}
              >
                {Array(8)
                  .fill("")
                  .map((_, i) => (
                    <SplideSlide key={i} className="cursor-grab">
                      <div className="w-full felx justify-center items-center flex-col ">
                        <div className="text-zinc-500 min-h-[150px]">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد
                        </div>
                        <div className="flex justify-start items-center w-full">
                          <div className="min-w-[60px] max-w-[60px] aspect-square rounded-full overflow-hidden">
                            <Image
                              src={"/images/1.jpg"}
                              alt="landing"
                              className="w-full h-full object-cover object-center"
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="flex justify-start items-start flex-col mr-4">
                            <span className="text-xs mb-1">⭐⭐⭐⭐⭐</span>
                            <span>آرسام راد</span>
                            <span className="text-xs text-zinc-500">
                              مدیر بلوم
                            </span>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
              </Slider>
            </div>
          </div>
          {/* <div className="w-[calc(100%-450px)] lg:w-full"> */}
          {/* <Slider
              options={{
                gap: "1rem",
                perPage: width > 1023 ? 4 : 3,
                direction: "rtl",
                pagination: false,
                arrows: false,
              }}
              arrows={false}
            > */}
          {/* {Array(8)
                .fill("")
                .map((_, i) => (
                  <SplideSlide key={i}>
                    <div className="w-full flex justify-center items-center">
                      <div className="w-[140px] sm:w-[100px]">
                        <Image
                          src={"/images/2.png"}
                          alt="landing"
                          className="w-full h-full object-cover object-center
                          transition-all duration-200 hover:grayscale"
                          width={1500}
                          height={800}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                ))} */}
          {/* </Slider> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Testimonials;

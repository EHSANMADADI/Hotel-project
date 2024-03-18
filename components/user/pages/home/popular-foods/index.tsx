"use client";
import PrimaryCard from "@/components/shared/cards/primary";
import Slider from "@/components/shared/slider";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import { ArrowLeft } from "iconsax-react";
const PopularFoods = () => {
  return (
    <>
      <div className="w-full ">
        <div className="container flex justify-start items-start flex-col py-10 pb-20 md:pb-16">
          <span className="text-primary font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-5xl md:text-4xl mb-6 leading-[1.4] text-blue-950">
            غذاهای <span className="text-primary">ویژه</span>
          </h2>
          <Slider
            options={{
              gap: "2rem",
              autoWidth: true,
              height: "500px",
              direction: "rtl",
              pagination: true,
              arrows: false,
            }}
            arrows={true}
          >
            {Array(8)
              .fill("")
              .map((_, i) => (
                <SplideSlide key={i}>
                  <div className="w-[300px] h-full">
                    <PrimaryCard
                      image="/images/pizza.jpg"
                      active={true}
                      label="ایتالیایی"
                      layer={true}
                      title="پیتزا آلفردو"
                    >
                      <div className="w-full flex justify-between items-center text-[14px] ">
                        <span className="text-zinc-300">
                          غذای مورد نظر سرآشپز
                        </span>
                        <span className="text-cyan-400 hover:text-cyan-200 flex justify-center items-center">
                          بیشتر
                          <ArrowLeft size="14" className="mr-2" />
                        </span>
                      </div>
                    </PrimaryCard>
                  </div>
                </SplideSlide>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default PopularFoods;

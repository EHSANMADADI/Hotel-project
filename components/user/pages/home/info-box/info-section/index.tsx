"use client";
import PrimaryButton from "@/components/shared/buttons/primary";
import PrimaryCard from "@/components/shared/cards/primary";
import { ArrowLeft } from "iconsax-react";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import Slider from "@/components/shared/slider";
import InfoSectionImpl from "./types";
import cls from "classnames";
import { useViewportSize } from "@mantine/hooks";

const InfoSection = ({ reverse }: InfoSectionImpl) => {
  const { width } = useViewportSize();

  return (
    <>
      <div
        className={cls(
          `w-full flex justify-center items-start lg:justify-start`,
          reverse ? "mt-20 lg:mt-8" : "mt-8 lg:mt-0"
        )}
      >
        <div
          className={cls(`flex justify-start items-start lg:!flex-col`, {
            "flex-row-reverse": reverse,
          })}
        >
          <div
            className={cls(`w-full mt-8 lg:max-w-xl`, {
              "lg:mt-0": !reverse,
              "lg:mt-8": reverse,
            })}
          >
            <h4 className="text-blue-950 text-3xl font-extrabold">
              لورم ایپسوم متن{" "}
            </h4>
            <p className="text-zinc-500 mt-4 mb-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="w-[180px]">
              <PrimaryButton className="py-3">
                مشاهده تمامی موارد
                <ArrowLeft size="18" className="mr-2" />
              </PrimaryButton>
            </div>
          </div>
          {width !== 0 && (
            <div
              className={cls(
                `lg:mt-8 lg:w-[400px] lg:mx-0`,
                reverse ? "ml-20" : "mr-20"
              )}
              style={{ width: width > 1023 ? "500px" : width - 80 + "px" }}
            >
              <Slider
                options={{
                  gap: "1rem",
                  autoWidth: true,
                  height: "400px",
                  direction: "rtl",
                  pagination: true,
                  arrows: false,
                }}
                arrows={false}
              >
                {Array(8)
                  .fill("")
                  .map((_, i) => (
                    <SplideSlide key={i}>
                      <div className="w-[200px] h-full">
                        <PrimaryCard
                          image="/images/pizza.jpg"
                          label="ایتالیایی"
                          title="پیتزا آلفردو"
                        >
                          <div className="w-full flex justify-between items-center text-[14px] ">
                            <span className="text-zinc-300">ویژه</span>
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
          )}
        </div>
      </div>
    </>
  );
};
export default InfoSection;

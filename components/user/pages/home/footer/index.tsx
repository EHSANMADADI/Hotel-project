import PrimaryButton from "@/components/shared/buttons/primary";
import { Instagram, Location } from "iconsax-react";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-blue-950 dark:bg-slate-900 py-10 pb-0">
        <div className="container flex justify-center items-start flex-col">
          <div className="w-full flex justify-center items-center border-[1px] p-5 md:p-0 border-white/10 md:flex-col">
            <Link
              href={"/"}
              className="flex justify-center items-center w-1/3 border-l-[1px] border-white/10
              px-4
               md:p-4 md:w-full md:border-l-0 md:border-b-[1px] md:justify-start"
            >
              <div className="flex justify-start items-center">
                <div className="bg-primary min-w-[65px] aspect-square flex justify-center items-center">
                  <Location size="36" className="text-white" />
                </div>
                <div className="flex justify-start items-start flex-col mr-6 text-white">
                  <span className="font-bold opacity-90">آدرس</span>
                  <span className="opacity-60">قم خیابان دور شهر</span>
                </div>
              </div>
            </Link>
            <Link
              href={"/"}
              className="flex justify-center items-center w-1/3 border-l-[1px] border-white/10
              px-4
               md:p-4 md:w-full md:border-l-0 md:border-b-[1px] md:justify-start"
            >
              <div className="flex justify-start items-center">
                <div className="bg-primary min-w-[65px] aspect-square flex justify-center items-center">
                  <Location size="36" className="text-white" />
                </div>
                <div className="flex justify-start items-start flex-col mr-6 text-white">
                  <span className="font-bold opacity-90">آدرس</span>
                  <span className="opacity-60">قم خیابان دور شهر</span>
                </div>
              </div>
            </Link>
            <Link
              href={"/"}
              className="flex justify-center items-center w-1/3 
              px-4
               md:p-4 md:w-full md:justify-start"
            >
              <div className="flex justify-start items-center">
                <div className="bg-primary min-w-[65px] aspect-square flex justify-center items-center">
                  <Location size="36" className="text-white" />
                </div>
                <div className="flex justify-start items-start flex-col mr-6 text-white">
                  <span className="font-bold opacity-90">آدرس</span>
                  <span className="opacity-60">قم خیابان دور شهر</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full flex justify-center items-start mt-10 md:flex-col">
            <div className="w-1/3 flex justify-start items-start flex-col md:w-full md:max-w-md">
              <Link href={"/"} className="w-[150px]">
                <Image
                  src={"/images/logo-light.png"}
                  alt="landing"
                  className="w-full h-full object-cover object-center"
                  width={150}
                  height={50}
                />
              </Link>
              <p className="text-zinc-300 my-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <div className="flex justify-start items-center flex-wrap">
                <Link
                  href={"/"}
                  target="_blank"
                  className="min-w-[40px] aspect-square bg-primary flex justify-center 
                  items-center rounded-full ml-2.5 mb-2.5 last:ml-0 hover:bg-cyan-700 transition-all"
                >
                  <Instagram className="text-white" size="20" />
                </Link>
                <Link
                  href={"/"}
                  target="_blank"
                  className="min-w-[40px] aspect-square bg-primary flex justify-center 
                  items-center rounded-full ml-2.5 mb-2.5 last:ml-0 hover:bg-cyan-700 transition-all"
                >
                  <FaWhatsapp className="text-white" size="20" />
                </Link>
                <Link
                  href={"/"}
                  target="_blank"
                  className="min-w-[40px] aspect-square bg-primary flex justify-center 
                  items-center rounded-full ml-2.5 mb-2.5 last:ml-0 hover:bg-cyan-700 transition-all"
                >
                  <MdEmail  className="text-white" size="20" />
                </Link>
                <Link
                  href={"/"}
                  target="_blank"
                  className="min-w-[40px] aspect-square bg-primary flex justify-center 
                  items-center rounded-full ml-2.5 mb-2.5 last:ml-0 hover:bg-cyan-700 transition-all"
                >
                  <FaTelegram  className="text-white" size="20" />
                </Link>
              </div>
            </div>
            <div
              className="w-1/3 px-10 flex justify-center items-start md:w-full md:max-w-md
             md:justify-start md:p-0 md:mt-5 md:mb-8"
            >
              <div className="flex justify-start items-start flex-col">
                <h4 className="text-lg font-bold mb-5 text-white">
                  دسترسی سریع
                </h4>
                <Link
                  className="text-zinc-300 hover:text-primary mb-2 last:mb-0"
                  href={"/"}
                >
                  رزرو اتاق
                </Link>
                <Link
                  className="text-zinc-300 hover:text-primary mb-2 last:mb-0"
                  href={"/resturant/rezervTable"}
                >
                   روزرو میز در رستوران
                </Link>
                <Link
                  className="text-zinc-300 hover:text-primary mb-2 last:mb-0"
                  href={"/"}
                >
                  درباره ما
                </Link>
              </div>
            </div>
            <div className="w-1/3 flex justify-start items-start flex-col md:w-full md:max-w-md">
              <h4 className="text-lg font-bold mb-5 text-white">
                عضویت در خبر نامه
              </h4>
              <p className="text-zinc-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              </p>
              <div className="mt-5 w-full relative">
                <input
                type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full p-4 pl-[120px] text-zinc-500 bg-white outline-none md:py-0 md:h-[40px] md:leading-[40px] md:pl-4"
                />
                <div className="absolute left-1.5 bottom-1.5 top-1.5 w-[100px] md:relative md:inset-auto md:w-full md:h-[40px]">
                  <PrimaryButton className="h-full" type="submit">
                    ارسال
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full mt-10 border-t-[1px] border-white/10 inline-block"></span>
          <span className="my-6 inline-block text-zinc-300">
            تمام حقوق محفوظ است
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;

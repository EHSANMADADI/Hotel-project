import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import PrimaryButton from '@/components/shared/buttons/primary';



const Footer = () => {
  return (
    <footer id='Footer' className="w-full bg-[#31221b] py-10 pb-0">
        <div className="container flex justify-center items-start flex-col">
          <div className="w-full flex justify-center items-center border-[1px] p-5 md:p-0 border-white/10 md:flex-col">
            <Link
              href={"https://www.google.com/maps/place/%D8%A8%D8%B1%D8%AC+%D9%85%DB%8C%D9%84%D8%A7%D8%AF%E2%80%AD/@35.7447636,51.3755012,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8e0710d5918403:0x74f5290b67841378!8m2!3d35.7447636!4d51.3755012!16zL20vMDJuemdu?entry=ttu"}
              className="flex justify-center items-center w-1/3 border-l-[1px] border-white/10
              px-4
               md:p-4 md:w-full md:border-l-0 md:border-b-[1px] md:justify-start"
            >
              <div className="flex justify-start items-center">
                <div className="bg-primary min-w-[65px] aspect-square flex justify-center items-center">
                  <IoLocationSharp size="36" className="text-white" />
                </div>
                <div className="flex justify-start items-start flex-col mr-6 text-white">
                  <span className="font-bold opacity-90">آدرس</span>
                  <address className="opacity-60"> تهران - برج میلاد - طبقه 24</address>
                </div>
              </div>
            </Link>
            <Link
              href="tel:09331621028"
              className="flex justify-center items-center w-1/3 
              px-4
               md:p-4 md:w-full md:justify-start"
            >
              <div className="flex justify-start items-center">
                <div className="bg-primary min-w-[65px] aspect-square flex justify-center items-center">
                  <FaPhoneFlip size="36" className="text-white" />
                </div>
                <div className="flex justify-start items-start flex-col mr-6 text-white">
                  <span className="font-bold opacity-90">تلفن  </span>
                  <Link href='tel:021-88249999' className="opacity-60">021-88249999</Link>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full flex justify-center items-start mt-10 md:flex-col">
            <div className="w-1/3 flex justify-start items-start flex-col md:w-full md:max-w-md">
              <Link href={"/"} className="w-[150px]">
                <Image
                  src={"/images/cafe/Clogo.webp"}
                  alt="landing"
                  className=" object-center"
                  width={120}
                  height={30}
                />
              </Link>
              <p className="text-zinc-300 my-4 text-justify">
              از مهم‌ترین اهداف ما در مجموعه کافه میلاد ارائه بهترین محصول با بهترین قیمت و با بهترین سرویس و جریان انرژی و حال خوب در این مرز و بوم است. مجموعه قهوه میلاد در نظر دارد با هدف فرهنگ‌سازی و ترویج نوشیدن قهوه در جامعه سبک زندگی درست را آموزش دهد و در این راستا برنامه و اقدامات ارزشمندی را در نظر گرفته است.           
                 </p>
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
                  className="text-zinc-300 hover:text-zinc-100 hover:scale-105 duration-200 mb-2 last:mb-0"
                  href={"/coffee-shop/reservation"}
                >
                   رزرو میز                  
                </Link>
                <Link
                  className="text-zinc-300 hover:text-zinc-100 hover:scale-105 duration-200 mb-2 last:mb-0"
                  href={"#Menu"}
                >
                  مشاهده منو
                </Link>
                <Link
                  className="text-zinc-300 hover:text-zinc-100 hover:scale-105 duration-200 mb-2 last:mb-0"
                  href={"#Gallery"}
                >
                  گالری
                </Link>
              </div>
            </div>
            <div className="w-1/3 flex justify-start items-start flex-col md:w-full md:max-w-md">
              <h4 className="text-lg font-bold mb-5 text-white">
                عضویت در خبر نامه
              </h4>
              <p className="text-zinc-300">
                با عضویت در خبرنامه از اطلاعیه های ما با خبر شوید
              </p>
              <div className="mt-5 w-full relative">
                <input
                type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full p-4 pl-[120px] text-zinc-500 bg-zinc-100 outline-none md:py-0 md:h-[40px] md:leading-[40px] md:pl-4"
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
          <p className="my-6 text-zinc-300 self-center text-center block ">
            تمام حقوق محفوظ است &copy;
          </p>
        </div>
      </footer>
  )
}

export default Footer
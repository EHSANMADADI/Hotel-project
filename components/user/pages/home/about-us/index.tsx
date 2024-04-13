import { CallCalling } from "iconsax-react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="container py-20 flex justify-center items-center md:items-start sm:flex-col sm:py-10">
        <div className="w-1/2 flex justify-start items-center pr-8 sm:pr-4 ml-14 sm:w-full sm:ml-0 sm:mb-16 sm:justify-center">
          <div className="w-[400px] h-[500px] relative md:w-[350px] md:h-[400px] sm:h-[350px]">
            <div className="absolute inset-0 z-10">
              <span className="absolute -top-8 -left-8 sm:-left-4 sm:-top-4 h-[200px] w-[200px] bg-[url('/images/dots.png')] z-10"></span>
              <Image
                src={"/images/11.jpg"}
                alt="about"
                className="w-full h-full shadow-inner object-cover rounded object-center relative z-20 hover:scale-95 transition-all duration-500"
                width={1500}
                height={800}
              />
            </div>
            <span className="absolute inset-0 bg-slate-700 rounded shadow-inner translate-x-8 sm:translate-y-4 sm:translate-x-4 translate-y-8"></span>
          </div>
        </div>
        <div className="w-1/2 flex justify-start items-start flex-col text-zinc-500 sm:w-full">
          <span className="text-primary font-light text-sm mb-2">
            طعم خوش آسایش و آرامش
          </span>
          <h2 className="text-blue-950 font-extrabold text-4xl mb-6 leading-[1.4]">
              افتخار هتل  <span className="text-primary">میلاد</span> 
             خدمت رسانی در خور شان شماست
          </h2>
          <p>
           هتل میلاد از سال 1385 خورشیدی خدمت رسانی خود را با بالاترین استاندار ها برای مشتریان محترم خود آغاز کرد و تا به امروز این خدمت رسانی با بالاترین کیفیت ادامه دارد
            <br />
            هتل میلاد  دارای امکانات و بخش های متنوعی از قبیل سالن کنسرت و استخر رستوران و کافی شاپ و ..میباشد که باعث شده این هتل در ایران در گروه بهترین هتل ها قرار بگیرد
          </p>
          <div className="flex justify-start items-start flex-col space-y-2 text-zinc-500 mt-7">
            <div className="flex justify-center items-center">
              <div className="bg-primary w-8 aspect-square rounded-full flex justify-center items-center">
              <FaInstagram className="text-white text-2xl mx-2" />
              </div>
              <span className="mr-3">Instagram</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-primary w-8 aspect-square rounded-full flex justify-center items-center">
              <FaTiktok className="text-white text-2xl mx-2" />
              </div>
              <span className="mr-3">Tiktok </span>
            </div>
          </div>
          <Link
            href="tel:09125632541"
            className="flex justify-start items-center mt-6"
          >
            <CallCalling size="38" className="text-primary" />
            <div className="flex justify-start items-start flex-col mr-3">
              <span>  شماره تماس </span>
              <h3 className="text-primary mt-1 text-2xl">09122563254</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AboutUs;

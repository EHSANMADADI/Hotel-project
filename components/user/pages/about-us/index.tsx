'use client'
import Image from "next/image";
import AboutUsBanner from "../home/about-us";
import PrimaryButton from "@/components/shared/buttons/primary";
import TextInput from "@/components/shared/input/text-input";
import PagesBanner from "@/components/shared/pages-banner";
import Swal from 'sweetalert2';

const AboutUs = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col">
      <PagesBanner alt="contact-us" src="/images/15.jpg">
        <span className="font-light text-sm mb-2">
          لورم ایپسوم متن ساختگی با تولید سادگی
        </span>
        <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
          تماس با <span className="text-primary">ما</span>
        </h2>
      </PagesBanner>
      <AboutUsBanner />
      <div className="container flex justify-start items-start flex-col mt-6">
        <div className="max-w-md flex justify-start items-start flex-col">
          <span className="text-primary font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="text-blue-950 font-extrabold text-4xl mb-6 leading-[1.4]">
            از ما سوال بپرسید !!
          </h2>
        </div>
        <div className="w-full mb-14 flex justify-between items-center flex-wrap">
          <div className="w-[calc(33.33%-10px)] md:w-[calc(50%-10px)] sm:w-full">
            <TextInput placeholder="موضوع" />
          </div>
          <div className="w-[calc(33.33%-10px)] md:w-[calc(50%-10px)] sm:w-full my-2">
            <TextInput placeholder="نام" />
          </div>
          <div className="w-[calc(33.33%-10px)] md:w-full md:mt-5 sm:mt-0">
            <TextInput placeholder="شماره همراه" />
          </div>
          <div className="w-full mt-[20px] sm:mt-2 mb-0">
            <TextInput placeholder="پیام" textarea={true} />
          </div>
          <div className="w-full flex justify-end items-center mt-5 sm:mt-0">
            <div className="w-[200px]">
              <PrimaryButton onClick={() => {
                Swal.fire({
                  title: "با موفقیت انجام شد",
                  icon: "success",
                }) }} className="py-3">ارسال</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
};
export default AboutUs;

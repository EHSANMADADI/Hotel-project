"use client";
import { Box1 } from "iconsax-react";
import Image from "next/image";
import useAuth from "./use";
import PrimaryButton from "@/components/shared/buttons/primary";
import Modal from "@/components/shared/modal";

const Auth = () => {
  const { forgotPass, setForgotPass } = useAuth();

  return (
    <>
      <Modal>
        <div className="w-full max-w-3xl flex justify-center p-3">
          <div className="w-1/2 flex justify-center items-center flex-col text-center min-h-full p-6 bg-white lg:w-[320px]">
            <Box1 className="text-primary" size="32" />
            <h3 className="font-extralight clear-left text-zinc-500 mt-4">
              {forgotPass ? (
                "فراموشی رمز عبور"
              ) : (
                <>
                  ورود <span>/</span> ثبت نام
                </>
              )}
            </h3>

            {forgotPass ? (
              <form className="w-full flex justify-center items-center flex-col mt-3">
                <label className="w-full flex justify-start items-start flex-col">
                  <span className="mb-1 cursor-pointer">ایمیل</span>
                  <input className="w-full p-2 border-2 outline-0 border-zinc-200 text-primary focus:border-zinc-300" />
                </label>
                <div
                  onClick={() => setForgotPass(false)}
                  className="text-primary w-full text-sm text-right mt-3 cursor-pointer hover:underline underline-offset-1"
                >
                  بازگشت به صفحه ورود / ثبت نام
                </div>
                <PrimaryButton className="h-[43px] mt-6" type="submit">
                  تایید
                </PrimaryButton>
              </form>
            ) : (
              <form className="w-full flex justify-center items-center flex-col mt-3">
                <label className="w-full flex justify-start items-start flex-col">
                  <span className="mb-1 cursor-pointer">ایمیل</span>
                  <input className="w-full p-2 border-2 outline-0 border-zinc-200 text-primary focus:border-zinc-300" />
                </label>
                <label className="w-full flex justify-start items-start flex-col mt-3">
                  <span className="mb-1 cursor-pointer">رمز عبور</span>
                  <input className="w-full p-2 border-2 outline-0 border-zinc-200 text-primary focus:border-zinc-300" />
                </label>
                <div
                  onClick={() => setForgotPass(true)}
                  className="text-primary w-full text-sm text-right mt-3 cursor-pointer hover:underline underline-offset-1"
                >
                  رمز عبور خود را فراموش کرده اید ؟
                </div>
                <PrimaryButton className="h-[43px] mt-6" type="submit">
                  تایید
                </PrimaryButton>
              </form>
            )}
          </div>
          <div className="w-1/2 h-[500px] relative lg:hidden">
            <div className="absolute inset-0 bg-blue-950 opacity-40"></div>
            <Image
              src={"/images/1.jpg"}
              alt="landing"
              className="w-full h-full object-cover object-center"
              width={1500}
              height={800}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Auth;

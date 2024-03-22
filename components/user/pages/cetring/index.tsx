import React from 'react'
import Menu from '@/components/user/pages/home/landing/menu/index';
import Image from 'next/image';
import { url } from 'inspector';
export default function Cetring() {
  return (
    <>
      <Menu />
      <div className="w-full h-screen relative z-50">
        <div className="absolute  inset-0 bg-blue-950 opacity-40 dark:bg-slate-900"></div>
        <Image
          src={"/images/discover-menu.jpg"}
          alt="bg-cetring"
          className="w-full h-screen  object-cover object-center bg-center overflow-hidden  bg-fixed"
          width={1500}
          height={1500}
        />
        <div
          className="absolute inset-0 z-10 flex mx-auto
        justify-center items-center flex-col container">

          <h1
            className="text-8xl text-white font-black
         text-center leading-relaxed max-w-4xl w-full md:text-5xl md:leading-[1.3]  "
          >
            کیفیت را در کترینگ {" "}
            <span
              className="text-transparent  border-8 px-2"
              style={{
                WebkitTextStroke: "2px #fff",
              }}
            >
              میلاد
            </span>{" "}
            تجربه  کنید
          </h1>
        </div>
      </div>

      <div className='my-80'>slam</div>





    </>

  )
}

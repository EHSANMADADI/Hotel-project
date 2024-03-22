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
      </div>




      <div className="h-4/5 m-44">slam</div>
    </>

  )
}

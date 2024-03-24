'use client'
import React from 'react'
import Menu from '@/components/user/pages/home/landing/menu/index';
import Image from 'next/image';
import { useState } from 'react';
import { LiaSearchSolid } from "react-icons/lia";
import { useRef } from 'react';
import Testimonials from '../home/testmonials/index';
import Footer from '@/components/user/pages/home/footer/index';
import Link from 'next/link';
import Product from './product/index'
export default function Cetring() {
  const [typefood, setTypeFood] = useState('');
  const [searchItem, setSerchItem] = useState('');

  function handelSearchItem(e: any) {
    const newsearch = e.target.value;
    setSerchItem(newsearch);
    console.log(newsearch);

  }


  return (
    <>
      <Menu />
      <div className="w-full h-screen relative z-50">
        <div className="absolute  inset-0 bg-gray-700 opacity-40 dark:bg-slate-950"></div>
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
          <div className='flex border rounded-md border-gray-100 mt-5 p-5 items-center w-11/12 mx-auto justify-between md:mt-20 md:w-full md:p-1'>
          {/* <div className='lg:flex lg:text-center'>
            <Link href='./resturant/cetring' className="rounded-3xl md:rounded-md  text-2xl lg:text-base p-5 lg:p-2 font-black m-5 lg:m-2 sm:mx-0  sm:text-center bg-transparent border border-blue-400 hover:text-blue-500 hover:bg-white transition-all text-white">کترینگ میلاد</Link>
            <Link href='./resturant/rezervTable' className="rounded-3xl md:rounded-md  text-2xl lg:text-base p-5 lg:p-2 font-black m-5 lg:m-2 sm:mr-1 md:text-center bg-transparent border border-blue-400 hover:text-blue-500 hover:bg-white transition-all text-white"> رزرو میز</Link>

          </div> */}

          <form onSubmit={(e) => { e.preventDefault() }} className='flex items-center'>
            <LiaSearchSolid className='font-bold  text-6xl text-white text-left lg:text-lg sm:hidden' />
            <input onChange={handelSearchItem} value={searchItem} type="text" className='border-none pb-5 pt-5   bg-transparent font-bold rounded-lg text-white text-right sm:text-center text-xl focus:outline-none ' placeholder='چی میل دارید؟' />
          </form>

          <div className='flex'>
            <button className='font-bold p-3 md:p-2 bg-transparent border border-blue-500 text-white rounded-md hover:bg-slate-200 hover:text-blue-500 transition-all'
              onClick={() => { return (setTypeFood('old-food')) }}>غذای صنتی</button>
            <button className='font-bold md:p-2 p-3 bg-transparent border border-blue-500 text-white rounded-md mx-5  hover:bg-slate-200 hover:text-blue-500 transition-all'
              onClick={() => { return (setTypeFood('fast-food')) }}> فست فوود</button>
            {/* <button className='font-bold p-3 bg-transparent border border-blue-400 text-white rounded-md  hover:bg-slate-200 hover:text-blue-500 transition-all'
                              onClick={() => {return(setTypeFood('drink'))}}> نوشیدنی</button> */}
          </div>
        </div>
        </div>

        {/* <div className='flex border rounded-md border-gray-400 p-5 items-center w-11/12 mx-auto justify-between md:mt-20 md:w-full md:p-1'>
          <div className='lg:flex lg:text-center'>
            <Link href='./resturant/cetring' className="rounded-3xl md:rounded-md  text-2xl lg:text-base p-5 lg:p-2 font-black m-5 lg:m-2 sm:mx-0  sm:text-center bg-transparent border border-blue-400 hover:text-blue-500 hover:bg-white transition-all text-white">کترینگ میلاد</Link>
            <Link href='./resturant/rezervTable' className="rounded-3xl md:rounded-md  text-2xl lg:text-base p-5 lg:p-2 font-black m-5 lg:m-2 sm:mr-1 md:text-center bg-transparent border border-blue-400 hover:text-blue-500 hover:bg-white transition-all text-white"> رزرو میز</Link>

          </div>

          <form onSubmit={(e) => { e.preventDefault() }} className='flex items-center'>
            <LiaSearchSolid className='font-bold  text-6xl text-white text-left lg:text-lg sm:hidden' />
            <input onChange={handelSearchItem} value={searchItem} type="text" className='border-none pb-5 pt-5   bg-transparent font-bold rounded-lg text-white text-right sm:text-center text-xl focus:outline-none ' placeholder='چی میل دارید؟' />
          </form>

          <div className='flex'>
            <button className='font-bold p-3 md:p-2 bg-transparent border border-blue-400 text-white rounded-md hover:bg-slate-200 hover:text-blue-500 transition-all'
              onClick={() => { return (setTypeFood('old-food')) }}>غذای صنتی</button>
            <button className='font-bold md:p-2 p-3 bg-transparent border border-blue-400 text-white rounded-md mx-5  hover:bg-slate-200 hover:text-blue-500 transition-all'
              onClick={() => { return (setTypeFood('fast-food')) }}> فست فوود</button>
            {/* <button className='font-bold p-3 bg-transparent border border-blue-400 text-white rounded-md  hover:bg-slate-200 hover:text-blue-500 transition-all'
                              onClick={() => {return(setTypeFood('drink'))}}> نوشیدنی</button> *
          </div>
        </div> */}

        <div className='mb-5 dark:bg-black'>
               <div className='flex flex-wrap'>
                    <Product type={typefood} searchItem={searchItem} />
               </div>
               <div className='mt-8'>
                    <Testimonials id={1} />
               </div>
               <div>
                    <Footer />
               </div>

          </div>
      </div>
    </>

  )
}

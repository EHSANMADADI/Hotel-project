'use client'
import React from 'react'
import { useState } from 'react';
import Product from './prodoct';
import { LiaSearchSolid } from "react-icons/lia";
import { useRef } from 'react';
import Testimonials from '../home/testmonials/index';
import Footer from '@/components/user/pages/home/footer/index';
import Link from 'next/link';
import ChatOnline from '@/components/shared/chatOnline';
import FoodContextProvider from '@/Context/FoodContextProvider';
const Resturant = () => {
     const [typefood, setTypeFood] = useState('');
     const [searchItem, setSerchItem] = useState('');

     function handelSearchItem(e: any) {
          const newsearch = e.target.value;
          setSerchItem(newsearch);
          console.log(newsearch);

     }
     return (<>
          {/* context */}
          <FoodContextProvider>

               <div className=" bg-food absolute inset-0 sm:w-full">
                    <div className=" mt-24  dark:text-white flex items-center flex-col ">
                         <div className="mt-10 mb-5 md:mt-16">
                              <h1 className="text-8xl text-white font-black text-center leading-[1.5] max-w-4xl w-full md:text-5xl md:leading-[1.3]">به رستوران <span className="text-transparent  border-8 px-2"
                                   style={{ WebkitTextStroke: "2px #fff", }}>ميلاد</span> خوش آمدید </h1>
                         </div>



                         <div className='flex border rounded-md border-gray-400 p-5 items-center w-11/12 overflow-auto mx-auto justify-between md:mt-20 md:w-full md:p-1'>
                              <div className='lg:flex lg:text-center'>
                                   <Link href='./resturant/cetring' className="rounded-3xl md:rounded-md  text-2xl lg:text-base sm:text-xs p-5 lg:p-2 font-black m-5 lg:m-2 sm:mx-0  sm:text-center bg-transparent border border-blue-400 hover:text-blue-500 hover:bg-white transition-all text-white">کترینگ میلاد</Link>
                                   <Link href='./resturant/rezervTable' className="rounded-3xl md:rounded-md  text-2xl lg:text-base sm:text-xs p-5 lg:p-2 font-black m-5 lg:m-2 sm:mr-1 md:text-center bg-transparent border border-blue-400 hover:text-blue-500 hover:bg-white transition-all text-white"> رزرو میز</Link>
                              </div>

                              <form onSubmit={(e) => { e.preventDefault() }} className='flex items-center'>
                                   <LiaSearchSolid className='font-bold  text-6xl text-white text-left lg:text-lg sm:hidden' />
                                   <input onChange={handelSearchItem} value={searchItem} type="text" className='border-none pb-5 pt-5   bg-transparent font-bold rounded-lg text-white text-right sm:text-center text-xl sm:text-xs focus:outline-none ' placeholder='چی میل دارید؟' />
                              </form>

                              <div className='flex'>
                                   <button className='sm:text-xs font-bold p-3 md:p-2 bg-transparent border border-blue-400 text-white rounded-md hover:bg-slate-200 hover:text-blue-500 transition-all'
                                        onClick={() => { return (setTypeFood('old-food')) }}>غذای سنتی</button>
                                   <button className='sm:text-xs font-bold md:p-2 p-3 bg-transparent border border-blue-400 text-white rounded-md mx-5  hover:bg-slate-200 hover:text-blue-500 transition-all'
                                        onClick={() => { return (setTypeFood('fast-food')) }}> فست فوود</button>
                                   {/* <button className='font-bold p-3 bg-transparent border border-blue-400 text-white rounded-md  hover:bg-slate-200 hover:text-blue-500 transition-all'
                              onClick={() => {return(setTypeFood('drink'))}}> نوشیدنی</button> */}
                              </div>
                         </div>
                    </div>


               </div>
               <div className='mt-[47rem] mb-5 dark:bg-black'>
                    <div className='flex flex-wrap'>
                         <Product type={typefood} searchItem={searchItem} />

                    </div>
                    <div className='mt-8'>
                         <Testimonials id={1} />
                    </div>
                    <div className='bottom-0'>
                         <Footer />
                    </div>

               </div>
               <ChatOnline />

          </FoodContextProvider>




     </>)
}
export default Resturant;
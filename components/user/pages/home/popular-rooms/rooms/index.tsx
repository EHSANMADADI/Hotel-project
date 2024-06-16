import React from 'react'
import Slider from "@/components/shared/slider";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import Footer from "@/components/user/pages/home/footer/index";
import Image from 'next/image';
import Link from 'next/link';
export default function RoomsS() {
     return (
          <div className="bg-white dark:bg-black dark:opacity-95">
               <Slider options={{
                    type: 'loop',
                    gap: "1.2rem",
                    autoWidth: true,
                    height: "500px",
                    direction: "rtl",
                    pagination: true,
                    arrows: false,
                    autoplay: false,
               }} arrows={true}>
                    {Array(6)
                         .fill("")
                         .map((_, i) => (
                              <SplideSlide key={i} >
                                   <div className="h-auto w-auto">
                                        <Image src={`/images/room/item-room${i + 1}.jpg`} alt="image" width={800} height={10} />
                                   </div>
                              </SplideSlide>
                         ))}
               </Slider>
               <div className='my-16 mx-4'>
                    <h2 className="text-blue-800 font-extrabold text-5xl md:text-4xl mb-6 leading-[1.4]">
                         امکانات - ویژگی های اتاق
                    </h2>
                    <div className='flex justify-around m-5 leading-6 flex-wrap'>
                         <div>
                              <ul className='border border-gray-300 px-20 py-10 bg-slate-300 rounded-2xl font-bold text-4xl text-gray-600 '>
                                   <li className='my-4'> یخچال</li>
                                   <li className='my-4'> گاوصندوق</li>
                                   <li className='my-4'> 3 تخت</li>
                                   <li className='my-4'> تلفن ثابت</li>
                              </ul>

                         </div>
                         <div>
                              <ul className='border border-gray-300 p-10 bg-blue-300 rounded-2xl font-bold text-4xl text-gray-600 sm:mt-0 mt-4 '>
                                   <li className='my-4'> اینترنت رایگان پر سرعت</li>
                                   <li className='my-4'>سرویس رایگان صبحانه</li>
                                   <li className='my-4'>امکان تغیر دکوراسیون</li>
                                   <li className='my-4'>سرویس ایاب ذهاب رایگان</li>
                              </ul>
                         </div>
                    </div>
               </div>
               <div className='flex justify-center items-center my-5 '>
                    
                    <Link href='/' className='bg-blue-500 text-white p-5 m-1 hover:scale-x-110 duration-200 rounded-2xl'>رزرو اتاق</Link>
                

               </div>
               <Footer />



          </div>
     )
}

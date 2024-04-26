import React from 'react'
import Slider from "@/components/shared/slider";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import Footer from "@/components/user/pages/home/footer/index";
import Image from 'next/image';
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
                    <div className='flex justify-around m-5 leading-6'>
                         <div>
                              <ul>
                                   <li>item1</li>
                                   <li>item1</li>
                                   <li>item1</li>
                                   <li>item1</li>
                              </ul>

                         </div>
                         <div>
                              <ul>
                                   <li>item1</li>
                                   <li>item1</li>
                                   <li>item1</li>
                                   <li>item1</li>
                              </ul>
                         </div>
                    </div>


               </div>
               <Footer/>



          </div>
     )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAnglesRight } from "react-icons/fa6";
import Footer from '../home/footer';
/////////// img and title and discretion  received from description 

export default function RoomItem() {
     return (
          <>
               <h1 className="text-gray-800 dark:text-white font-black text-6xl text-center m-8">انواع اتاق ها</h1>

               <div className="flex flex-wrap mx-auto justify-center">
                    {
                         Array(6).fill("")
                              .map((_, i) => {
                                   return (
                                        <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
                                             <Link href='#'>
                                                  <Image className="rounded-t-lg" width={500} height={300} src={`/images/room/item-room${i + 1}.jpg`} alt="RoomItem" />
                                             </Link>
                                             <div className="p-5 text-center">
                                                  <Link href="#">
                                                       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">سوئیت جونیور</h5>
                                                  </Link>
                                                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> طراحی منحصربه فرد این سوئیت ها با هدف جلب رضایت شما و به منظور جذابیت ظاهری هرچه بیشتر صورت پذیرفته است. آرامش در جای جای این سوئیت ها موج می زند و شما با اقامت در آن ها از انتخاب خود لذت خواهید برد.</p>
                                                  <Link href={`/rooms/${i+1}`} className="hover:animate-pulse duration-200 inline-flex items-center justify-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                       <span className='p-2 hover:animate-pulse duration-200'>
                                                            <FaAnglesRight />
                                                       </span>
                                                       اطلاعات بيشتر

                                                  </Link>
                                             </div>
                                        </div>
                                   )
                              })
                    }
               </div>

               <Footer />
          </>
     )
}

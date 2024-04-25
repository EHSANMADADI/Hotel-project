import React from 'react'
import Image from 'next/image'
import RoomItem from './roomItem'
export default function Rooms() {
     return (

          <div className="w-full h-screen relative z-50">
               <div className="absolute  inset-0 bg-slate-900 opacity-40 dark:bg-slate-950"></div>
               <Image
                    src={"/images/room/1.jpg"}
                    alt="bg-Rooms"
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
                         هتل {" "}
                         <span
                              className="text-transparent  border-8 px-2"
                              style={{
                                   WebkitTextStroke: "2px #fff",
                              }}
                         >
                              میلاد
                         </span>{" "}
                    </h1>
                    <h6 className="text-yellow-100 font-black text-2xl p-5 mt-10"> --اوج احساساست--</h6>
                    <p className='text-white font-semibold text-xl text-center'>هتل  میلاد که با افتخار در شمال تهران ایستاده است، گوهری پنهان و بهشتی آرام، فضای زیبای یک هتل مجلل واقعی را تابیده است.  برج میلاد بهترین و بهترین راحتی مدرن معاصر را با طعمی تماشایی برای گذشته ترکیب می کند. به عنوان یکی از ممتازترین برج های تهران با معماری هیجان‌انگیز، برج زیبا یک نقطه عطف شهری با ابهت است</p>
               </div>

               <RoomItem />

          </div>
     )
}

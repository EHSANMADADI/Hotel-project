'use client'
import React from 'react'
import { BiSupport } from "react-icons/bi";
import Tooltip from '@/components/shared/tooltip/index';
import { useState } from 'react';
import Modal from '@/components//shared/modal/index';
import { useRef } from 'react';
export default function ChatOnline() {
     const [open, setOpen] = useState(false);
     const FerstName = useRef(null);
     const LastName = useRef(null);
     return (
          <div className=' cursor-pointer rounded-full sticky bottom-2 justify-center flex  text-blue-400 bg-white  dark:bg-slate-800 text-3xl z-50 p-5 w-24  sm:text-base sm:w-20'>
               <Tooltip message='سوالی دارید؟'>
                    <BiSupport className='text-center hover:opacity-80' data-tooltip-target='tooltip' onClick={() => setOpen(true)} />
               </Tooltip>
               <Modal Open={open} onClose={() => setOpen(false)} >
                    <form className=' p-5' onSubmit={(e) => e.preventDefault()}>
                         <div className="grid grid-cols-2 mb-5 gap-6 md:grid-cols-1">
                              <div className="relative z-50 w-full  group">
                                   <input ref={FerstName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                   <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-100 peer-focus:dark:text-blue-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام </label>
                              </div>
                              <div className="relative z-50 w-full md:my-5 group">
                                   <input ref={LastName} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                   <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-100 peer-focus:dark:text-blue-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> نام خانوادگی</label>
                              </div>
                         </div>
                         <textarea className='focus:border-none focus:outline-blue-600 bg-transparent text-white w-full text-xl border border-yellow-50 p-2 h-[300px]'  placeholder="سوال خود را از ما بپرسید"></textarea>
                         <button className='p-4 rounded-md text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition-colors text-xl font-black '>ارسال</button>
                    </form>
               </Modal>


          </div>
     )
}
//<button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Light tooltip</button>


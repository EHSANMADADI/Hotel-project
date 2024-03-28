import React from 'react'
import { BiSupport } from "react-icons/bi";
import Tooltip from '@/components/shared/tooltip/index';

export default function ChatOnline() {

     return (
          <div className='hover:opacity-80 cursor-pointer rounded-full sticky bottom-2 justify-center flex  text-blue-400 bg-white  dark:bg-slate-800 text-3xl z-50 p-5 w-24  sm:text-base sm:w-20'>
               <Tooltip message='سوالی دارید؟'>
                    <BiSupport className='text-center' data-tooltip-target='tooltip' />
               </Tooltip>


          </div>
     )
}
//<button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Light tooltip</button>


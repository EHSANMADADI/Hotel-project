import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

export default function Modal(props: { Open: Boolean, onClose: () => void, children: React.ReactNode }) {
  if (!props.Open) return null;
  return (
    <>
    <div className='fixed inset-0 flex justify-center items-center transition-colors bg-opacity-25 z-50 border-black' >
      <div className='top-0 left-0 bg-gray-700/50 absolute w-full h-screen -z-20'  onClick={props.onClose}/>
      <div className='w-[800px] sm:w-[300px] flex flex-col'>
        <button className='text-black  place-self-end rounded p-2 mb-1' onClick={() => props.onClose()}><IoIosCloseCircle className='text-3xl bg-white' /></button>
        <div className='bg-slate-500 dark:bg-slate-600 rounded '>
          <div className='w-full'>
            {props.children}
          </div>
        </div>                                                
      </div>
    </div>
    </>
  )
}
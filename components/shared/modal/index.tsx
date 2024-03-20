import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

export default function Modal(props: { Open: Boolean, onClose: () => void, children: React.ReactNode }) {
  console.log('props=' + props.Open);
  if (!props.Open) return null;

  const Handelclose = (e: any) => {
    if (e.target.id === 'wrapper') props.onClose();

  }
  return (

    <div className='fixed inset-0 flex justify-center items-center transition-colors bg-opacity-25 backdrop-blur-sm  border-black' id='wrapper' onClick={Handelclose}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-black  place-self-end rounded   p-2 mb-1' onClick={() => props.onClose()}><IoIosCloseCircle className='text-2xl bg-white' /></button>
        <div className='bg-slate-500 dark:bg-slate-600  rounded '>
          <div className='w-full'>
            {props.children}
          </div>

        </div>
      </div>
    </div>


  )
}

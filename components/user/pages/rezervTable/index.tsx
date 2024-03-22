import React from 'react';
import FormRezerv from './FormRezerv/index';
import Menu from '@/components/user/pages/home/landing/menu/index';
import Link from 'next/link';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Footer from '@/components/user/pages/home/footer/index';

export default function RezervTable() {
  return (
    <div className="bg-white" >
      <div dir='ltr' className="p-5 m-2">
        <Link className='text-blue-500 text-6xl md:text-3xl bg-white hover:text-blue-800' href='/resturant'> <IoArrowBackCircleSharp /> </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 mb-5">
        <FormRezerv />
      </div>
      <Footer />
    </div>



  )
}

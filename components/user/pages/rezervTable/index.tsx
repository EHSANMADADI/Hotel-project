import React from 'react';
import FormRezerv from '@/components/user/pages/rezervTable/formRezerv/index';
import Menu from '@/components/user/pages/home/landing/menu/index';
import Link from 'next/link';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Footer from '@/components/user/pages/home/footer/index';

export default function RezervTable() {
  return (
    <div className="bg-white text-black dark:bg-slate-900  dark:text-yellow-100" >
      <div dir='ltr' className="p-5 m-2">
        <Link className='text-blue-500 text-6xl md:text-3xl bg-white hover:text-blue-800' href='/resturant'> <IoArrowBackCircleSharp /> </Link>
      </div>
      <div className='border rounded-lg p-5 m-5 leading-relaxed border-blue-400'>
        <h6>شما میتوانید با تکمیل فرم زیر میز خود را در رستوران میلاد رزرو کنید</h6>
        <p>لطفا برای اطلاعات بیشتر درباره ی قوانین موارد زیر را مطالعه فرمایید:</p>
        <ul className='list-disc mr-8 mb-2 mt-2'>
          <li>فقط در صورتی که مبلغ پیش پرداخت را واریز نمایید و کد پیگیری دریافت نمایید میز برای شما رزرو خواهد شد در غیر این صورت ما هیچ مسئولیتی نخواهیم داشت</li>
          <li>میز از 15 دقیقه قبل از ساعت تعین شده توسط شما رزرو میشود و حد اکثر تا 30 دقیقه بعد از زمان تعیین شده توسط شما در رزرو باقی میماند</li>
          <li>در صورتی که حداکثر تا 30 دقیقه بعد از زمان تعیین شده مراجعه نفرمایید رزرو شما باطل خواهد شد و امکان بازگرداندن مبلغ پیش پرداخت وجود نخواهد داشت</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-slate-900 mb-5">
        <FormRezerv />
      </div>
      <Footer />
    </div>



  )
}

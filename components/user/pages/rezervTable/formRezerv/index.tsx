'use client'
import React from 'react'
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { Calendar } from 'react-multi-date-picker';
import DatePicker from "react-multi-date-picker";
import axios from 'axios';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useRouter } from 'next/navigation';

export default function FormRezerv() {
     const FerstName = useRef(null);
     const LastName = useRef(null);
     const PhoneNumber = useRef(null);
     const DateRezerv = useRef(null);
     const Ocloack = useRef(null);
     const NumberGuset = useRef(null);
     const router = useRouter();

     return (
          <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto my-10 p-5 bg-white dark:bg-slate-900">
               <div className="grid grid-cols-2 mb-5 gap-6 md:grid-cols-1">
                    <div className="relative z-0 w-full  group">
                         <input ref={FerstName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                         <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام </label>
                    </div>
                    <div className="relative z-0 w-full md:my-5 group">
                         <input ref={LastName} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                         <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> نام خانوادگی</label>
                    </div>
               </div>
               <div className="grid md:grid-cols-1 mt-2 ">
                    <div className="relative z-0 w-full mb-5 group">
                         <input ref={PhoneNumber} type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                         <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">شماره تلفن</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group dark:text-white ">

                         {/* <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">تاریخ رزرو </label> */}
                         <DatePicker style={{
                              display: 'block',
                              padding: '20px 0px',
                              width: '100%',
                              fontSize: '0.8rem',
                              lineHeight: '1.25rem',
                              background: 'transparent',
                              borderWidth: '0px',
                              borderBottomWidth: '2px',
                              borderColor: 'gray',
                              appearance: 'none',

                         }}
                              containerStyle={{
                                   border: 'none',
                                   width: "100%",
                                   outline: 'none',

                              }}
                              calendar={persian} locale={persian_fa} placeholder='تاریخ رزرو خود را انتخاب نمایید' />
                    </div>




                    <div className="relative z-0 w-full mb-5 group">
                         <input ref={Ocloack} type="time" name="floating_time" id="floating_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ساعت رزرو خود را انتخاب کنید" required />
                         <label htmlFor="floating_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ساعت رزرو </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                         <input ref={NumberGuset} type="number" name="floating_number-Guest" id="floating_number-Guest" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                         <label htmlFor="floating_number-Guest" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> تعداد میهمانان </label>
                    </div>

               </div>
               <button type="submit" className="animate-bounce text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                         const Token = localStorage.getItem('token')
                         Token && axios.post('127.0.0.1:8000/api/restaurant/reserves', {
                              'Authorization': `Bearer ${Token}`
                         }, {
                              table_id: 1,
                              restaurant_id: 1,
                              date: DateRezerv,
                              check_in_hour: Ocloack,
                              check_out_hour: Ocloack,////  check_out_hour=  check_out_hour+1
                              status: "full",
                              number_of_guest: NumberGuset
                         }).then((res) => (console.log(res),
                              Swal.fire({
                                   title: "با موفقیت انجام شد",
                                   icon: "success"
                              }))).catch((err) => alert(err))

                         !Token && (Swal.fire({
                              title: "لطفا ابتدا وارد حساب کاربری خود شوید",
                              icon: "error"
                         }),
                         router.push('/auth')
                         )
                    }}
               >ثبت</button>
          </form >
          
     )
}

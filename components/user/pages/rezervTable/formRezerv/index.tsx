'use client'
import React, { FormEvent, useState } from 'react'
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { Calendar } from 'react-multi-date-picker';
import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import ListOfTableRest from '../../ListofTableRestorunt/index';
import api from '@/Configs/api';
import { Tables } from '../../cafe/Reservation/Tables';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


export default function FormRezerv() {
     const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     const { push } = useRouter()
     const [tableId, setTableId] = useState(-1)
     const FerstName = useRef<HTMLInputElement>(null);
     const LastName = useRef<HTMLInputElement>(null);
     const PhoneNumber = useRef<HTMLInputElement>(null);
     const Ocloack = useRef<HTMLInputElement>(null);
     const NumberGuset = useRef<HTMLInputElement>(null);
     const [tables, setTables] = useState([] as Tables[])
     const [checkOutTime, setCheckOutTime] = useState('')
     const [numGuests, setNumGuests] = useState('')
     const [date, setDate] = useState('')

     const showListofTable = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setTables([])
          const formData = new FormData(e.currentTarget)
          setNumGuests(formData.get('numGuests') as string)
          setCheckOutTime(formData.get('checkOutTime') as string)
          const _date = formData.get('date') as string
          setDate(_date)
          if (FerstName.current?.value && LastName.current?.value && PhoneNumber.current?.value && Ocloack.current?.value && NumberGuset.current?.value && _date) {
               const formattedDate = _date.replaceAll('/', '-')
               api.get<Tables[]>(`/restaurant-tables-unreserved?date=${formattedDate}&time=${Ocloack.current.value}`)
                    .then(data => setTables(data.data)
                    ).catch(_ => {
                         toast.error("دریافت اطلاعات میزها با خطا مواجه شد.دوباره تلاش کنید")
                    }
                    )
          }
          else {
               console.log(FerstName.current?.value, LastName.current?.value, PhoneNumber.current?.value, _date, Ocloack.current?.value);
               Swal.fire({
                    title: "لطفا اطلاعات را تکمیل نمایید ",
                    icon: "error",
                    confirmButtonText: "تایید"
               })
          }
     }

     return (
          <>
               <form onSubmit={showListofTable} className="max-w-2xl mx-auto my-10 p-5 bg-white dark:bg-slate-900">
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
                                   name='date' digits={digits}
                                   calendar={persian} locale={persian_fa} placeholder='تاریخ رزرو خود را انتخاب نمایید' />
                         </div>

                         <div className="relative z-0 w-full mb-5 group">
                              <input ref={Ocloack} type="time" name="floating_time" id="floating_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ساعت ورود خود را انتخاب کنید" required />
                              <label htmlFor="floating_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ساعت ورود </label>
                         </div>
                         <div className="relative z-0 w-full mb-5 group">
                              <input type="time" name="checkOutTime" id="floating_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ساعت خروج خود را انتخاب کنید" required />
                              <label htmlFor="floating_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ساعت خروج </label>
                         </div>
                         <div className="relative z-0 w-full mb-5 group">
                              <input ref={NumberGuset} type="number" name="numGuests" id="floating_number-Guest" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label htmlFor="floating_number-Guest" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> تعداد میهمانان </label>
                         </div>

                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         مشاهده میز ها</button>
               </form >
               {
                    tables.length !== 0 && <ListOfTableRest tables={tables} setTableId={setTableId} />
               }
               {
                    // tables.length === 0 && <p>میزی یافت نشد.</p>
               }
               {tableId !== -1 && <button
                    className="text-white w-auto block mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                         api.post('/restaurant/reserves', {
                              table_id: tableId,
                              restaurant_id: 1,
                              date: date,
                              check_in_hour: Ocloack.current?.value,
                              check_out_hour: checkOutTime,
                              status: "full",
                              number_of_guest: numGuests
                         }).then(_ => { toast.success("میز با موفقیت رزرو شد."); push('/resturant') })
                              .catch(_ => toast.error("رزرو انجام نشد."))
                    }}>ثبت نهایی</button>}
          </>
     )
}
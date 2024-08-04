'use client'
import React, { FormEvent } from 'react';
import Link from 'next/link';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Footer from '@/components/user/pages/home/footer/index';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import TimePicker from "react-multi-date-picker/plugins/time_picker";

export default function ReserveFormPage() {
    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        formData.get('')
    }
    return (
        <div className="bg-white text-black dark:bg-slate-900  dark:text-yellow-100" >
            <div dir='ltr' className="p-5 m-2">
                <Link className='text-amber-900 text-6xl md:text-3xl hover:text-coffee' href='/coffee-shop'> <IoArrowBackCircleSharp /> </Link>
            </div>
            <div className='border rounded-lg p-5 m-5 leading-relaxed border-blue-400'>
                <h6>شما میتوانید با تکمیل فرم زیر میز خود را در کافه میلاد رزرو کنید</h6>
                <p>لطفا برای اطلاعات بیشتر درباره ی قوانین موارد زیر را مطالعه فرمایید:</p>
                <ul className='list-disc mr-8 mb-2 mt-2'>
                    <li>فقط در صورتی که مبلغ پیش پرداخت را واریز نمایید و کد پیگیری دریافت نمایید میز برای شما رزرو خواهد شد در غیر این صورت ما هیچ مسئولیتی نخواهیم داشت</li>
                    <li>میز از 15 دقیقه قبل از ساعت تعین شده توسط شما رزرو میشود و حد اکثر تا 30 دقیقه بعد از زمان تعیین شده توسط شما در رزرو باقی میماند</li>
                    <li>در صورتی که حداکثر تا 30 دقیقه بعد از زمان تعیین شده مراجعه نفرمایید رزرو شما باطل خواهد شد و امکان بازگرداندن مبلغ پیش پرداخت وجود نخواهد داشت</li>
                </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 mb-5">
                <form onSubmit={submitHandler} className="max-w-2xl mx-auto my-10 p-5 bg-white dark:bg-slate-900">
                    <div className="grid grid-cols-2 mb-5 gap-6 md:grid-cols-1">
                        <div className="relative z-0 w-full  group">
                            <input type="text" name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام </label>
                        </div>
                        <div className="relative z-0 w-full md:my-5 group">
                            <input type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> نام خانوادگی</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 mt-2 ">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="phoneNumber" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">شماره تلفن</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group dark:text-white ">
                            <DatePicker name='date'
                                style={{
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
                                    zIndex: 10

                                }}
                                calendar={persian} locale={persian_fa} placeholder='تاریخ رزرو خود را انتخاب نمایید'
                                calendarPosition='top-right'
                            />
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <DatePicker
                                name='checkInHour'
                                disableDayPicker
                                format="HH:mm"
                                plugins={[
                                    <TimePicker key='' />
                                ]}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="top"
                                style={{
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
                                    zIndex: 10

                                }}
                                placeholder='ساعت ورود خود را مشخص کنید.'
                            />
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <DatePicker
                                name='checkOutHour'
                                disableDayPicker
                                format="HH:mm"
                                plugins={[
                                    <TimePicker key='' />
                                ]}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="top"
                                style={{
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
                                    zIndex: 10
                                }}
                                placeholder='ساعت خروج خود را مشخص کنید.'
                            />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="numberOfGuests" id="floating_number-Guest" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_number-Guest" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> تعداد میهمانان </label>
                        </div>

                    </div>
                    <button className="animate-bounce text-white bg-coffee hover:bg-coffee/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                        مشاهده میز های قابل رزرو</button>
                </form >
            </div>
            <Footer />
        </div>



    )
}

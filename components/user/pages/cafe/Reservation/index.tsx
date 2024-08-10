'use client'
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Footer from '@/components/user/pages/home/footer/index';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import ShowTables from './ShowTables';
import api from '@/Configs/api';
import toast from 'react-hot-toast';
import { Tables } from './Tables';
import ConfirmReserve from './ConfirmReserve';

export default function ReserveFormPage() {
    const [tables, setTables] = useState([] as Tables[])
    const [tableNum, setTableNum] = useState({ id: 0, number: '' })
    const [checkInHour, setCheckInHour] = useState('')
    const [checkOutHour, setCheckOutHour] = useState('')
    const [date, setDate] = useState('')
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTables([])
        setTableNum({ id: 0, number: '' })
        const formData = new FormData(e.currentTarget)
        const _checkInHour = formData.get('checkInHour') as string
        const _checkOutHour = formData.get('checkOutHour') as string
        setCheckInHour(_checkInHour)
        setCheckOutHour(_checkOutHour)
        const _date = formData.get('date') as string
        if (!_checkInHour || !_date || !_checkOutHour)
            return toast.error("ساعت و تاریخ را به درستی وارد کنید")
        setDate(_date)
        const formattedDate = date.replaceAll('/', '-')
        api.get<Tables[]>(`/coffee-shops-unreserved?date=${formattedDate}&time=${_checkInHour}`)
            .then(data => setTables(data.data)
            ).catch(_ => {
                toast.error("دریافت اطلاعات میزها با خطا مواجه شد.دوباره تلاش کنید")
            }
            )
    }
    return (
        <div className="bg-gray-200 text-black dark:bg-slate-900  dark:text-yellow-100" >
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
            <div className="bg-transparent dark:bg-slate-900 mb-5">
                <form onSubmit={submitHandler} className="grid grid-cols-1 gap-6 gap-y-16 rounded-xl p-6 items-center max-w-3xl mx-auto w-2/3 my-12 px-8">
                    <div className='flex gap-2 flex-col border-b border-gray-700 focus-within:border-b-2'>

                        <label htmlFor="date">تاریخ </label>
                        <DatePicker name='date'
                            id='date'
                            style={{
                                display: 'block',
                                padding: '20px 10px',
                                width: '100%',
                                fontSize: '0.8rem',
                                lineHeight: '1.25rem',
                                background: 'transparent',
                                borderWidth: '0px',
                                appearance: 'none',
                            }}
                            calendar={persian} locale={persian_fa} digits={digits} placeholder='تاریخ رزرو خود را انتخاب نمایید'
                            calendarPosition='top-right'
                        />
                    </div>

                    <div className='flex gap-2 flex-col border-b border-gray-700 focus-within:border-b-2'>
                        <label htmlFor="checkInHour"> ساعت ورود </label>
                        <DatePicker
                            id='checkInHour'
                            name='checkInHour'
                            disableDayPicker
                            digits={digits}
                            format="HH:mm"
                            plugins={[
                                <TimePicker key='' />
                            ]}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="top"
                            style={{
                                display: 'block',
                                padding: '20px 10px',
                                width: '100%',
                                fontSize: '0.8rem',
                                lineHeight: '1.25rem',
                                background: 'transparent',
                                borderWidth: '0px',
                                appearance: 'none',
                            }}
                            placeholder='ساعت ورود خود را مشخص کنید.'
                        />
                    </div>
                    <div className='flex gap-2 flex-col border-b border-gray-700 focus-within:border-b-2'>

                        <label htmlFor="checkOutHour">ساعت خروج </label>
                        <DatePicker
                            id='checkOutHour'
                            name='checkOutHour'
                            disableDayPicker
                            digits={digits}
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
                                appearance: 'none',
                            }}
                            placeholder='ساعت خروج خود را مشخص کنید.'
                        />
                    </div>
                    <button className="w-full text-white bg-coffee hover:bg-coffee/80 duration-200 focus:outline-none font-medium rounded-lg text-sm mx-auto sm:w-auto px-5 py-2.5 text-center ">
                        مشاهده میز های قابل رزرو</button>
                </form >

            </div >
            {
                tables.length && <ShowTables tables={tables} setTableNumber={setTableNum} />
            }
            {
                tableNum.number &&
                <>
                    <h4 className='text-center text-2xl font-bold'>میز {tableNum.number} در حالت انتخاب قرار گرفت</h4>
                    <ConfirmReserve tableId={tableNum.id} date={date} checkInHour={checkInHour} checkOutHour={checkOutHour} />
                </>
            }
            <Footer />
        </div >
    )
}

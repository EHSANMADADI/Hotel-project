import api from '@/Configs/api'
import React, { FormEvent } from 'react'
import toast from 'react-hot-toast'

interface Props {
    checkInHour: string
    checkOutHour: string
    tableId: number
}

const ConfirmReserve = ({ checkInHour, checkOutHour, tableId }: Props) => {
    const reserveTable = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const firstName = formData.get('firstName') as string
        const lastName = formData.get('lastName') as string
        const phoneNumber = formData.get('phoneNumber') as string
        const number_of_guest = formData.get('numberOfGuests') as string
        if (!firstName || firstName.length < 3)
            return toast.error("حداقل سه حرف برای نام وارد کنید")
        if (!lastName || lastName.length < 3)
            return toast.error("حداقل سه حرف برای نام خانوادگی وارد کنید")
        if (!phoneNumber || phoneNumber.length < 11)
            return toast.error("شماره تلفن را به درستی وارد کنید")
        if (!number_of_guest || +number_of_guest < -1)
            return toast.error('تعداد مهمان را به درستی وارد کنید')
        api.post('/coffee-shop/reserves', {
            data:+number_of_guest,
            coffee_shop_table_id: tableId,
            coffee_shop_id: 1,
            status: "full",
            check_in_hour: checkInHour,
            check_out_hour: checkOutHour,
        }).then(data => { console.log(data); toast.success('؛ثس') }
        ).catch(er => {console.log(er) ; toast.error("Error")}
        )
    }
    return (
        <form onSubmit={reserveTable} className=' flex flex-col gap-6 items-center max-w-2xl mx-auto my-10 p-5 bg-white dark:bg-slate-900'>
            <div className="relative z-0 w-full  group">
                <input type="text" name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام </label>
            </div>
            <div className="relative z-0 w-full md:my-5 group">
                <input type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> نام خانوادگی</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="tel" name="phoneNumber" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">شماره تلفن</label>
            </div>
            <div className="relative z-0 w-full group">
                <input type="number" name="numberOfGuests" id="floating_number-Guest" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_number-Guest" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> تعداد میهمانان </label>
            </div>
            <button className="animate-bounce  text-white bg-coffee hover:bg-coffee/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                تایید رزرو</button>
        </form>
    )
}

export default ConfirmReserve

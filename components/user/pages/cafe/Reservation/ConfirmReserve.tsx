import api from '@/Configs/api'
import useRole from '@/store/useRole'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'
import toast from 'react-hot-toast'

interface Props {
    checkInHour: string
    checkOutHour: string
    tableId: number
    date: string
}

const ConfirmReserve = ({ checkInHour, checkOutHour, tableId, date }: Props) => {
    const { push } = useRouter()
    const { role } = useRole()
    const reserveTable = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (role === 'UnAuthenticated') {
            toast.error('برای رزرو میز ابتدا وارد حساب کاربری خود شوید.')
            return push('/auth')
        }
        const formData = new FormData(e.currentTarget)
        const firstName = formData.get('firstName') as string
        const lastName = formData.get('lastName') as string
        const phoneNumber = formData.get('phoneNumber') as string
        const number_of_guest = formData.get('numberOfGuests') as string
        if (!firstName || firstName.length < 3)
            return toast.error("حداقل سه حرف برای نام وارد کنید")
        if (!lastName || lastName.length < 3)
            return toast.error("حداقل سه حرف برای نام خانوادگی وارد کنید")
        if (!phoneNumber || phoneNumber.length !== 11)
            return toast.error("شماره تلفن را به درستی وارد کنید")
        if (!number_of_guest || +number_of_guest < -1)
            return toast.error('تعداد مهمان را به درستی وارد کنید')
        if (role === 'Admin') {
            toast.error("رزرو میز برای ادمین امکان پذیر نیست.")
            return push('/coffee-shop')
        }

        api.post('/coffee-shop/reserves', {
            number_of_guest,
            coffee_shop_table_id: tableId,
            coffee_shop_id: 1,
            status: "full",
            date,
            check_in_hour: checkInHour,
            check_out_hour: checkOutHour,
        }).then(_ => { toast.success('میز با موفقیت رزرو شد.'); push('/coffee-shop') }
        ).catch(_ => toast.error("رزرو میز با خطا مواجه شد.")
        )
    }
    return (
        <form onSubmit={reserveTable} className='grid grid-cols-2 md:grid-cols-1 gap-6 gap-y-16 items-center max-w-3xl mx-auto w-2/3 my-12'  >
            <div className="flex flex-col gap-1">
                <label htmlFor="floating_first_name" >نام </label>
                <input
                    className='border-b dark:border-gray-300 border-gray-700  bg-transparent
                focus:outline-none px-2 py-1
                focus:border-b-2'
                    type="text" name="firstName" id="floating_first_name" placeholder=" " />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="floating_last_name" > نام خانوادگی</label>
                <input
                    className='border-b dark:border-gray-300 border-gray-700  bg-transparent
                focus:outline-none px-2 py-1
                focus:border-b-2
                '
                    type="text" name="lastName" id="floating_last_name" placeholder="" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="floating_phone" >شماره تلفن</label>
                <input type="tel"
                    className='border-b dark:border-gray-300 border-gray-700  bg-transparent
                focus:outline-none px-2 py-1
                focus:border-b-2'
                    name="phoneNumber" id="floating_phone" placeholder="" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="floating_number-Guest"> تعداد میهمانان </label>
                <input type="number"
                    className='border-b dark:border-gray-300 border-gray-700  bg-transparent
                focus:outline-none px-2 py-1
                focus:border-b-2'
                    name="numberOfGuests" id="floating_number-Guest" placeholder=" " />
            </div>
            <button className="col-span-2 md:col-span-1 bg-coffee hover:bg-coffee/90 py-2 rounded-lg  text-gray-50 w-full">
                تایید رزرو</button>

        </form>
    )
}

export default ConfirmReserve

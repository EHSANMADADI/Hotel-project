import React, { FormEvent } from 'react'
import toast from 'react-hot-toast'
import Title from '../Title'
import api from '@/Configs/api'

const AddTable = () => {
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const number_of_chairs = formData.get("capacity");
        const number_of_table = formData.get("tableNumber")
        const rates = formData.get("price");
        const type = formData.get("type");
        const description = formData.get("description")

        if (!number_of_chairs || Number.isNaN(+number_of_chairs) || +number_of_chairs <= 0) {
            toast.error("ظرفیت میز را به درستی مشخص کنید.", { duration: 3000 })
            return
        }
        if (!number_of_table) {
            toast.error("شماره میز را مشخص کنید.", { duration: 3000 })
            return
        }
        if (!rates || Number.isNaN(+rates) || +rates <= 0) {
            toast.error("هزینه رزرو میز را به درستی مشخص کنید.", { duration: 3000 })
            return
        }

        api.post("/coffee-shop/tables", {
            coffee_shop_id: 1,
            rates,
            type,
            number_of_chairs,
            number_of_table,
            description,
            is_disabled:true
        }).then(() => {
            toast.success("میز با موفقیت تعریف شد.")
        }).catch(err => {
            const statusCode = err?.response?.status;
            if (statusCode === 422)
                toast.error("تعریف میز با خطا مواجه شد. (اطلاعات ورودی کافی نمی باشد.)", { duration: 3000 })
            else if (statusCode >= 500)
                toast.error("تعریف میز با خطا مواجه شد. (خطای سمت سرور رخ داد.)", { duration: 3000 })
            else
                toast.error("تعریف میز با خطا مواجه شد.", { duration: 3000 })
        })
    }
    return (
        <>
            <Title>تعریف میز جدید</Title>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                <label htmlFor="Capacity" className='font-semibold'>ظرفیت میز : </label>
                <input type='number' id='Capacity' name='capacity' placeholder='مثلا 2'
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                />
                <label htmlFor="Type" className='font-semibold'>نوع میز : </label>
                <select name="type" id="Type"
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                >
                    <option value="family">خانوادگی</option>
                    <option value="couple">عاشقانه</option>
                </select>

                <label htmlFor="TableNumber" className='font-semibold'>شماره میز : </label>
                <input id='TableNumber' name='tableNumber'
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا 4' />
                <label htmlFor="description" className='font-semibold'>توضیحات اختیاری: </label>
                <textarea id='description' name='description'
                    className='w-1/4 resize-none bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='توضیحات (اختیاری)' />
                <label htmlFor="price" className='font-semibold'>قیمت میز برای رزرو (به تومان): </label>
                <input id='price' name='price' type='number'
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا 120,000' />
                <button className='bg-coffee hover:bg-coffee/90 duration-200 font-semibold px-6 py-1.5 rounded-lg text-slate-200'>ثبت میز</button>
            </form>
        </>
    )
}

export default AddTable
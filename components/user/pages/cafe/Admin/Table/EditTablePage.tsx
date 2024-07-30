'use client'
import Spinner from '@/components/user/pages/cafe/Admin/Spinner';
import Title from '@/components/user/pages/cafe/Admin/Title';
import api from '@/Configs/api';
import React, { FormEvent } from 'react'
import toast from 'react-hot-toast';
import useTable from '../hooks/useTable';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';


const EditTablePage = ({ tableId }: { tableId: string }) => {
    const { data: table, isError, isPending } = useTable(tableId)
    const queryClient = useQueryClient()
    const { push } = useRouter()
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

        api.put(`/coffee-shop/tables/${tableId}`, {
            coffee_shop_id: 1,
            rates,
            type,
            number_of_chairs,
            number_of_table,
            description,
            is_disabled: table.is_disabled
        }).then(() => {
            toast.success("اطلاعات میز با موفقیت به روز شد.")
            queryClient.invalidateQueries()
            push('/coffee-shop/admin')

        }).catch((err: any) => {
            const statusCode = err?.response?.status;
            if (statusCode === 422)
                toast.error("به روزرسانی میز با خطا مواجه شد. (اطلاعات ورودی کافی نمی باشد.)", { duration: 3000 })
            else if (statusCode >= 500)
                toast.error("به روزرسانی میز با خطا مواجه شد. (خطای سمت سرور رخ داد.)", { duration: 3000 })
            else
                toast.error("به روزرسانی میز با خطا مواجه شد.", { duration: 3000 })
        })
    }

    if (isPending)
        return <div className='p-4 min-h-[620px]'>
            <Spinner />
        </div>
    if (isError)
        return <div className='text-center flex flex-col gap-6 min-h-[620px] p-4 text-2xl font-bold'>میزی پیدا نشد
            <Link href='/coffee-shop/admin' className='mx-auto bg-coffee w-fit text-lg px-4 py-2 inline-block animate-pulse rounded-lg'>بازگشت به پنل ادمین </Link>
            </div>

    return (
        <main className='min-h-[620px] py-4 bg-neutral-300 dark:bg-slate-800'>
            <Link href='/coffee-shop/admin' className='absolute top-24 left-4 bg-coffee text-lg px-4 py-2 inline-block animate-pulse rounded-lg'>بازگشت به پنل ادمین </Link>
            <Title>صفحه به روزرسانی اطلاعات میز {table.number_of_table}</Title>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                <label htmlFor="Capacity" className='font-semibold'>ظرفیت میز : </label>
                <input type='number' defaultValue={table.number_of_chairs} id='Capacity' name='capacity' placeholder='مثلا 2'
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                />
                <label htmlFor="Type" className='font-semibold'>نوع میز : </label>
                <select name="type" id="Type" defaultValue={table.type}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                >
                    <option value="family">خانوادگی</option>
                    <option value="couple">عاشقانه</option>
                </select>

                <label htmlFor="TableNumber" className='font-semibold'>شماره میز : </label>
                <input id='TableNumber' name='tableNumber' defaultValue={table.number_of_table}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا 4' />
                <label htmlFor="description" className='font-semibold'>توضیحات اختیاری: </label>
                <textarea id='description' name='description' defaultValue={table.description}
                    className='w-1/4 resize-none bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='توضیحات (اختیاری)' />
                <label htmlFor="price" className='font-semibold'>قیمت میز برای رزرو (به تومان): </label>
                <input id='price' name='price' type='number' defaultValue={table.rates}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا 120,000' />
                <button className='bg-coffee hover:bg-coffee/90 duration-200 font-semibold px-6 py-1.5 rounded-lg text-slate-200'>به روزرسانی اطلاعات</button>
            </form>
        </main>
    )
}

export default EditTablePage

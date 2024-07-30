'use client'
import React, { FormEvent } from 'react'
import Title from '../Title'
import { useQueryClient } from '@tanstack/react-query'
import api from '@/Configs/api'
import toast from 'react-hot-toast'
import Spinner from '../Spinner'
import { useRouter } from 'next/navigation'
import UseMenuItem from '../hooks/useMenuItem'
import Link from 'next/link'

const EditMenuPage = ({ menuItemId }: { menuItemId: string }) => {
    const { data: menuItem, isPending, isError } = UseMenuItem(menuItemId)
    const { push } = useRouter()
    const queryClient = useQueryClient()
    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name");
        const description = formData.get("description")
        const price = formData.get("price");
        const slug = formData.get("slug");
        if (!name || name.length < 3) {
            toast.error("نام محصول را وارد کنید ( حداقل سه حرف)")
            return
        }
        if (!price || isNaN(Number(price)) || Number(price) < 0) {
            toast.error("لطفا قیمت محصول را به صورت عدد وارد کنید")
            return
        }
        if (!description) {
            toast.error("توضیحات محصول را وارد کنید.")
            return
        }
        if (!slug) {
            toast.error("slug را به درستی وارد کنید")
            return
        }

        api.put(`/menu-items/${menuItemId}`, {
            name,
            description,
            price,
            slug,
            type: "coffeeShop",
            category_id: [1],
        }
        ).then(() => {
            toast.success("با موفقیت به روز شد.",)
            queryClient.invalidateQueries()
            push('/coffee-shop/admin')
        }).catch((err) => {
            const statusCode = err?.response?.status;
            if (statusCode === 422)
                toast.error("به روزرسانی آیتم با خطا مواجه شد. (اطلاعات ورودی کافی نمی باشد.)", { duration: 3000 })
            else if (statusCode >= 500)
                toast.error("به روزرسانی آیتم با خطا مواجه شد. (خطای سمت سرور رخ داد.)", { duration: 3000 })
            else
                toast.error("به روزرسانی آیتم با خطا مواجه شد.", { duration: 3000 })
        })
        //Add Image
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
            <Title>اضافه کردن به منو</Title>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                <label htmlFor="Name" className='font-semibold'>نام  : </label>
                <input id='Name' name='name' placeholder='مثلا اسپرسو' defaultValue={menuItem.name}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                />
                <label htmlFor="price" className='font-semibold'>قیمت (به تومان) : </label>
                <input id='price' name='price' placeholder='مثلا 63,000' type='number' defaultValue={menuItem.price}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                />
                <label htmlFor="description" className='font-semibold'> ترکیبات : </label>
                <input id='description' name='description' value={menuItem.description || "-"}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا ترکیب شیرسرد و اسپرسو' />
                <label htmlFor="slug" className='font-semibold'> اضافه کردن SLUG (به زبان انگلیسی) </label>
                <input id='slug' name='slug' defaultValue={menuItem.slug}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا espresso' />
                <button className='bg-coffee hover:bg-coffee/90 duration-200 w-fit px-6 py-1.5 rounded-lg font-semibold text-slate-200'>اضافه کردن به منو</button>
            </form>
        </main>
    )
}

export default EditMenuPage

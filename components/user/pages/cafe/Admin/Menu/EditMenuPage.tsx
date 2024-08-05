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
            console.log(err);
            
            if (statusCode === 422)
                toast.error("به روزرسانی آیتم با خطا مواجه شد. (اطلاعات ورودی کافی نمی باشد.)", { duration: 3000 })
            else if (statusCode >= 500)
                toast.error("به روزرسانی آیتم با خطا مواجه شد. (خطای سمت سرور رخ داد.)", { duration: 3000 })
            else
                toast.error("به روزرسانی آیتم با خطا مواجه شد.", { duration: 3000 })
        })
    }
    
    const submitImage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const images = formData.getAll("images") as File[]

        if (images.length === 0) {
            toast.error("لطفا یک یا چند تصویر انتخاب کنید.")
            return
        }
        const uploadedData = new FormData()
        images.forEach((image, index) => {
            uploadedData.append(`file[${index}]`, image)
        })
        try {
            await api.post(`/menu-item/${menuItemId}/medias`, uploadedData)
            toast.success("تصویر با موفقیت آپلود شد.")
        } catch (err) {
            console.log(err)
            toast.error("تعریف محصول با خطا مواجه شد.", { duration: 3000 })
        }
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
        <main className='min-h-[620px] py-4 flex flex-col gap-4 items-center bg-neutral-300 dark:bg-slate-800'>
            <Link href='/coffee-shop/admin' className='absolute top-24 left-4 bg-coffee text-lg px-4 py-2 inline-block animate-pulse rounded-lg'>بازگشت به پنل ادمین </Link>
            <Title> تغییر آیتم منو</Title>
            <form onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                <label htmlFor="Name" className='font-semibold'>نام  : </label>
                <input id='Name' name='name' placeholder='مثلا اسپرسو' defaultValue={menuItem.name}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                />
                <label htmlFor="price" className='font-semibold'>قیمت (به تومان) : </label>
                <input id='price' name='price' placeholder='مثلا 63,000' type='number' defaultValue={menuItem.price}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                />
                <label htmlFor="description" className='font-semibold'> ترکیبات : </label>
                <input id='description' name='description' defaultValue={menuItem.description || "-"}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا ترکیب شیرسرد و اسپرسو' />
                <label htmlFor="slug" className='font-semibold'> اضافه کردن SLUG (به زبان انگلیسی) </label>
                <input id='slug' name='slug' defaultValue={menuItem.slug}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    placeholder='مثلا espresso' />
                <button className='bg-coffee hover:bg-coffee/90 duration-200 w-fit px-6 py-1.5 rounded-lg font-semibold text-slate-200'>به روزرسانی منو</button>
            </form>
            <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    const formdata = new FormData(e.currentTarget)
                    const image = formdata.get("selectImage") as File
                    console.log(image);
                    if (!image) return
                    const data = new FormData()
                    data.append('file',image)
                    console.log(data.get('file'));
                    const res = api.post(`/menu-item/${menuItemId}/medias`, data)
                    console.log(res);
                }}
            >
            </form>
            <form onSubmit={submitImage} className='flex flex-col gap-2 items-center'>
                    <label className="block mb-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">برای افزودن تصویر کلیک کنید</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="multiple_files" type="file" multiple accept="image/png, image/jpg, image/webp , image/jpeg" name='images' />
                    <button type='submit' className='bg-coffee hover:bg-coffee/90 duration-200 w-fit px-6 py-1.5 rounded-lg font-semibold text-slate-200 mt-4'>افزودن عکس</button>
                </form>
        </main>
    )
}

export default EditMenuPage

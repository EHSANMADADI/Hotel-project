import React, { FormEvent, useState } from 'react'
import api from '@/Configs/api'
import { toast } from 'react-hot-toast'
import Title from '../Title'

const AddItem = () => {
    const [id, setId] = useState('')

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")
        const description = formData.get("description")
        const price = formData.get("price")
        const slug = formData.get("slug")

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

        try {
            const response = await api.post('/menu-items', {
                name,
                description,
                price,
                slug,
                type: "restaurant",
                category_id: [1],
            })
            setId(response.data?.id)
            toast.success("با موفقیت به منو اضافه شد.")
        } catch (err:any) {
            const statusCode = err?.response?.status
            if (statusCode === 422)
                toast.error("تعریف محصول با خطا مواجه شد. (اطلاعات ورودی کافی نمی باشد.)", { duration: 3000 })
            else if (statusCode >= 500)
                toast.error("تعریف محصول با خطا مواجه شد. (خطای سمت سرور رخ داد.)", { duration: 3000 })
            else
                toast.error("تعریف محصول با خطا مواجه شد.", { duration: 3000 })
        }
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
            await api.post(`/menu-item/${id}/medias`, uploadedData)
            toast.success("تصویر با موفقیت آپلود شد.")
        } catch (err) {
            console.log(err)
            toast.error("تعریف محصول با خطا مواجه شد.", { duration: 3000 })
        }
    }

    return (
        <>
            <Title>اضافه کردن به منو</Title>
            <section className='flex flex-col items-center gap-8'>

                <form onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                    <label htmlFor="Name" className='font-semibold'>نام  : </label>
                    <input id='Name' name='name' placeholder='مثلا اسپرسو'
                        className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    />
                    <label htmlFor="price" className='font-semibold'>قیمت (به تومان) : </label>
                    <input id='price' name='price' placeholder='مثلا 63,000' type='number'
                        className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                    />
                    <label htmlFor="description" className='font-semibold'> ترکیبات : </label>
                    <input id='description' name='description'
                        className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                        placeholder='مثلا ترکیب شیرسرد و اسپرسو' />
                    <label htmlFor="slug" className='font-semibold'> اضافه کردن SLUG (به زبان انگلیسی) </label>
                    <input id='slug' name='slug'
                        className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[300px] md:min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2'
                        placeholder='مثلا espresso' />
                    <button className='bg-coffee hover:bg-coffee/90 duration-200 w-fit px-6 py-1.5 rounded-lg font-semibold text-slate-200'>اضافه کردن به منو</button>
                </form>
                <form onSubmit={submitImage} className='flex flex-col gap-2 items-center'>
                    <label className="block mb-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">برای افزودن تصویر کلیک کنید</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="multiple_files" type="file" multiple accept="image/png, image/jpg, image/webp , image/jpeg" name='images' />
                    <button type='submit' className='bg-coffee hover:bg-coffee/90 duration-200 w-fit px-6 py-1.5 rounded-lg font-semibold text-slate-200 mt-4'>افزودن عکس</button>
                </form>
            </section>
        </>
    )
}

export default AddItem
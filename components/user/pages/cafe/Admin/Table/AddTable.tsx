import React, { FormEvent, useRef } from 'react'
import Title from '../Title'

const AddTable = () => {
    const tableNumberRef = useRef<HTMLInputElement>(null)
    const tableCapacityRef = useRef<HTMLInputElement>(null)
    const tableTypeRef = useRef<HTMLSelectElement>(null)
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
    } // Send Data To API And Validation
    return (
        <>
            <Title>تعریف میز جدید</Title>
            <form action="" onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                <label htmlFor="Capacity" className='font-semibold'>ظرفیت میز : </label>
                <input id='Capacity' placeholder='مثلا 2' ref={tableCapacityRef}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                    />

                <label htmlFor="Type" className='font-semibold'>نوع میز : </label>
                <select name="Type" id="Type" ref={tableTypeRef}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                    >
                    <option value="family">خانوادگی</option>
                    <option value="couple">عاشقانه</option>
                </select>

                <label htmlFor="TableNumber" className='font-semibold'>شماره میز : </label>
                <input id='TableNumber' ref={tableNumberRef}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                    placeholder='مثلا 4' />
                <button className='bg-coffee hover:bg-coffee/90 duration-200 font-semibold px-6 py-1.5 rounded-lg text-slate-200'>ثبت میز</button>
            </form>
        </>
    )
}

export default AddTable
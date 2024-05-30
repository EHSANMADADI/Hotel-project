import React, { FormEvent } from 'react'
import Title from '../Title'

const AddItem = () => {
    const submitHandler = (e: FormEvent) => { e.preventDefault() }
    const [p, setp] = React.useState(90)
    return (
        <>
            <Title>اضافه کردن به منو</Title>
            <form action="" onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
                <label htmlFor="Name" className='font-semibold'>نام  : </label>
                <input id='Name' placeholder='مثلا اسپرسو' ref={null}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                />
                <label htmlFor="price" className='font-semibold'>قیمت (به تومان) : </label>
                <input id='price' placeholder='مثلا 63,000' value={p.toLocaleString()} type='number'
                    onChange={(e) => { setp(+e.target.value) }} ref={null}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                />
                <label htmlFor="Type" className='font-semibold'>نوع میز : </label>
                {/* <select name="Type" id="Type" ref={null}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                >
                    <option value="family">خانوادگی</option>
                    <option value="couple"></option>
                </select> */}

                <label htmlFor="description" className='font-semibold'> ترکیبات : </label>
                <input id='description' ref={null}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                    placeholder='مثلا ترکیب شیرسرد و اسپرسو' />
                <label htmlFor="description" className='font-semibold'> اضافه کردن SLUG (به زبان انگلیسی) </label>
                <input id='description' ref={null}
                    className='w-1/4 bg-slate-50 dark:bg-zinc-900 ring-1 ring-coffee min-w-[200px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2' 
                    placeholder='مثلا espresso' />
                <button className='bg-coffee hover:bg-coffee/90 duration-200 w-fit px-6 py-1.5 rounded-lg font-semibold text-slate-200'>اضافه کردن به منو</button>
            </form>
        </>
    )
}

export default AddItem
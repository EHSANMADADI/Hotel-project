import React from 'react'
import Link from 'next/link';
import Navbar from './Navbar';
const Header = () => {

    return (
        <header id='header' className="bg-[url('/images/cafe/b3.webp')] bg-neutral-800 bg-blend-overlay min-h-screen bg-cover bg-center">
            <Navbar />
            <section>
                <h1 className="text-8xl text-white font-black text-center leading-[1.5] py-12 sm:py-8 w-full md:text-5xl
             md:leading-[1.3]">به کافه <span className="text-transparent border-8 px-6"
                        style={{ WebkitTextStroke: "2px #fff", }}>ميلاد</span> خوش آمدید </h1>
                <h2 className='text-white text-5xl font-mono  font-bold p-16 lg:p-12 sm:px-8 sm:py-4 sm:text-3xl'>لذت یک قهوه به یادماندنی را در کنار ما تجربه کنید</h2>
                <div className='flex gap-4 justify-center py-6'>
                    <Link href="#Menu" className='px-8 py-4 text-white border-2 border-coffee font-semibold duration-200  bg-coffee rounded-md hover:bg-transparent' >مشاهده منو</Link>
                    <Link href="/coffeeshop/reservation" className='px-8 py-4 text-white border-2 border-coffee font-semibold duration-200 hover:bg-coffee/85  rounded-md' >رزرو میز</Link>
                </div>
            </section>
        </header>
    )
}

export default Header





import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaUserEdit } from "react-icons/fa";

const Header = () => {
    return (
        <header id='header' className="bg-[url('/images/cafe/b3.webp')] bg-neutral-800 bg-blend-overlay min-h-screen bg-cover bg-center">
            <nav className='flex items-center justify-between px-12 sm:px-4'>
                <Link href='#'>
                    <FaUserEdit color='white' size={32} className='hover:fill-coffee/90 duration-200 hover:scale-110' />
                </Link>
                <ul className='flex gap-2 justify-center items-center py-3'>
                    <CustomLink text='منو' />
                    <CustomLink text='درباره ما' />
                    <CustomLink text='درباره ما' />
                    <CustomLink text='گالری' />
                    <CustomLink text='رزرو میز' />
                </ul>
                <Link href='#'>
                    <Image src={'/images/cafe/Clogo.webp'} className='border-dotted
                     border-amber-600 border-2' alt='logo' width={48} height={44} />
                </Link>
            </nav>
            <section>
                <h1 className="text-8xl text-white font-black text-center leading-[1.5] py-12 sm:py-8 w-full md:text-5xl
             md:leading-[1.3]">به کافه <span className="text-transparent border-8 px-6"
                        style={{ WebkitTextStroke: "2px #fff", }}>ميلاد</span> خوش آمدید </h1>
                <h2 className='text-white text-5xl font-mono  font-bold p-16 lg:p-12 sm:px-8 sm:py-4 sm:text-3xl'>لذت یک قهوه به یادماندنی را در کنار ما تجربه کنید</h2>
                <div className='flex gap-4 justify-center py-6'>

                <Link href="#" className='px-8 py-4 text-white border-2 border-coffee font-semibold duration-200  bg-coffee rounded-md hover:bg-transparent' >مشاهده منو</Link>
                <Link href="#" className='px-8 py-4 text-white border-2 border-coffee font-semibold duration-200 hover:bg-coffee/85  rounded-md' >رزرو میز</Link>
                </div>
            </section>
        </header>
    )
}

export default Header

const CustomLink = ({ text }: { text: string }) => {
    return <li className='text-white text-xl hover:border-b-2
     hover:border-amber-800 p-1 hover:text-neutral-400 border-transparent border-b-2
      duration-200 font-semibold'> <Link href="#">{text}</Link></li>
}



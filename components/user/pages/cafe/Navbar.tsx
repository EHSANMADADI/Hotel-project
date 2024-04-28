'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState , useEffect } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  useEffect(()=>{
    window.onresize=()=>{
      if(window.outerWidth > 760){
        setMenuIsOpen(false)
      }
      return()=>{
        window.onresize = ()=>{} // 
      }
    }
  },[])
  return (
    <nav className='flex bg-coffee/40 shadow-sm shadow-coffee/80 w-full items-center justify-between md:flex-col-reverse py-4 px-12 sm:px-4'>
      {/* <Link href='#' className=''>
        <FaUserEdit color='white' size={32} className='hover:fill-coffee/90 duration-200 hover:scale-110' />
      </Link> */}

      <div className='md:block hidden'>
        <GiHamburgerMenu className={`${menuIsOpen ? "hidden" : "block"} cursor-pointer fixed top-6 right-8`} onClick={()=>{setMenuIsOpen(true)}} color='white' size={32} />
        <AiOutlineClose className={`${menuIsOpen ? "block" : " hidden"} cursor-pointer fixed top-6 right-8 z-10`} onClick={()=>{setMenuIsOpen(false)}} color='white' size={32} />
      </div>
      <ul onClick={()=>setMenuIsOpen(false)} className={`flex ${menuIsOpen ?"block bg-neutral-700/95 w-full gap-2 fixed top-0" :"md:hidden"} md:flex-col justify-center gap-10 items-center py-3`}>
        <CustomLink href='#Menu' text='منو' />
        <CustomLink href='/coffee-shop/reservation' text='رزرو میز' />
        <CustomLink href='#Gallery' text='گالری' />
        <CustomLink href='#stats' text='درباره ما' />
        <CustomLink href='/' text='صفحه اصلی هتل' />
      </ul>
      <Link href='#' className='md:self-end' >
        <Image src={'/images/cafe/Clogo.webp'} className='border-dotted
                     border-amber-600 border-2' alt='logo' width={48} height={44} />
      </Link>
    </nav>
  )
}

export default Navbar;

const CustomLink = ({ text, href }: { text: string, href: string }) => {
  return <li className='text-white text-xl hover:border-b-2
   hover:border-amber-800 p-1 hover:text-neutral-400 border-transparent border-b-2
    duration-200 font-semibold'> <Link href={href}>{text}</Link></li>
}
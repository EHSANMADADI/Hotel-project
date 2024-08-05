'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { useCart } from '@/Context/CartContextProvider'
import CustomLink from './Link';
import MobileMenu from './MobileMenu';
import { Links } from './Links';
import { FaUserAlt, FaUserEdit } from 'react-icons/fa';
import api from '@/Configs/api';

const Navbar = () => {
  const cart = useCart()
  const [role, setRole] = useState("")

  useEffect(() => {
    api.get('/me').then((data) => setRole(data?.data?.user?.roles?.name || '')
    ).catch(() => setRole("")
    )
  }, [])
  const amountOfCart = cart.selectedItems.reduce((acc, item) => { return acc + item.quantity }, 0)
  return (
    <nav className='flex from-coffee to-coffee/95 bg-gradient-to-t sticky top-0 shadow-sm shadow-coffee/80 w-full items-center justify-between  py-3 px-12 sm:px-4'>
      <ul className={`flex 
          md:hidden justify-center lg:gap-6 gap-10 items-center py-3`}>
        {Links.map(link => <CustomLink key={link.id} href={link.href}>{link.title}</CustomLink>)}
      </ul>
      <MobileMenu />
      <div className='flex items-center gap-6 -z-10'>

        {!!role && (
          role === 'client' ?
            <Link href='/coffee-shop/user'>
              <FaUserAlt cursor='pointer' className='hover:fill-slate-300 duration-100' color='#eee' size={32} />
            </Link>
            :
            <Link href='/coffee-shop/admin'>
              <FaUserEdit cursor='pointer' className='hover:fill-slate-300 duration-100' color='#eee' size={32} />
            </Link>)
        }
        <Link href='/coffee-shop/cart' className='relative'>
          <span className='absolute -top-3 -right-2 px-1 bg-amber-400 rounded-full
           text-neutral-800 font-semibold text-lg'>{amountOfCart}</span>
          <BsCart2 color='#eee' className='hover:fill-slate-300 duration-100' size={32} />
        </Link>
        <Link href='#' className='md:self-end' >
          <Image src={'/images/cafe/Clogo.webp'} className='border-dotted
                     border-amber-600 border-2' alt='logo' width={48} height={44} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;


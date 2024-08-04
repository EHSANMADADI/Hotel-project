import React, { useState } from 'react'
import { Links } from './Links'
import CustomLink from './Link'

const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <div className='md:block hidden' onClick={() => setMenuIsOpen(prev => !prev)}>
        <div className='flex flex-col gap-[6.5px]'>
      <span className={`block bg-slate-100 w-8 h-1 rounded-md duration-200 origin-left ${menuIsOpen && 'rotate-45'} `}></span>
      <span className={`block bg-slate-100 w-8 h-1 rounded-md duration-200  ${menuIsOpen && 'opacity-0'} `}></span>
      <span className={`block bg-slate-100 w-8 h-1 rounded-md duration-200 origin-left ${menuIsOpen &&  '-rotate-45'} `}></span>
        </div>
      </div>      
        <ul className={`md:flex hidden  flex-col gap-4 w-2/5 xs:w-2/4 text-slate-100 font-bold items-center top-[72px] right-0 absolute bg-coffee/95 duration-200 h-[calc(100vh-72px)] ${!menuIsOpen&&' translate-x-full'} `}>
          {Links.map(item => <CustomLink href={item.href} key={item.id}>{item.title}</CustomLink> )}
        </ul>
    </>
  )
}

export default MobileMenu

'use client'
import React, { useEffect } from 'react'
import Image from "next/image";
import Modal from '@/components/shared/modal/index';
import { useState } from 'react';
import Selected from '../Product-selected';
import api from '@/Configs/api';
import { MenuItems } from '../../cafe/Menu/types/MenuItems';


export default function Product(props: { type: string; searchItem: any; }) {
     const [menuItems, setMenuItems] = useState([] as MenuItems[]) // Use this State to Show Items
     useEffect(() => {
          const fetchMenuItems = async () => {
               try {
                    const { data } = await api.get<MenuItems[]>('/menu-items')
                    setMenuItems(data.filter((item) => item.type === 'restaurant'))
               }
               catch (error) {
                    console.log(error);
               }
          }
          fetchMenuItems()
     }, [])
     const [open, setOpen] = useState(false);
     const [index, setIndex] = useState(-1)

     // /search-user
     if (props.searchItem) {

          return (
               <div className='grid grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-3 overflow-hidden p-4 md:p-4'>
                    {
                         menuItems.map((p, index) => {
                              if (p.name.toLocaleLowerCase().includes(props.searchItem.toLocaleLowerCase()))
                                   return <div key={p.id} className="w-full h-[30vw] relative overflow-hidden card p-2">
                                        <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                             <h1 className="text-4xl md:text-base font-bold card-overlay-heading">{p.name}</h1>
                                             <p className="text-xl font-bold m-5 md:text-sm md:m-2 border-b-2 card-overlay-paragraph">{p.price + 'T'} </p>
                                             <button className="border border-white rounded-lg bg-transparent md:p-2  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => {
                                                  setIndex(index)
                                                  setOpen(true)
                                             }
                                             }>سفارش</button>
                                        </div>
                                        <Image className='w-full h-full rounded-md dark:opacity-40 object-cover' src={`http://127.0.0.1:8000/menu-item/${p.media[p.media.length - 1]?.url}` || ''} alt={p.name} fill />
                                   </div>
                         }
                         )

                    }
                    {open &&
                         <Modal Open={open} onClose={() => setOpen(false)} >
                              <Selected imageSrc={`http://127.0.0.1:8000/menu-item/${menuItems[index].media[menuItems[index].media.length - 1]?.url}` || ''} description={menuItems[index].description} name={menuItems[index].name} price={+menuItems[index].price} id={menuItems[index].id} onClose={() => setOpen(false)} />
                         </Modal>
                    }
               </div>
          )

     }

     return (
          <div className='grid grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-3 overflow-hidden p-4 md:p-4'>
               {
                    menuItems.map((p, index) => (
                         <div key={p.id} className="w-full h-[30vw] relative overflow-hidden card p-2">
                              <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                   <h1 className="text-4xl md:text-base font-bold card-overlay-heading">{p.name}</h1>
                                   <p className="text-xl font-bold m-5 md:text-sm md:m-2 border-b-2 card-overlay-paragraph">{p.price + 'T'} </p>
                                   <button className="border border-white rounded-lg bg-transparent md:p-2  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => {
                                        setIndex(index)
                                        setOpen(true)
                                   }
                                   }>سفارش</button>
                              </div>
                              <Image className='w-full h-full rounded-md dark:opacity-40 object-cover' src={`http://127.0.0.1:8000/menu-item/${p.media[p.media.length - 1]?.url}` || ''} alt={p.name} fill />
                         </div>
                    ))
               }
               {open &&
                    <Modal Open={open} onClose={() => setOpen(false)} >
                         <Selected imageSrc={`http://127.0.0.1:8000/menu-item/${menuItems[index].media[menuItems[index].media.length - 1]?.url}` || ''} name={menuItems[index].name} description={menuItems[index].description} price={+menuItems[index].price} id={menuItems[index].id} onClose={() => setOpen(false)} />
                    </Modal>
               }
          </div>
     )
}


'use client'
import React, { useEffect, useState } from 'react'
import CardItem from './Card-item'
import api from '@/Configs/api'
import { MenuItems } from './types/MenuItems'
import useRole from '@/store/useRole'

const Menu = () => {
    const [menuItems, setMenuItems] = useState([] as MenuItems[])
    const [isError, setIsError] = useState(false)
    const { role } = useRole()
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const { data } = await api.get<MenuItems[]>('/menu-items')
                const _menuItems = data.filter((item) => item.type === 'coffeeShop')
                setMenuItems(_menuItems)
            } catch {
                setIsError(true)
            }
        }
        if (role !== 'UnAuthenticated')
            fetchItems()
    }, [role])
    return (
        <section id='Menu' className='px-12 md:px-8 xl:px-16'>
            <h2 className='text-white text-3xl font-bold text-center py-4'>منوی کافه</h2>
            
            {role === 'UnAuthenticated' ? <p className='text-center text-slate-200 text-xl font-bold'>برای مشاهده منو لازم است وارد حساب کاربری خود شوید</p> :
                (isError? <p className='text-center text-slate-200 text-xl font-bold'>خطایی در پشت صحنه رخ داد.</p> : <div className='grid grid-cols-3 xxl:grid-cols-2 xl:grid-cols-1 lg:gap-x-8 gap-x-16 gap-y-8 px-6 lg:px-4 md:px-3'>
                    {menuItems.map((item) => {
                        return <CardItem item={item} key={item.id} />
                    })}
                </div>
                )
            }
        </section>
    )
}

export default Menu

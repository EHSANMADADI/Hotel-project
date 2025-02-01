import React from 'react'

import { useCart, useSetCart } from '@/Context/CartContextProvider'
import { MenuItems } from './types/MenuItems'

interface MenuItemProps {
    item: MenuItems
}

const CardItem = ({ item: { description, id, media: image, name, price } }: MenuItemProps) => {
    const cart = useCart()
    const dispatch = useSetCart()
    const selectedItem = cart.selectedItems.find(item => item.id === id)
    return (<article className='flex xs:flex-col rounded-lg bg-stone-300/80 dark:bg-stone-950/80 justify-between px-4 lg:px-8 md:px-6 py-2 items-center'>
        <div className='flex gap-4 items-center'>
            <img className='rounded-full border-2 border-dashed border-coffee bg-coffee/25' src={`https://87.107.54.231/menu-item/${image[image.length -1]?.url}` || ''} alt='' width={72} height={72} />
            <div>
                <p className='dark:text-white text-slate-900 font-mono font-semibold'>{name}</p>
                <p className='dark:text-slate-400 text-slate-700'>{description}</p>
            </div>
        </div>
        <div className='flex items-center lg:gap-8 gap-6'>
            <div className='flex gap-2 items-center'>
                <button onClick={() => (dispatch({ type: "ADD", payload: { id, price, name, image: (image[image.length - 1]?.url || '') } }))} className='bg-green-500 hover:bg-green-600 flex justify-center items-center font-semibold duration-200 w-8 h-8 rounded-full'>+</button>
                <p className='dark:text-white text-slate-900 font-semibold'>{selectedItem?.quantity || 0}</p>
                <button onClick={() => (dispatch({ type: "REMOVE", payload: { id, price, name, image: (image[0]?.url || '') } }))} className='bg-red-500 hover:bg-red-600 flex justify-center items-center font-semibold duration-200 w-8 h-8 rounded-full'> - </button>
            </div>
            <p className='dark:text-white text-slate-900 font-semibold border-r-2 border-coffee border-dashed p-3'>
                {price.toLocaleString()}
            </p>
        </div>
    </article>
    )
}

export default CardItem

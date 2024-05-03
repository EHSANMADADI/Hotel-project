import React from 'react'
import Image from 'next/image'
import { useCart , useSetCart } from '@/Context/CartContextProvider'

interface MenuItem {
    item: {
        id: number,
        name: string
        description: string
        price: number
        image: string
    }
}

const CardItem = ({ item: { description, image, name, price, id } }: MenuItem) => {
    const cart = useCart()
    const dispatch = useSetCart()
    const selectedItem = cart.selectedItems.find(item => item.id === id)

    return (<article className='flex xs:flex-col rounded-lg bg-stone-950/80 justify-between px-4 lg:px-8 md:px-6 py-2 items-center'>
        <div className='flex gap-4 items-center'>

            <Image className='rounded-full border-2 border-dashed border-coffee bg-coffee/25' src={image} alt='He' width={72} height={72} />
            <div>
                <p className='text-white font-mono'>{name}</p>
                <p className='text-slate-400'>{description}</p>
            </div>
        </div>
        <div className='flex items-center lg:gap-8 gap-6'>
            <div className='flex gap-2 items-center'>
                <button onClick={() => (dispatch({ type: "ADD", payload: { id, price, name } }))} className='bg-green-500 hover:bg-green-600 flex justify-center items-center duration-200 w-8 h-8 rounded-full'>+</button>
                <p className='text-white'>{selectedItem?.quantity || 0}</p>
                <button onClick={() => (dispatch({ type: "REMOVE", payload: { id, price, name } }))} className='bg-red-500 hover:bg-red-600 flex justify-center items-center duration-200 w-8 h-8 rounded-full'> - </button>
            </div>
            <p className='text-white border-r-2 border-coffee border-dashed p-3'>
                {price.toLocaleString()}
            </p>
        </div>
    </article>
    )
}

export default CardItem

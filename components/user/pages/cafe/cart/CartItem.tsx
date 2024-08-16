import React from 'react'
import { useSetCart } from '@/Context/CartContextProvider'
import Image from 'next/image'
interface Props {
    details: {
        name: string
        quantity: number
        price: number
        id: number
        image: string
    }
}

const CartItem = ({ details: { name, price, quantity, id, image } }: Props) => {
    const dispatch = useSetCart()
    return (
        <article className='bg-[#e79a3c] flex justify-between xs:flex-col items-center shadow-lg text-neutral-900 max-w-3xl w-5/6 rounded-xl p-6'>
            
            <Image src={`http://127.0.0.1:8000/menu-item/${image}` || ''} alt={`${name} Photo`} width={80} height={80} className='rounded-full' />
            <span className='font-bold text-center text-lg '>{name} </span>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center justify-center mt-2'>
                    <button onClick={() => (dispatch({ type: "ADD", payload: { id, price, name, image } }))} className='bg-green-500 font-semibold   hover:bg-green-600 flex justify-center items-center duration-200 w-8 h-8 rounded-full'>+</button>
                    <p className='font-bold'>{quantity || 0}</p>
                    <button onClick={() => (dispatch({ type: "REMOVE", payload: { id, price, name, image } }))} className='bg-red-500 font-semibold  hover:bg-red-600 flex justify-center items-center duration-200 w-8 h-8 rounded-full'> - </button>
                </div>
                <div className='flex justify-around flex-wrap gap-x-8 gap-y-2'>
                    <p className='font-bold text-lg text-center'> قیمت: {(price * quantity).toLocaleString()} تومان </p>
                </div>
            </div>
        </article>
    )
}

export default CartItem
'use client'

import Link from 'next/link'
import CartItem from './CartItem'
import { useCart } from '@/Context/CartContextProvider'

const Cart = () => {
  const cart = useCart()
  return (
    <main className='bg-slate-300/90 dark:bg-[#161a21] min-h-screen py-24'>
      {
        !cart.selectedItems.length ? <EmptyCart />
          :
          <section className='flex flex-col gap-8 items-center '>
            {cart.selectedItems.map(item => <CartItem key={item.id} details={item} />)}
            <Link href='#' title='اتصال به درگاه پرداخت' className='bg-orange-500 text-neutral-900 w-4/5 max-w-lg rounded-xl sm:px-6 px-12 py-4 text-center font-bold tracking-wide'>
              {/* جمع فاکتور  : */}
              پرداخت
              {" "} {cart.total.toLocaleString()} {""}
              تومان
            </Link>
          </section>
      }
    </main>
  )
}

export default Cart



const EmptyCart = () => {
  return <div className='flex flex-col items-center gap-8 '>
    <p className='text-slate-700 dark:text-neutral-200 font-bold text-4xl '>سبد خرید شما خالی است</p>
    <Link href='/coffee-shop#Menu' className='bg-orange-500 px-6 py-3 rounded-xl animate-bounce shadow-lg hover:bg-orange-600 duration-300'>مشاهده منو </Link>
  </div>
}
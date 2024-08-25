'use client'
import Link from 'next/link'
import CartItem from './CartItem'
import { useCart, useSetCart } from '@/Context/CartContextProvider'
import api from '@/Configs/api'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Tabledata, TableHeader } from '../user/Utils'
import { useRouter } from 'next/navigation'
import { CafeReserves } from '../Admin/hooks/useReserves'
import useRole from '@/store/useRole'

const Cart = () => {
  const cart = useCart()
  const { push } = useRouter()
  const { role } = useRole()
  const dispatch = useSetCart()
  const [reserves, setReserves] = useState([] as CafeReserves[])
  const [selectedReserve, setSelectedReserve] = useState(-1)
  const [tableNumbers, setTableNumbers] = useState([] as string[])
  useEffect(() => {
    reserves.map(reserve => api.get(`/coffee-shop/tables/${reserve.coffee_shop_table_id}`)
      .then(data => setTableNumbers((prev) => [...prev, data.data.number_of_table]))
    )
  }, [reserves])
  return (
    <main className='bg-slate-300/90 dark:bg-[#161a21] min-h-screen py-24'>
      {
        !cart.selectedItems.length ? <EmptyCart />
          :
          <section className='flex flex-col gap-8 items-center '>
            {cart.selectedItems.map(item =>
              <CartItem key={item.id} details={item} />
            )}
            {!(!!reserves.length) &&
              <button className='bg-orange-500 hover:bg-orange-600 duration-200
              hover:-translate-y-1 text-neutral-900 w-4/5 max-w-lg rounded-xl 
             sm:px-6 px-12 py-4 text-center font-bold tracking-wide'
                onClick={() => {
                  if (role === 'UnAuthenticated') {
                    toast.error('ابتدا وارد حساب کاربری خود شوید.')
                    return push('/auth')
                  }
                  if (role === 'Admin') {
                    toast.error("ادمین نمیتواند سفارشی را ثبت کند.")
                    return push('/coffee-shop')
                  }
                  api.get<{ coffeeShopReserves: CafeReserves[] }>('/my-reserves').then((data) => {
                    if (!data.data.coffeeShopReserves.length)
                      push('/coffee-shop/reservation')
                    setReserves(data.data.coffeeShopReserves)
                  }).catch(() => toast.error("دریافت رزروها با خطا مواجه شد."))
                }}
              >
                انتخاب رزرو
              </button>
            }
            {
              !!reserves.length &&
              <div className='mx-auto bg-gray-200 dark:bg-gray-700 w-5/6 max-w-3xl sm:overflow-x-scroll scrollbar'>

                <table className='text-center w-full '>
                  <thead>
                    <tr>
                      <TableHeader>شماره رزرو</TableHeader>
                      <TableHeader>ساعت ورود</TableHeader>
                      <TableHeader>ساعت خروج</TableHeader>
                      <TableHeader>شماره میز</TableHeader>
                      <TableHeader>تاریخ</TableHeader>
                      <TableHeader>تعداد مهمانان</TableHeader>
                      <TableHeader>وضعیت</TableHeader>
                      <TableHeader>انتخاب</TableHeader>
                    </tr>
                  </thead>
                  <tbody>

                    {reserves.map((reserve, index) => <tr key={reserve.id}>
                      <Tabledata>{reserve.id}</Tabledata>
                      <Tabledata>{reserve.check_in_hour.slice(0, 5)}</Tabledata>
                      <Tabledata>{reserve.check_out_hour.slice(0, 5)}</Tabledata>
                      <Tabledata>{tableNumbers[index]}</Tabledata>
                      <Tabledata>{reserve.date}</Tabledata>
                      <Tabledata>{reserve.number_of_guest}</Tabledata>
                      <Tabledata>{reserve.status.toLocaleLowerCase() === 'full' ? 'پرداخت شده' : 'تسویه نشده'}</Tabledata>
                      <Tabledata><button
                        onClick={() => setSelectedReserve(reserve.id)}
                        className='px-2 py-1 bg-green-600 text-white rounded-md my-1'>انتخاب</button></Tabledata>
                    </tr>)}
                  </tbody>
                </table>
              </div>
            }
            {
              !!(selectedReserve !== -1) &&
              <button onClick={() => {
                const menuItemQuantities = [] as number[]
                const menuItemIds = [] as number[]
                cart.selectedItems.map(item => {
                  menuItemQuantities.push(item.quantity)
                  menuItemIds.push(item.id)
                })
                api.post('/coffee-shop/1/orders', {
                  reserve_id: selectedReserve,
                  menu_item_quantities: menuItemQuantities,
                  date: "2222/02/02",
                  menu_item_id: menuItemIds
                }).then(() => {
                  dispatch({ type: "CHECKOUT" })
                  toast.success('آیتم ها با موفقیت رزرو شدند. منتظر شما هستیم🌹'); push('/coffee-shop')
                })
                  .catch(() => toast.error('خطایی در پشت صحنه رخ داد. دقایقی دیگر دوباره تلاش کنید.'))
              }}
                title='اتصال به درگاه پرداخت' className='bg-orange-500 hover:bg-orange-600 duration-200 hover:-translate-y-1 text-neutral-900 w-4/5 max-w-lg rounded-xl sm:px-6 px-12 py-4 text-center font-bold tracking-wide'>
                پرداخت
                {" "} {cart.total.toLocaleString()} {""}
                تومان
              </button>
            }
          </section>
      }
    </main >
  )
}

export default Cart


const EmptyCart = () => {
  return <div className='flex flex-col items-center gap-8 '>
    <p className='text-slate-700 dark:text-neutral-200 font-bold text-4xl '>سبد خرید شما خالی است</p>
    <Link href='/coffee-shop#Menu' className='bg-orange-500 px-6 py-3 rounded-xl animate-bounce shadow-lg hover:bg-orange-600 duration-300'>مشاهده منو </Link>
  </div>
}
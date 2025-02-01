import React, { useEffect, useState } from 'react'
import { useCart, useSetCart } from '@/Context/FoodContextProvider'
import Link from 'next/link';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { PiSmileyStickerThin } from "react-icons/pi";
import bgFood from '@/public/images/BgFood.jpg';

import { FaMinus } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { CafeReserves } from '../resturant/Admin/hooks/useReserves';
import toast from 'react-hot-toast';
import api from '@/Configs/api';
import useRole from '@/store/useRole';
import { useRouter } from 'next/navigation';
import { Tabledata, TableHeader } from '../cafe/user/Utils';
export default function Index() {
     const cart = useCart()
     const dispatch = useSetCart()
     const { role } = useRole()
     const [reserves, setReserves] = useState([] as CafeReserves[])
     const [selectedReserve, setSelectedReserve] = useState(-1)
     const { push } = useRouter()
     console.log(cart);
     const [selectedItems, setSelectItems] = useState(cart.selectedItems)
     const handeldel = (id: number, quantity: number) => {
          dispatch({ type: "REMOVE", payload: { id, quantity } })
     }
     const handelAdd = (id:number , price: number, name: string, quantity: number = 1) => {
          dispatch({ type: "ADD", payload: { id, price, name, quantity}})
     }
     return (
          <div className='flex justify-center flex-col gap-12 items-center h-screen overflow-auto'>
               <div className="p-5 flex self-end bg-transparent">
                    <Link className=' text-blue-500 text-6xl md:text-3xl hover:text-blue-800' href='/resturant'> <IoArrowBackCircleSharp /> </Link>
               </div>
               {!selectedItems?.length && (
                    <div className="w-full h-screen flex items-center justify-center text-gray-300">

                         <h1 className="font-extrabold text-5xl text-center ">سبد خرید خالی است</h1>
                         <span className="text-6xl text-pink-300 font-extrabold"><PiSmileyStickerThin /></span>
                    </div>
               )}
               {selectedItems?.length && (
                    <div className="w-1/2 mx-auto">
                         {
                              selectedItems.map((item, index) => (
                                   <div key={index} className="hover:bg-gray-300 hover:scale-110 duration-300 p-5 border my-3 flex flex-row items-center justify-between mx-auto rounded-md">
                                        <div className='border border-blue-400 rounded-full'><img className='rounded-full' src={bgFood.src} width={100} height={100} alt="avatar_food" /></div>
                                        <div>
                                             <h3 className="text-3xl text-gray-400 p-2">{item.name}</h3>
                                        </div>
                                        <div>
                                             <h3 className="text-3xl text-gray-400 p-2">تعداد:{item.quantity}</h3>
                                        </div>
                                        <div>
                                             <h3 className="text-3xl text-gray-400 p-2"> قیمت:{item.price * item.quantity}تومان</h3>
                                        </div>
                                        <div className='text-4xl  rounded-full hover:bg-blue-300 duration-200 cursor-pointer border border-dashed border-blue-700' onClick={() => handelAdd(item.id,item.price,item.name)}>
                                             <IoAdd />
                                        </div>
                                        <div className='text-3xl p-1 hover:text-white hover:bg-red-700 rounded-full duration-200 border border-dashed border-red-500 cursor-pointer' onClick={() => handeldel(item.id, item.quantity)}>
                                             <FaMinus />
                                        </div>

                                   </div>
                              ))
                         }
                         <div className='flex justify-center '>
                              {/* <Link className='p-5 m-1 font-extrabold text-3xl text-white duration-200 hover:bg-blue-400 bg-blue-600 rounded-md hover:scale-75' href='/Payment'>ادامه خرید</Link> */}
                              {!(!!reserves.length) &&
                                   <button className='p-5 m-1 font-extrabold text-3xl text-white duration-200 hover:bg-blue-400 bg-blue-600 rounded-md hover:scale-75'
                                        onClick={() => {
                                             if (role === 'UnAuthenticated') {
                                                  toast.error('ابتدا وارد حساب کاربری خود شوید.')
                                                  return push('/auth')
                                             }
                                             if (role === 'Admin') {
                                                  toast.error("ادمین نمیتواند سفارشی را ثبت کند.")
                                                  return push('/resturant')
                                             }
                                             api.get('/my-reserves').then((data) => {
                                                  if (!data.data.restaurantReserves.length)
                                                       push('/resturant/rezervTable')
                                                  setReserves(data.data.restaurantReserves)
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
                                                       {/* <Tabledata>{tableNumbers[index]}</Tabledata> */}
                                                       <Tabledata>{34}</Tabledata>
                                                       <Tabledata>{reserve.date}</Tabledata>
                                                       <Tabledata>{reserve.number_of_guest}</Tabledata>
                                                       <Tabledata>{reserve.status.toLocaleLowerCase() === 'full' ? 'پرداخت شده' : 'تسویه نشده'}</Tabledata>
                                                       <Tabledata><button
                                                            onClick={() => {
                                                                 console.log(reserve.id);
                                                                 setSelectedReserve(reserve.id)
                                                            }}
                                                            className='px-2 py-1 bg-green-600 text-white rounded-md my-1'>انتخاب</button></Tabledata>
                                                  </tr>)}
                                             </tbody>
                                        </table>
                                   </div>
                              }
                         </div>
                    </div>
               )}
               {
                    !!(selectedReserve !== -1) &&
                    <button onClick={() => {
                         const menuItemQuantities = [] as number[]
                         const menuItemIds = [] as number[]
                         cart.selectedItems.map(item => {
                              menuItemQuantities.push(item.quantity)
                              menuItemIds.push(item.id)
                         })
                         api.post('/restaurant/1/orders', {
                              reserve_id: selectedReserve,
                              menu_item_quantities: menuItemQuantities,
                              date: "2222/02/02",
                              menu_item_id: menuItemIds
                         }).then((data) => {
                              console.log(data.data);

                              toast.success('آیتم ها با موفقیت رزرو شدند. منتظر شما هستیم🌹'); push('/resturant')
                         })
                              .catch(() => toast.error('خطایی در پشت صحنه رخ داد. دقایقی دیگر دوباره تلاش کنید.'))
                    }} title='اتصال به درگاه پرداخت'
                         className='p-5 m-1 font-extrabold text-3xl text-white duration-200 hover:bg-blue-400 bg-blue-600 rounded-md hover:scale-75'
                    >
                         پرداخت
                         {" "} {cart.total.toLocaleString()} {""}
                         تومان
                    </button>
               }
          </div>
     )
}

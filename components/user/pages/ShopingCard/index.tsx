import React, { useState } from 'react'
import { useCart, useSetCart } from '@/Context/FoodContextProvider'
import Link from 'next/link';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { PiSmileyStickerThin } from "react-icons/pi";
import bgFood from '@/public/images/BgFood.jpg';
import Image from 'next/image';
import { FaMinus } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
export default function index() {
     const cart = useCart()
     const dispatch = useSetCart()
     const [selectedItems, setSelectItems] = useState(cart.selectedItems)
     const handeldel = (id: number,q:number) => {
          // console.log(id);
          // const newArray = cart.selectedItems.filter((item) => item.id !== id);
          // setSelectItems(newArray);
          dispatch({type: "REMOVE", payload: {id,q}})
     }
     const handelAdd=(id:number, price:number, name:string,q:number=1) => {
          dispatch({ type: "ADD", payload: {id,payload:{id,price,name,q}}})
     }
     return (
          <div>
               <div className="p-5 flex justify-end  bg-transparent">
                    <Link className=' text-blue-500 text-6xl md:text-3xl hover:text-blue-800' href='/resturant'> <IoArrowBackCircleSharp /> </Link>
               </div>
               {!selectedItems.length && (
                    <div className="w-full h-screen flex items-center justify-center text-gray-300">

                         <h1 className="font-extrabold text-5xl text-center ">سبد خرید خالی است</h1>
                         <span className="text-6xl text-pink-300 font-extrabold"><PiSmileyStickerThin /></span>
                    </div>
               )}
               {selectedItems.length && (
                    <div className="w-1/2 mx-auto h-screen">
                         {
                              selectedItems.map((item, index) => (
                                   <div key={index} className="hover:bg-gray-300 hover:scale-110 duration-300 p-5 border my-3 flex flex-row items-center justify-between mx-auto rounded-md">
                                        <div className='border border-blue-400 rounded-full'><Image className='rounded-full' src={bgFood} width={100} height={100} alt="avatar_food" /></div>
                                        <div>
                                             <h3 className="text-3xl text-gray-400 p-2">{item.name}</h3>
                                        </div>
                                        <div>
                                             <h3 className="text-3xl text-gray-400 p-2">تعداد:{item.quantity}</h3>
                                        </div>
                                        <div>
                                             <h3 className="text-3xl text-gray-400 p-2"> قیمت:{item.price * item.quantity}تومان</h3>
                                        </div>
                                        <div className='text-4xl  rounded-full hover:bg-blue-300 duration-200 cursor-pointer border border-dashed border-blue-700' onClick={() => handelAdd(item.id,item.name,item.price)}>
                                             <IoAdd />
                                        </div>
                                        <div className='text-3xl p-1 hover:text-white hover:bg-red-700 rounded-full duration-200 border border-dashed border-red-500 cursor-pointer' onClick={() => handeldel(item.id,item.quantity)}>
                                             <FaMinus />
                                        </div>

                                   </div>
                              ))
                         }
                         <div className='flex justify-center '>
                              <Link className='p-5 m-1 font-extrabold text-3xl text-white duration-200 hover:bg-blue-400 bg-blue-600 rounded-md hover:scale-75' href='/Payment'>ادامه خرید</Link>
                         </div>
                    </div>
               )}



          </div>
     )
}

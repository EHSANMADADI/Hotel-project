import React from 'react'
import Image from "next/image";
import img1 from '@/public/images/gallery-img-1.jpeg';
import img2 from '@/public/images/gallery-img-2.jpeg';
import img3 from '@/public/images/gallery-img-3.jpeg';
import img4 from '@/public/images/gallery-img-4.jpeg';
import img5 from '@/public/images/gallery-img-5.jpeg';
import img6 from '@/public/images/gallery-img-6.jpeg';
import img7 from '@/public/images/abgosht.jpeg';
import img8 from '@/public/images/ash.jpeg';
import img9 from '@/public/images/balmorq.jpeg';
import img10 from '@/public/images/dolme.jpeg';
import img11 from '@/public/images/file.jpeg';
import img12 from '@/public/images/fsengon.jpeg';
import img13 from '@/public/images/kabab.jpeg';
import img14 from '@/public/images/kofte.jpeg';
import { log } from 'console';
import Modal from '@/components/shared/modal/index';
import Auth from '@/components/user/pages/home/auth/index';



export default function Product(props: { type: string; searchItem: any; }) {

     const prodocts = [{ nameFood: 'food Name', price: '200T', img: img1, Category: 'fast-food' }, { nameFood: 'food Name', price: '200T', img: img2, Category: 'fast-food' }, { nameFood: 'food Name', price: '200T', img: img3, Category: 'fast-food' },
     { nameFood: 'food Name', price: '200T', img: img4, Category: 'old-food' }, { nameFood: 'food Name', price: '200T', img: img5, Category: 'old-food' }, { nameFood: 'food Name', price: '200T', img: img6, Category: 'old-food' },
     { nameFood: 'آب گوشت', price: '200T', img: img7, Category: 'old-food' }, { nameFood: 'آش رشته', price: '200T', img: img8, Category: 'old-food' }, { nameFood: 'بال مرغ کبابی', price: '200T', img: img9, Category: 'old-food' },
     { nameFood: 'دولمه برگ', price: '200T', img: img10, Category: 'old-food' }, { nameFood: 'کباب فیله', price: '200T', img: img11, Category: 'old-food' }, { nameFood: 'فسنجان', price: '200T', img: img12, Category: 'old-food' },
     { nameFood: 'کباب کوبیده', price: '200T', img: img13, Category: 'old-food' }, { nameFood: ' کوفته تبریزی', price: '200T', img: img14, Category: 'old-food' },]

     const sefaresh = (name: string) => {
          // <Modal children={<div>salam</div>} open={true} setOpen={} className=""   />
          console.log(name);
          return (<Auth />)
     }

     ///search-user
     if (props.searchItem) {
          
          return (
               <>
                    {
                         prodocts.map((p, index) => (
                              (props.searchItem == p.nameFood) ? (
                                   <div key={index} className="w-1/3 h-[30vw] relative overflow-hidden card p-2">
                                        <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                             <h1 className="text-4xl font-bold card-overlay-heading">{p.nameFood}</h1>
                                             <p className="text-xl font-bold m-5 border-b-2 card-overlay-paragraph">{p.price} </p>
                                             <button className="border border-white rounded-lg bg-transparent  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => sefaresh(p.nameFood)}>سفارش</button>
                                        </div>
                                        <Image className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img} alt={'Food photo'} />
                                   </div>
                              ):(<div></div>)
                             
                         ))
                    }
               </>
          )

     }


     ////////category
     if (props.type != '') {
          if (props.type === 'fast-food') {
               return (
                    <>
                         {
                              prodocts.map((p, index) => (
                                   (p.Category === 'fast-food') ? (
                                        <div key={index} className="w-1/3 h-[30vw] relative overflow-hidden card p-2">
                                             <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                                  <h1 className="text-4xl font-bold card-overlay-heading">{p.nameFood}</h1>
                                                  <p className="text-xl font-bold m-5 border-b-2 card-overlay-paragraph">{p.price} </p>
                                                  <button className="border border-white rounded-lg bg-transparent  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => sefaresh(p.nameFood)}>سفارش</button>
                                             </div>
                                             <Image className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img} alt={'Food photo'} />
                                        </div>
                                   ) : (<div></div>)
                              ))
                         }
                    </>
               )
          }

          if (props.type === 'old-food') {
               return (

                    <>
                         {
                              prodocts.map((p) => (
                                   (p.Category === 'old-food') ? (
                                        <div className="w-1/3 h-[30vw] relative overflow-hidden card p-2">
                                             <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                                  <h1 className="text-4xl font-bold card-overlay-heading">{p.nameFood}</h1>
                                                  <p className="text-xl font-bold m-5 border-b-2 card-overlay-paragraph">{p.price} </p>
                                                  <button className="border border-white rounded-lg bg-transparent  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => sefaresh(p.nameFood)} >سفارش</button>
                                             </div>
                                             <Image className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img} alt={'Food photo'} />
                                        </div>
                                   ) : (<div></div>)
                              ))
                         }
                    </>
               )
          }

     }


     else {
          return (

               <>
                    {
                         prodocts.map((p) => (
                              <div className="w-1/3 h-[30vw] relative overflow-hidden card p-2">
                                   <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                        <h1 className="text-4xl font-bold card-overlay-heading">{p.nameFood}</h1>
                                        <p className="text-xl font-bold m-5 border-b-2 card-overlay-paragraph">{p.price} </p>
                                        <button type="button" className="border border-white rounded-lg bg-transparent  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => sefaresh(p.nameFood)}>سفارش</button>
                                   </div>
                                   <Image className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img} alt={'Food photo'} />
                              </div>
                         ))
                    }
               </>
          )
     }
}

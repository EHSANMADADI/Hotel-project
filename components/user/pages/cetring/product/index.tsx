/* eslint-disable @next/next/no-img-element */
'use client'
import React, { ReactNode } from 'react'
import Image, { StaticImageData } from "next/image";
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
import img15 from '@/public/images/qormesabzi.jpeg'
import Modal from '@/components/shared/modal/index';
import { useState } from 'react';
import Selected from '../../resturant/Product-selected/index';




export default function Product(props: { type: string; searchItem: any; }) {

     const prodocts = [{ nameFood: 'food Name', price: '200T', img: img1, Category: 'fast-food' }, { nameFood: 'food Name', price: '200T', img: img2, Category: 'fast-food' }, { nameFood: 'food Name', price: '200T', img: img3, Category: 'fast-food' },
     { nameFood: 'food Name', price: '200T', img: img4, Category: 'old-food' }, { nameFood: 'food Name', price: '200T', img: img5, Category: 'old-food' }, { nameFood: 'food Name', price: '200T', img: img6, Category: 'old-food' },
     { nameFood: 'آب گوشت', price: '200T', img: img7, Category: 'old-food' }, { nameFood: 'آش رشته', price: '200T', img: img8, Category: 'old-food' }, { nameFood: 'بال مرغ کبابی', price: '200T', img: img9, Category: 'old-food' },
     { nameFood: 'دولمه برگ', price: '200T', img: img10, Category: 'old-food' }, { nameFood: 'کباب فیله', price: '200T', img: img11, Category: 'old-food' }, { nameFood: 'فسنجان', price: '200T', img: img12, Category: 'old-food' },
     { nameFood: 'کباب کوبیده', price: '200T', img: img13, Category: 'old-food' }, { nameFood: ' کوفته تبریزی', price: '200T', img: img14, Category: 'old-food' }, { nameFood: 'قورمه سبزی', price: '200T', img: img15, Category: 'old-food' }]
     const [open, setOpen] = useState(false);
     const [nameorder, setNameOrder] = useState('');
     const [priseItem, setPriseItem] = useState('');
     const [imageItem, setImageItem] = useState('');
     // var nameorder: string;
     // var priseItem: string;
     // var imageItem:StaticImageData;
     function handelsefaresh(name: string, prise: string, img: StaticImageData) {
          setOpen(true);
          // console.log(imageItem+'//////////////////////////');
          setNameOrder(name);
          setPriseItem(prise);
          setImageItem(img.src);
          //     nameorder=name;
          //     priseItem=prise;
          //     imageItem=img;

     }


     ///search-user
     if (props.searchItem) {

          return (
               <>
                    {
                         prodocts.map((p, index) => (
                              (props.searchItem == p.nameFood) ? (
                                   <div key={index} className="w-1/3 h-[30vw] relative overflow-hidden card p-2 sm:w-full">
                                        <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                             <h1 className="text-4xl md:text-base font-bold card-overlay-heading">{p.nameFood}</h1>
                                             <p className="text-xl md:text-sm font-bold m-5 border-b-2 card-overlay-paragraph">{p.price} </p>
                                             <button className="border border-white rounded-lg bg-transparent  p-5 md:p-2 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => handelsefaresh(p.nameFood, p.price, p.img)}>سفارش</button>
                                             <Modal Open={open} onClose={() => setOpen(false)} >
                                                  <Selected imageSrc={imageItem} name={nameorder} price={priseItem} id={undefined} onClose={()=>setOpen(false)} description={''} />
                                             </Modal>

                                        </div>
                                        <img className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img.src} alt={'Food photo'} />
                                   </div>
                              ) : (<div key={index}></div>)

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
                                                  <button className="border border-white rounded-lg bg-transparent  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => handelsefaresh(p.nameFood, p.price, p.img)}>سفارش</button>
                                                  <Modal Open={open} onClose={() => setOpen(false)} >
                                                       <Selected imageSrc={imageItem} name={nameorder} price={priseItem} id={undefined} onClose={()=>setOpen(false) } description={''} />
                                                  </Modal>

                                             </div>
                                             <img className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img.src} alt={'Food photo'} />
                                        </div>
                                   ) : (<div key={index}></div>)
                              ))
                         }
                    </>
               )
          }

          if (props.type === 'old-food') {
               return (

                    <>
                         {
                              prodocts.map((p,index) => (
                                   (p.Category === 'old-food') ? (
                                        <div key={index} className="w-1/3 h-[30vw] relative overflow-hidden card p-2">
                                             <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                                  <h1 className="text-4xl font-bold card-overlay-heading">{p.nameFood}</h1>
                                                  <p className="text-xl font-bold m-5 border-b-2 card-overlay-paragraph">{p.price} </p>
                                                  <button className="border border-white rounded-lg bg-transparent  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => handelsefaresh(p.nameFood, p.price, p.img)}>سفارش</button>
                                                  <Modal Open={open} onClose={() => setOpen(false)} >
                                                       <Selected imageSrc={imageItem} name={nameorder} price={priseItem} id={undefined} onClose={()=>setOpen(false) } description={''} />
                                                  </Modal>

                                             </div>
                                             <img className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img.src} alt={'Food photo'} />
                                        </div>
                                   ) : (<div key={index}></div>)
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
                         prodocts.map((p,index) => (
                              <div key={index} className="w-1/3 sm:w-full md:w-2/4 h-[30vw] relative overflow-hidden card p-2">
                                   <div className=" hover:left-0 h-full w-full flex  justify-center items-center flex-col absolute  -left-full top-0 text-white bg-blue-500 opacity-60 z-20 dark:bg-zinc-700  card-over">
                                        <h1 className="text-4xl md:text-base font-bold card-overlay-heading">{p.nameFood}</h1>
                                        <p className="text-xl font-bold m-5 md:text-sm md:m-2 border-b-2 card-overlay-paragraph">{p.price} </p>
                                        <button className="border border-white rounded-lg bg-transparent md:p-2  p-5 hover:bg-slate-50 hover:text-blue-500 font-bold" onClick={() => handelsefaresh(p.nameFood, p.price, p.img)}>سفارش</button>
                                        {/* /////////////phto onloaded???????????? */}
                                        <Modal Open={open} onClose={() => setOpen(false)} >
                                             <Selected imageSrc={imageItem} name={nameorder} price={priseItem} id={undefined} onClose={()=> setOpen(false)}description={''} />
                                        </Modal>

                                   </div>
                                   <img className='w-full h-full rounded-md dark:opacity-40  object-cover' src={p.img.src} alt={'Food photo'} />
                              </div>
                         ))
                    }
               </>
          )
     }
}

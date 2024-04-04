import React from 'react'
import MenuItems from './menu-items'
import CardItem from './Card-item'
const Menu = () => {
    return (
        <>
            <section className="bg-stone-900 bg-blend-overlay bg-[url('/images/cafe/bg1.jpg')] bg-cover bg-center bg-fixed  ">
                <h2 className='text-white text-3xl font-bold text-center py-4'>منوی کافه</h2>
                <div className='grid grid-cols-3 xxl:grid-cols-2 lg:grid-cols-1 lg:gap-x-8 gap-x-16 gap-y-8 px-6 lg:px-4 md:px-3'>
                {MenuItems.map((item)=>{
                    return <CardItem item={item} key={item.id} />
                })}
                </div>
            </section>
        </>
    )
}

export default Menu

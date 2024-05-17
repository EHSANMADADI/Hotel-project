'use client'
import ShopingCard from '@/components/user/pages/ShopingCard'
import FoodContextProvider from '@/Context/FoodContextProvider'
import React from 'react'

export default function page() {
  return (
    <FoodContextProvider>
      <div><ShopingCard /></div>
    </FoodContextProvider>

  )
}

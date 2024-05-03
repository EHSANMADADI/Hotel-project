'use client'
import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Stats from './stats-counter'
import BgOverlay from './BgOverlay'
import Gallery from './Gallery'
import Footer from './Footer'
import CartContextProvider from '@/Context/CartContextProvider'
const Cafe = () => {
  return (
    <CartContextProvider>
      <Header />
      <BgOverlay >
        <Menu />
        <Stats />
        <Gallery />
        <Footer />
      </BgOverlay>
    </CartContextProvider>
  )
}

export default Cafe

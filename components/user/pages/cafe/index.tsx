'use client'
import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Stats from './stats-counter'
import BgOverlay from './BgOverlay'
import Gallery from './Gallery'
const Cafe = () => {
  return (
    <>
      <Header />
      <BgOverlay >
        <Menu />
        <Stats />
        <Gallery />
      </BgOverlay>
    </>
  )
}

export default Cafe

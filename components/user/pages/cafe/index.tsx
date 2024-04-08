'use client'
import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Stats from './stats-counter'
import BgOverlay from './BgOverlay'
const Cafe = () => {
  return (
    <>
      <Header />
      <BgOverlay >
        <Menu />
        <Stats />
      </BgOverlay>
    </>
  )
}

export default Cafe

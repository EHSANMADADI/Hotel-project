import React from 'react'

export default function NotAvailable() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  text-red-700 font-black">
    <h2 className="text-3xl p-5">403</h2>
    <div className='text-xl' >شما به این صفحه دسترسی ندارید لطفا لاگین کنید</div>
    </div>
    
  )
}

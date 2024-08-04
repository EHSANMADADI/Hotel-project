import React from 'react'

export default function ArshiveRezerv() {
  return (
    <div className="w-4/5 mx-auto mt-10" dir="rtl">
    <table className="w-full">
      <tr className="px-5 pb-3 border-t-2 border-blue-300 bg-gray-200 ">
        <th className="mx-4">شماره اتاق</th>
        <th className="mx-4 p-3">نوع اتاق</th>
        <th className="mx-4 p-3">ظرفیت</th>
        <th className="mx-4 p-3"> تاریخ</th>
       
        
      </tr>
      <tr className="text-center text-sm text-gray-500 font-semibold">
        <td className="p-3">22</td>
        <td>اناق مستر</td>
        <td>5 نفر</td>
        <td>1403-01-01</td>
      </tr>
    </table>
  </div>
  )
}

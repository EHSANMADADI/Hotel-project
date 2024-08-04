import React from 'react'
interface ArshiveRezerv {
  Food: true
}
export default function ArshiveRezerv({Food}:ArshiveRezerv) {
  return (
    <>
      {Food &&  <div className="w-4/5 mx-auto mt-10" dir="rtl">
      <table className="w-full">
        <tr className="px-5 pb-3 border-t-2 border-blue-300 bg-gray-200 ">
          <th className="mx-4">شماره سفارش</th>
          <th className="mx-4 p-3">نام غذا</th>
          <th className="mx-4 p-3">قیمت</th>
          <th className="mx-4 p-3"> تاریخ</th>
          <th className="mx-4 p-3"> وضعیت پرداخت</th>
          <th className="mx-4 p-3"></th>
          
        </tr>
        <tr className="text-center text-sm text-gray-500 font-semibold">
          <td className="p-3">22</td>
          
          <td>کباب کوبیده</td>
          <td>200T</td>
          <td>1403-01-01</td>
          <td>پرداخت كامل</td>
        </tr>
      </table>
    </div>

      }
      ,
      {
        !Food && <div className="w-4/5 mx-auto mt-10" dir="rtl">
        <table className="w-full">
          <tr className="px-5 pb-3 border-t-2 border-blue-300 bg-gray-200 ">
            <th className="mx-4">شماره اتاق</th>
            <th className="mx-4 p-3">نوع اتاق</th>
            <th className="mx-4 p-3">ظرفیت</th>
            <th className="mx-4 p-3"> تاریخ</th>
            <th className="mx-4 p-3"> وضعیت پرداخت</th>
          
            
          </tr>
          <tr className="text-center text-sm text-gray-500 font-semibold">
            <td className="p-3">22</td>
            
            <td>اناق مستر</td>
            <td>5 نفر</td>
            <td>1403-01-01</td>
            <td>پرداخت  کامل</td>
           
           
          </tr>
        </table>
      </div>
      }
    </>


  );
}

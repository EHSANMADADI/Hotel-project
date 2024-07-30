import React, { useEffect } from 'react'

export default function ListOfTableRest() {
    // useEffect(()=>{     خودت تابع رو بنوییس دیگه علی 

    // })
    return (
        <div className='flex w-2/3 mx-auto'>


            <div className="relative w-full overflow-x-auto" dir='rtl'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xl font-bold text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                شماره میز
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نوع میز
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                ظرفیت
                            </th>

                            <th scope="col" className="px-6 py-3 rounded-e-lg">

                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-lg font-bold'>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                12
                            </th>
                            <td className="px-6 py-4">
                                خانوادگی
                            </td>
                            <td className="px-6 py-4">
                                5نفر
                            </td>

                            <td className="px-6 py-4">
                                <button className='bg-green-600 text-white px-5 py-2 rounded-2xl'>رزو میز</button>
                            </td>

                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                13
                            </th>
                            <td className="px-6 py-4">
                                عاشقانه
                            </td>
                            <td className="px-6 py-4">
                                5نفر
                            </td>
                            <td className="px-6 py-4">
                                <button className='bg-green-600 text-white px-5 py-2 rounded-2xl'>رزو میز</button>
                            </td>
                        </tr>



                    </tbody>

                </table>
            </div>

        </div>

    )
}

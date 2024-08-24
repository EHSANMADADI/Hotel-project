import { Dispatch, SetStateAction } from 'react'
import { Tables } from '../cafe/Reservation/Tables'

export default function ListOfTableRest({ tables, setTableId }: { tables: Tables[], setTableId: Dispatch<SetStateAction<number>> }) {
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
                                توضیحات
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                هزینه رزرو
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">

                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-lg font-bold'>
                        {tables.map((table) =>
                            <tr key={table.id} className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    {table.number_of_table}
                                </th>
                                <td className="px-6 py-4">
                                    {table.type === 'couple' ? "خانوادگی" : "عاشقانه"}
                                </td>
                                <td className="px-6 py-4">
                                    {table.number_of_chairs}
                                </td>
                                <td className="px-6 py-4">
                                    {table.description}
                                </td>
                                <td className="px-6 py-4">
                                    {table.rates}
                                </td>
                                <td className="px-6 py-4">
                                    <button className='bg-green-600 text-white px-5 py-2 rounded-2xl' onClick={() => setTableId(table.id)} >رزو میز</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
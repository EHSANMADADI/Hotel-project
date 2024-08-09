import React, { Dispatch, SetStateAction } from 'react'
import { Tables } from './Tables'
interface Props {
    tables: Tables[],
    setTableNumber: Dispatch<SetStateAction<
        { id: number, number: string }>>
}

const ShowTables = ({ tables, setTableNumber }: Props) => {
    return (
        <div className='max-w-2xl mx-auto my-10 py-5 px-2 bg-white dark:bg-slate-800 rounded-lg '>
            <table className='text-center w-full py-2'>
                <tr className='border border-sky-600'>
                    <th className='border border-sky-600'>شماره میز</th>
                    <th className='border border-sky-600'>ظرفیت میز</th>
                    <th className='border border-sky-600'>هزینه رزرو به تومان</th>
                    <th className='border border-sky-600'>نوع میز</th>
                    <th className='border border-sky-600'>توضیحات</th>
                    <th className='border border-sky-600'>انتخاب</th>
                </tr>
                {tables.map(table => <tr key={table.id}>
                    <td className='border m-1 border-sky-600'>{table.number_of_table}</td>
                    <td className='border m-1 border-sky-600'>{table.number_of_chairs}</td>
                    <td className='border m-1 border-sky-600'>{table.rates.toLocaleString()}</td>
                    <td className='border m-1 border-sky-600'>{table.type === 'family' ? "خانوادگی" : "دونفره"}</td>
                    <td title={table.description} className='border p-1 border-sky-600 truncate text-ellipsis max-w-[50px]'>{table.description}</td>
                    <td className='border border-sky-600'><button onClick={() => setTableNumber({ id: table.id, number: table.number_of_table })} className='px-3 py-1 m-1 bg-green-600 hover:bg-green-700 rounded-lg'>انتخاب</button></td>
                </tr>)}
            </table>
        </div>
    )
}

export default ShowTables
import React, { ReactNode } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import api from '@/Configs/api';
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link';

type TableType = {
    id: number,
    type: "couple" | "family"
    description?: string
    rates: string
    number_of_table: string
    number_of_chairs: string
    is_disabled: Boolean

}

type TableProps = {
    tables: TableType[]
}
const TablesGrid = ({ tables }: TableProps) => {
    const queryClient = useQueryClient()
    const deleteTable = (id: number) => {
        try {
            api.delete(`/coffee-shop/tables/${id}`)
            toast.success("میز با موفقیت حذف شد.")
            queryClient.invalidateQueries()
        }
        catch (error) {
            toast.error("حذف میز با خطا مواجه شد")
        }
    }

    const disable_enableTable = ({ id, is_disabled, number_of_chairs, number_of_table, rates, type, description }: TableType) => {
        try {
            api.put(`/coffee-shop/tables/${id}`,
                {
                    is_disabled: +!(!!is_disabled),
                    number_of_chairs, number_of_table,
                    rates, type, coffee_shop_id: 1,
                    description
                })
            
            toast.success( is_disabled ? "میز با موفقیت غیرفعال شد." : "میز با موفقیت فعال شد.")
            queryClient.invalidateQueries()
        }
        catch (error) {
            toast.error("حذف میز با خطا مواجه شد")
        }

    }
    return (
        tables?.length === 0 ? <h2 className=' text-center font-bold text-xl py-8 animate-pulse'>در حال حاضر میز فعالی وجود ندارد </h2> :
            <table className='px-6 py-10 dark:bg-slate-700 w-full text-center'>
                <caption className='text-lg font-semibold mb-2'>لیست میزهای فعال</caption>
                <th className='border-2  border-indigo-400'>شماره میز</th>
                <th className='border-2 border-indigo-400'>ظرفیت میز</th>
                <th className='border-2 border-indigo-400'>نوع میز</th>
                <th className='border-2 border-indigo-400'>قیمت رزرو</th>
                {/* <th className='border border-indigo-400 block sm:hidden'>توضیحات</th> */}
                <th className='border-2 border-indigo-400'>فعال </th>
                <th className='border-2 border-indigo-400' colSpan={0.3} >ویرایش و حذف</th>
                {tables.map((table) => <tr key={table.id}>
                    <TableData>{table.number_of_table}</TableData>
                    <TableData>{table.number_of_chairs}</TableData>
                    <TableData>{table.type === "couple" ? "عاشقانه" : "خانوادگی"}</TableData>
                    <TableData>{Number(table.rates).toLocaleString()}</TableData>
                    {/* <TableData >{table.description || " - "}</TableData> */}
                    <TableData> <input type='checkbox' onChange={() => disable_enableTable(table)} checked={!!table.is_disabled} /> </TableData>
                    <td className='border border-indigo-400 font-semibold flex justify-center items-center gap-6 xs:gap-2'>
                        <Link href={`/coffee-shop/admin/editTable/${table.id}`}>
                        <CiEdit className='cursor-pointer fill-green-700 dark:fill-[#0ecb11] ' size={24} />
                        </Link>
                        <FaTrashAlt className='cursor-pointer' color='#e71212' size={20} onClick={() => deleteTable(table.id)} /></td>
                </tr>)}
            </table>
    )
}


export default TablesGrid

const TableData = ({ children , className }: { children: ReactNode , className?:string }) => {
    return <td className={`border-2 border-indigo-400 font-semibold ${className}`} >
        {children}
    </td>
}
import React, { ReactNode } from 'react'
import Title from '../Title'
import { CiEdit } from 'react-icons/ci'
import { FaTrashAlt } from 'react-icons/fa'
import UseMenu from '../hooks/useMenu'
import { useQueryClient } from '@tanstack/react-query'
import api from '@/Configs/api'
import toast from 'react-hot-toast'
import Spinner from '../Spinner'
import Link from 'next/link'
import { MenuType } from './MenuItemType'
import Image from 'next/image'

const EditMenu = () => {
  const { data, isError, isPending } = UseMenu()
  const menuItems = data?.filter((item) => item.type === 'coffeeShop')
  const queryClient = useQueryClient()  

  const deleteItem = (id: number) => {
    try {
      api.delete(`/menu-items/${id}`)
      toast.success("آیتم با موفقیت حذف شد.")
      queryClient.invalidateQueries()
    }
    catch (error) {
      toast.error("حذف آیتم با خطا مواجه شد")
    }
  }
  if (isError)
    return <div><Title>حذف و ویرایش منو</Title>
      <h2 className='text-center font-bold text-xl py-8 animate-pulse'>دریافت اطلاعات با خطا مواجه شد. </h2>
    </div>

  return (
    <div>
      <Title>حذف و ویرایش منو </Title>
      {
        isPending ?
          <Spinner />
          :
          menuItems?.length === 0 ? <h2 className=' text-center font-bold text-xl py-8 animate-pulse'>در حال حاضر هیچ آیتمی در منو وجود ندارد </h2> :
            <table className=' px-6 py-10 dark:bg-slate-700 w-full text-center '>
              <caption className='text-lg font-semibold mb-2'>لیست آیتم های منو</caption>
              <th className='border border-indigo-400'>تصویر محصول</th>
              <th className='border border-indigo-400'>نام محصول</th>
              <th className='border border-indigo-400'>قیمت </th>
              <th className='border border-indigo-400'>توضیحات</th>
              <th className='border border-indigo-400' colSpan={0.3} >ویرایش و حذف</th>
              {menuItems?.map((item: MenuType) => <tr key={item.id}>                
                <TableData> <Image src={`http://127.0.0.1:8000/menu-item/${typeof item.media === 'object'&& item.media[item.media.length-1]?.url}` || ''} alt={item.name.substring(0,10)} width={40} height={40} className='object-cover m-auto' /> </TableData>
                <TableData>{item.name}</TableData>
                <TableData>{Number(item.price).toLocaleString()}</TableData>
                <TableData>{item.description || " - "}</TableData>
                <td className='border border-indigo-400 font-semibold flex justify-center items-center gap-6 xs:gap-2'>
                  <Link href={`/coffee-shop/admin/editMenu/${item.id}`} >
                    <CiEdit className='cursor-pointer' color='#0ecb11' size={24} />
                  </Link>
                  <FaTrashAlt className='cursor-pointer' color='#e71212' size={20} onClick={() => { deleteItem(item.id) }} /></td>
              </tr>)}
            </table>
      }
    </div>
  )
}

export default EditMenu

const TableData = ({ children }: { children: ReactNode }) => {
  return <td className='border border-indigo-400 font-semibold'>
    {children}
  </td>
}
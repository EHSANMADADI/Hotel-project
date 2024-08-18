import React from 'react'
import useReserves from '../hooks/useReserves'
import { Tabledata , TableHeader } from '../../../cafe/user/Utils';
import Title from '../Title';
import Spinner from '../Spinner';
import useDeleteReserve from '../hooks/useDeleteReserve';

const ShowReserves = () => {
  const { data: reserves, isPending } = useReserves()
  const { mutate } = useDeleteReserve()
  if (isPending || !reserves)
    return <Spinner />
  if (!reserves.length)
    return <h2 className='font-bold text-center text-3xl my-4 animate-pulse'>هیچ رزرو فعالی وجود ندارد</h2>
  return (
    <div>
      <Title>لیست رزروهای رستوران</Title>
      <div className='md:overflow-x-scroll max-w-3xl w-11/12 mx-auto'>
        <table className='text-center w-full mx-auto'>
          <thead>
            <tr>
              <TableHeader>شماره رزرو</TableHeader>
              <TableHeader>ساعت ورود</TableHeader>
              <TableHeader>ساعت خروج</TableHeader>
              <TableHeader>شماره میز</TableHeader>
              <TableHeader>تاریخ</TableHeader>
              <TableHeader>تعداد مهمانان</TableHeader>
              <TableHeader>وضعیت</TableHeader>
              <TableHeader>حذف</TableHeader>
            </tr>
          </thead>
          <tbody>
            {reserves?.length && reserves.map(reserve => <tr key={reserve.id}>
              <Tabledata>{reserve.id}</Tabledata>
              <Tabledata>{reserve.check_in_hour.slice(0, 5)}</Tabledata>
              <Tabledata>{reserve.check_out_hour.slice(0, 5)}</Tabledata>
              <Tabledata>{reserve.table.number_of_table}</Tabledata>
              <Tabledata>{reserve.date}</Tabledata>
              <Tabledata>{reserve.number_of_guest}</Tabledata>
              <Tabledata>{reserve.status.toLocaleLowerCase() === 'full' ? 'پرداخت شده' : 'تسویه نشده'}</Tabledata>
              <Tabledata><button className='duration-200 bg-red-600 text-white hover:bg-red-700 px-4 py-0.5 rounded-lg my-1 mx-1'
                onClick={() => mutate(reserve.id)}
              >حذف</button></Tabledata>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowReserves

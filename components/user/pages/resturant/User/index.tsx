'use client'
import api from '@/Configs/api'
import { Error, Loading, NoData, Overlay, TableHeader, Tabledata } from '../../cafe/user/Utils'
import { useEffect, useState } from 'react'
import useRestaurantReserves from './useRestaurantReserves'
import MenuResturont from '../MenuResturont'

const User = () => {
    const { data, isError, isPending } = useRestaurantReserves()

    const [tableNumbers, setTableNumbers] = useState([] as string[])
    useEffect(() => {
        data?.map((reserve) => {
            api.get(`/tables/${reserve.table_id}`)
                .then((data) => { setTableNumbers(prev => [...prev, data.data.number_of_table]) })
        })
    }, [data])

    if (isError) return <Error />
    if (isPending) return <Loading />
    if (!data.length) return <>
        <div className='bg-gray-400 dark:bg-slate-600'>
            <MenuResturont />
        </div>
        <NoData />
    </>

    return (
        <>
            <div className='bg-gray-300 dark:bg-slate-700'>
                <MenuResturont />
            </div>
            <Overlay>
                <h1 className='text-3xl font-bold mb-6 text-center'>رزروهای من</h1>
                <div className='overflow-x-scroll no-scrollbar'>
                    <table className='text-center w-full min-w-[640px] max-w-2xl mx-auto'>
                        <thead>
                            <tr>
                                <TableHeader>شماره رزرو</TableHeader>
                                <TableHeader>ساعت ورود</TableHeader>
                                <TableHeader>ساعت خروج</TableHeader>
                                <TableHeader>شماره میز</TableHeader>
                                <TableHeader>تاریخ</TableHeader>
                                <TableHeader>تعداد مهمانان</TableHeader>
                                <TableHeader>وضعیت</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((reserve, index) => <tr key={reserve.id}>
                                <Tabledata>{reserve.id}</Tabledata>
                                <Tabledata>{reserve.check_in_hour.slice(0, 5)}</Tabledata>
                                <Tabledata>{reserve.check_out_hour.slice(0, 5)}</Tabledata>
                                <Tabledata>{tableNumbers[index]}</Tabledata>
                                <Tabledata>{reserve.date}</Tabledata>
                                <Tabledata>{reserve.number_of_guest}</Tabledata>
                                <Tabledata>{reserve.status.toLocaleLowerCase() === 'full' ? 'پرداخت شده' : 'تسویه نشده'}</Tabledata>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <p className='font-bold text-xl text-center my-6'>برای پشتیبانی با شماره 09388852033 تماس حاصل فرمایید</p>
            </Overlay>
        </>
    )
}

export default User
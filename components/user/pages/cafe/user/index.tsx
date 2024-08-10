'use client'
import useCoffeeShopReserves from './hooks/useCoffeeShopReserves'
import { Error, Loading, NoData, Overlay, TableHeader, Tabledata } from './Utils'

const User = () => {
    const { data, isError, isPending } = useCoffeeShopReserves()
    if (isError) return <Error />
    if (isPending) return <Loading />
    if (!data.length) return <NoData />

    return (
        <Overlay>
            <h1 className='text-3xl font-bold mb-6 text-center'>رزروهای من</h1>
            <table className='text-center w-full'>
                <thead>
                    <TableHeader>شماره رزرو</TableHeader>
                    <TableHeader>ساعت ورود</TableHeader>
                    <TableHeader>ساعت خروج</TableHeader>
                    <TableHeader>شماره میز</TableHeader>
                    <TableHeader>تاریخ</TableHeader>
                    <TableHeader>تعداد مهمانان</TableHeader>
                    <TableHeader>وضعیت</TableHeader>
                    {/* <TableHeader>حذف</TableHeader> */}
                </thead>
                <tbody>
                    {data.map(reserve => <tr key={reserve.id}>
                        <Tabledata>{reserve.id}</Tabledata>
                        <Tabledata>{reserve.check_in_hour.slice(0, 5)}</Tabledata>
                        <Tabledata>{reserve.check_out_hour.slice(0, 5)}</Tabledata>
                        <Tabledata>{reserve.coffee_shop_table_id}</Tabledata>
                        <Tabledata>{reserve.date}</Tabledata>
                        <Tabledata>{reserve.number_of_guest}</Tabledata>
                        <Tabledata>{reserve.status.toLocaleLowerCase() === 'full' ? 'پرداخت شده' : 'تسویه نشده'}</Tabledata>
                        {/* <Tabledata><button className='duration-200 bg-red-600 text-white hover:bg-red-700 px-4 py-0.5 rounded-lg my-1' */}
                        {/* onClick={() => { */}
                        {/* api.delete(`/coffee-shop/reserves/${reserve.id}`).then(() => toast.success("رزرو با موفقیت لغو شد")) */}
                        {/* .catch((_) => toast.error('رزرو لغو نشد.')) */}
                        {/* }} */}
                        {/* >حذف</button></Tabledata> */}
                    </tr>)}
                </tbody>
            </table>
            <p className='font-bold text-xl text-center my-6'>برای پشتیبانی با شماره 09123456789 تماس حاصل فرمایید</p>
        </Overlay>
    )
}

export default User
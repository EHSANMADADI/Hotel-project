import React, { ReactNode } from 'react'
import Spinner from '../Admin/Spinner'

export const TableHeader = ({ children }: { children: ReactNode }) => {
    return <th className='border-2 border-sky-500 px-1'>
        {children}
    </th>
}

export const Tabledata = ({ children }: { children: ReactNode }) => {
    return <td className='border-2 border-sky-500 px-1'>
        {children}
    </td>
}

export const Loading = () => {
    return (
        <Overlay>
            <Spinner />
        </Overlay>
    )
}

export const NoData = () => {
    return (
        <Overlay>
            <h2 className='text-center font-bold text-3xl'>رزروی برای شما ثبت نشده است.</h2>
        </Overlay>
    )
}

export const Error = () => {
    return (
        <Overlay>
            <h2 className='text-center text-3xl font-bold'>خطایی در پشت صحنه رخ داد</h2>
        </Overlay>
    )
}

export const Overlay = ({ children }: { children: ReactNode }) => {
    return (
        <div className='min-h-[calc(100vh-88px)] max-w-4xl mx-auto p-8'>
            {children}
        </div>
    )
}

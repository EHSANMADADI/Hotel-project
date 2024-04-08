import React from 'react'
import StatsCounter from '../../home/stats/stats-counter'
interface Props {
    count: number
    title: string
}

const Counter = ({ count, title }: Props) => {
    return (
        <div className='bg-coffee hover:bg-coffee/90 duration-100 w-48 h-48 text-white flex flex-col
         items-center justify-center rounded-full p-8'>
            <StatsCounter count={count} />
            <p className='text-3xl'>{title}</p>
        </div>
    )
}

export default Counter

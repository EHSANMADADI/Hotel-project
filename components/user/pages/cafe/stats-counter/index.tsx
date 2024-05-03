import React from 'react'
import Stat from './Counter'

const Stats = () => {
    return (
        <section id='stats' className='grid grid-cols-4 xs:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12
         items-center place-items-center py-8 px-8 justify-around'>
            <Stat title="مشتری " count={900} />
            <Stat title="باریستا" count={32} />
            <Stat title="شعبه" count={18} />
            <Stat title="سال تجربه" count={12} />
        </section>
    )
}

export default Stats

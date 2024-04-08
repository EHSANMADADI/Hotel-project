import React from 'react'
import Image from 'next/image'

interface Props {
    src: string
}

const CustomImage = ({ src }: Props) => {
    return (
        <div className='overflow-hidden w-[368px] lg:w-[324px] lg:h-[196px] h-[234px] md:w-[324px] md:h-[216px] border-2 border-coffee rounded-lg'>
            <Image src={src} alt={src} width={448} height={256} className='overflow-hidden hover:scale-110 hover:saturate-150 duration-200 h-full' />

        </div>
    )
}

export default CustomImage

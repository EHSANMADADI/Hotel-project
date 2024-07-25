import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Title = ({ children }: Props) => {
    return (
        <h2 className='text-center font-bold xs:text-xl text-3xl mt-2 mb-10'>{children}</h2>
    )
}

export default Title
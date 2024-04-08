import React from 'react'

interface Props {
    children: React.ReactNode
}

const BgOverlay = ({ children }: Props) => {
    return (
        <section className="bg-stone-900 bg-blend-overlay bg-[url('/images/cafe/bg1.jpg')] bg-cover bg-center bg-fixed  ">
            {children}
        </section>

    )
}

export default BgOverlay

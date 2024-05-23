'use client'
import CartContextProvider from "@/Context/CartContextProvider"
import Navbar from "@/components/user/pages/cafe/Navbar"
const CafeLayout = ({ children }: { children: React.ReactNode }) => {
    return <CartContextProvider>
        <body className="bg-black">
        <Navbar />
        {children}
        </body>
    </CartContextProvider>
}

export default CafeLayout
'use client'
import CartContextProvider from "@/Context/CartContextProvider"
import Navbar from "@/components/user/pages/cafe/Navbar"
const CafeLayout = ({ children }: { children: React.ReactNode }) => {
    return <CartContextProvider>
        <body className="bg-slate-400 dark:bg-slate-950">
        <Navbar />
        {children}
        </body>
    </CartContextProvider>
}

export default CafeLayout
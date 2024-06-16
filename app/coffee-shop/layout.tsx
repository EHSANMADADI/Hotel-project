'use client'
import CartContextProvider from "@/Context/CartContextProvider"
import Navbar from "@/components/user/pages/cafe/Navbar"
const CafeLayout = ({ children }: { children: React.ReactNode }) => {
    return <CartContextProvider>
        <main className="bg-slate-400 dark:bg-slate-950">
            <Navbar />
            {children}
        </main>
    </CartContextProvider>
}

export default CafeLayout
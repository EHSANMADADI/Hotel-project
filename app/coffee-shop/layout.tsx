'use client'
import CartContextProvider from "@/Context/CartContextProvider"
import Navbar from "@/components/user/pages/cafe/Navbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const CafeLayout = ({ children }: { children: React.ReactNode }) => {
    return <CartContextProvider>
        <QueryClientProvider client={new QueryClient()}>
            <main className="bg-slate-200 dark:bg-slate-950">
                <Navbar />
                {children}
            </main>
        </QueryClientProvider>
    </CartContextProvider>
}

export default CafeLayout
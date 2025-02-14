'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import useRole from '@/store/useRole';
import Sidebar from './sidebar/Sidebar'
import AddTable from './Table/AddTable';
import EditTables from './Table/EditTables';
import AddItem from './Menu/AddItem';
import EditMenu from './Menu/EditMenu';
import ShowReserves from './Reserves/ShowReserves';

export type Step = "Add Table" | "Edit Table" | "Add to Menu" | "Edit Menu" | "Show Reserves";

const AdminPanel = () => {
    const [step, setStep] = useState<Step>("Add Table")
    const { push } = useRouter()
    const { role } = useRole()
    if (typeof window !== "undefined")
        if (role !== 'Admin') {
            push('/coffee-shop')
        }
        else
            return (
                <main className='h-screen flex gap-2 sm:flex-col sm:gap-4 m-2 rounded-lg bg-transparent'>
                    <Sidebar setStep={setStep} step={step} />
                    <section className='bg-neutral-300 dark:bg-slate-800 w-full py-4 px-4 xs:px-1 xs:text-sm rounded-lg shadow-xl'>
                        {step === "Edit Table" && <EditTables />}
                        {step === "Add Table" && <AddTable />}
                        {step === "Add to Menu" && <AddItem />}
                        {step === "Edit Menu" && <EditMenu />}
                        {step === 'Show Reserves' && <ShowReserves />}
                    </section>
                </main>
            )
}
export default AdminPanel
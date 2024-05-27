'use client'
import React, { useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import AddTable from './Table/AddTable';
import EditTables from './Table/EditTables';
import AddItem from './Menu/AddItem';
import AddImage from './Gallery/AddImage';
import RemoveImage from './Gallery/RemoveImage';
import EditMenu from './Menu/EditMenu';

export type Step = "Add Table" | "Edit Table" | "Add to Menu" | "Edit Menu" | "Add Image" | "Remove Image";

const Admin = () => {
    const [step, setStep] = useState<Step>("Add Table")
    return (
        <main className='min-h-[650px] flex gap-2 m-2 rounded-lg bg-transparent'>
            <Sidebar setStep={setStep} step={step} />
            <section className='bg-neutral-300 dark:bg-slate-800 w-full py-4 px-4 rounded-lg shadow-xl'>
                {step === "Edit Table" && <EditTables />}
                {step === "Add Table" && <AddTable />}
                {step === "Add to Menu" && <AddItem />}
                {step === "Add Image" && <AddImage />}
                {step === "Remove Image" && <RemoveImage />}
                {step === "Edit Menu" && <EditMenu />}
            </section>
        </main>
    )
}

export default Admin
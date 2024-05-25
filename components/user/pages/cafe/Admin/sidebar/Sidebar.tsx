import React, { Dispatch, SetStateAction } from 'react'
import { Step } from '../index'
import Button from './Button'

interface Props {
    setStep: Dispatch<SetStateAction<Step>>
    step: Step
}
type Services = { text: string, step: Step }

const services: Services[] = [
    { text: "تعریف میز", step: "Add Table" },
    { text: "ویرایش میزها", step: "Edit Table" },
    { text: "افزودن به گالری تصاویر", step: "Add Image" },
    { text: "حذف از گالری تصاویر", step: "Remove Image" },
    { text: "افزودن به منو", step: "Add to Menu" },
    { text: "ویرایش منو", step: "Edit Menu" },
]
const Sidebar = ({ setStep, step }: Props) => {
    return (
        <aside className='flex flex-col shadow-xl bg-neutral-300 dark:bg-slate-800 rounded-lg items-center gap-8 divide-y-2 divide-slate-400 dark:divide-slate-700 font-semibold px-2 py-4'>
            {services.map(item => <Button key={item.step} setStep={setStep} currentStep={step} step={item.step}>{item.text}</Button>)}
        </aside>
    )
}

export default Sidebar


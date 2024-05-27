import { SetStateAction, Dispatch, ReactNode } from 'react'
import { Step } from '../index'
interface Props {
    setStep: Dispatch<SetStateAction<Step>>
    step: Step
    children: ReactNode
    currentStep: Step
}

const Button = ({ setStep, step, children, currentStep }: Props) => {
    return <button className={`${step === currentStep && 'text-blue-700 dark:text-blue-500'}`}
        onClick={() => { setStep(step) }}>{children}</button>

}

export default Button
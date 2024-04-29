import { Dispatch, FormEvent, SetStateAction } from 'react'
import Image from 'next/image'
import Menu from '@/components/user/pages/home/landing/menu/index'
import useSendOTP from './hooks/useSendOTP'
interface SendOTPPRops {
    setStep: Dispatch<SetStateAction<1 | 2>>
    mobile: string
    setMobile: Dispatch<SetStateAction<string>>
}

const SendOtpForm = ({ setStep, mobile, setMobile }: SendOTPPRops) => {
    const {  data,mutate, isPending } = useSendOTP();    
    
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (mobile.length !== 11 || !mobile.startsWith('09')) {
            // console.log("Error occured");
            return
        }
        mutate(mobile);
        setStep(2);
    }
    return (
        <>
            <Menu />
            <form onSubmit={submitHandler}
                className='flex flex-col justify-between gap-10 items-center'
            >
                <Image src='/images/logo1.png' width={120} height={120} alt='logo' />
                <label htmlFor="mobileNumber"
                    className='text-slate-100 font-semibold text-lg '
                >لطفا شماره موبایل خود را وارد نمایید</label>
                <input type="number" id='mobileNumber' value={mobile}
                    className='bg-transparent text-white ring-1 p-2 ring-blue-700 rounded-md px-4 py-1 outline-none focus:ring-2'
                    placeholder='مثلا 09121212121'
                    onChange={(e) => { setMobile(e.target.value) }} />
                    {/* <p>کدقبلی هنوز منقضی نشده است</p> */}
                <button type='submit'
                    title={mobile.length === 11 && mobile.startsWith('09') ? 'مرحله بعد' : 'شماره موبایل نامعتبر است.'}
                    className='bg-blue-800 text-slate-100 px-4 py-1 rounded-md hover:bg-blue-900 duration-200'>ارسال کد</button>
            </form>
        </>

    )
}

export default SendOtpForm

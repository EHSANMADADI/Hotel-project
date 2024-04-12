import { Dispatch, FormEvent, SetStateAction } from 'react'
import Image from 'next/image'
import Menu from '@/components/user/pages/home/landing/menu/index'

interface SendOTPPRops {
    setStep: Dispatch<SetStateAction<1 | 2>>
    mobile: string
    setMobile: Dispatch<SetStateAction<string>>
    setOTPCode: Dispatch<SetStateAction<string>>
}

const SendOtpForm = ({ setStep, mobile, setMobile, setOTPCode }: SendOTPPRops) => {
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (mobile.length !== 11 || !mobile.startsWith('09')) {
            console.log("Error occured");
            return
        }
        // Send mobileNumber to recieve OTP and Set OTP Code
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
                <button type='submit'
                    title={mobile.length === 11 && mobile.startsWith('09') ? 'مرحله بعد' : 'شماره موبایل نامعتبر است.'}
                    className='bg-blue-800 text-slate-100 py-2 px-4 py-1 rounded-md hover:bg-blue-900 duration-200'>ارسال کد</button>
            </form>

        </>

    )
}

export default SendOtpForm

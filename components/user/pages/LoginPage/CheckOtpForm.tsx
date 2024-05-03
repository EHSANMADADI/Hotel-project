import { useState, useEffect, FormEvent, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import useCheckOTP from './hooks/useCheckOTP'
import { setCookie } from '@/utils/cookie'

interface Props {
    setStep: Dispatch<SetStateAction<1 | 2>>
    mobile: string
}

const CheckOtpForm = ({ mobile, setStep }: Props) => {
    const [OTPInput, setOTPInput] = useState('');
    const [expireOTPSecond, setExpireOTPSecond] = useState(59);
    const { mutate , data } = useCheckOTP()

    useEffect(() => {
        if (expireOTPSecond > 0) {
            const interval = setTimeout(() => {
                setExpireOTPSecond(prev => prev - 1)
            }, 1000)
            return () => { clearInterval(interval) }
        }
    }, [expireOTPSecond])
    setCookie(data?.data.token)
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();        
        mutate({ phone: mobile, otpcode: OTPInput })
    }
    return (
        <form
            className='flex flex-col justify-between gap-10 items-center'
            onSubmit={submitHandler}>
            <Image src='/images/logo1.png' width={120} height={120} alt='logo' />
            <label htmlFor="OTP" className='text-slate-100 font-semibold text-lg w-11/12 text-center'
            >کد پنج رقمی پیامک شده به شماره &quot;<span className='font-bold tracking-wide'>{mobile}</span>&quot; را وارد کنید</label>
            <input type="number" id='OTP' value={OTPInput}
                className='ring-1 bg-transparent text-white ring-blue-700 rounded-md px-4 py-1 outline-none focus:ring-2'
                onChange={(e) => { setOTPInput(e.target.value) }} />
            {
                expireOTPSecond > 0 && <p className='text-slate-100'>مدت زمان اعتبار کد : {expireOTPSecond}  ثانیه</p>
            }
            {
                expireOTPSecond === 0 && <button onClick={() => { setExpireOTPSecond(5) }} className='text-slate-100'>برای ارسال مجدد کد کلیک کنید</button>
            }

            <div className='flex justify-center items-center gap-4'>
                <button className='bg-blue-800 text-slate-100 px-4 py-1 rounded-md hover:bg-blue-900 duration-200'
                    type="submit">تایید کد</button>
                <button className='bg-blue-800 text-slate-100 px-4 py-1 rounded-md hover:bg-blue-900 duration-200'
                    onClick={() => { setStep(1) }}>تغییر شماره موبایل</button>
            </div>
        </form >
    )
}

export default CheckOtpForm

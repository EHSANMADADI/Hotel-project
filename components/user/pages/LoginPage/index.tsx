'use client'
import { useState } from 'react'
import SendOtpForm from './SendOtpForm';
import CheckOtpForm from './CheckOtpForm';
import Footer from '@/components/user/pages/home/footer/index'

const LoginPage = () => {
    const [step, setStep] = useState<1 | 2>(1);
    const [mobile, setMobile] = useState("");
    const [OTPCode, setOTPCode] = useState("");
    return (
        <>
            <main className="bg-[url('/images/MiladTower.jpg')] bg-cover bg-center bg-slate-900 bg-blend-overlay 
            min-h-screen flex justify-center items-center">
                <main className='bg-slate-600/80 shadow-2xl shadow-slate-800 rounded-lg mx-24 my-4 px-16 py-12 lg:max-w-lg md:max-w-md xs:mx-4 xs:px-8 xs:max-w-sm'>
                    {step === 1 ?
                        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} setOTPCode={setOTPCode} /> :
                        <CheckOtpForm setStep={setStep} mobile={mobile} OTP_Code={OTPCode} />
                    }
                </main>
            </main>
            <Footer/>
        </>



    )
}

export default LoginPage

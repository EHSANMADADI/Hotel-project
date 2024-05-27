import { FormEvent } from 'react'
import Title from '../Title'
import CustomImage from '../../Gallery/CustomImage'

const AddImage = () => {
    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <>
            <Title>افزودن تصویر به گالری</Title>
            <form onSubmit={submitHandler} className='flex flex-col gap-4 items-center' >
                <input type='file' />
                <button type='submit' className='bg-coffee text-slate-200 font-semibold px-4 py-1 rounded-lg'>افزودن تصویر</button>
            </form>
            {/* Preview Of Image */}
        </>
    )
}

export default AddImage
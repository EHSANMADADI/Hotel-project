import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";



type ImageCardProps = {
    imageSrc: StaticImageData | string;
    name: string;
    price: string;

}

const Selected = ({ imageSrc, name, price }: ImageCardProps) => {
    console.log(imageSrc, name, price);

    const NumberFood=useRef(1);

    return (

        <div className='w-full h-fit group relative flex overflow-hidden rounded-md  outline outline-2 outline-Theme-cream justify-between'>
            <div>
                <Image
                    src={imageSrc}
                    alt='img-food'
                    width={300}
                    height={500}
                    className='w-full h-full'
                />
            </div>


            <div className='flex flex-col text-center m-2 p-1'>
                <div><h2 className="text-2xl font-black">{name}</h2></div>
                <div className="font-black">{price}</div>
                <div className="mt-5">
                    <p>در این قسمت اطلاعات  مربوط به غذای انتخابی نمایش داده میشود</p>
                </div>
                <div className="my-5">
                    <form>
                        <div className="relative  w-full mb-5 group text-white">
                            <input ref={NumberFood} type="number" name="floating_number-Food" id="floating_number-Food" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 " placeholder="1" required />
                            {/* <label htmlFor="floating_number-Guest" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> تعداد  </label> */}
                        </div>
                    </form>
                </div>
                <div className="my-5">
                    <Link href={'/'} className="transition-all p-2 bg-transparent border border-blue-200 rounded-md hover:bg-blue-300"> افزودن به سبد خرید</Link>
                </div>
            </div>
        </div>
    )
}

export default Selected;
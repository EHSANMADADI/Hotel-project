import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";


type ImageCardProps = {
    imageSrc: StaticImageData | string;
    name: string;
    price: string;

}

const Selected = ({ imageSrc, name, price }: ImageCardProps) => {
    console.log(imageSrc, name, price);

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
                    <Link href={'/'} className="transition-all p-2 bg-transparent border border-blue-200 rounded-md hover:bg-blue-300"> افزودن به سبد خرید</Link>
                </div>
            </div>
        </div>
    )
}

export default Selected;
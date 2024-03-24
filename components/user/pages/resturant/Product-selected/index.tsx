import { StaticImageData } from "next/image";
import  Image  from "next/image";
type ImageCardProps={
     imageSrc: StaticImageData;
     name: string;
     price: string;
    
 }
const Selected = ({imageSrc,name,price}:ImageCardProps) => {
     return (
       <div className='w-52 h-fit group relative overflow-hidden rounded-md  outline outline-2 outline-Theme-cream'>
           <Image 
               src={imageSrc} 
               alt='test'
               width={208}
               height={300}
           />
           <div className='absolute w-full h-full bg-Theme-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
               <div className='text-white text-2xl relative top-20 p-2'>
                   <h1>{name}</h1>
                   <p>{price}</p>
                  
               </div>
           </div>
       </div>
     )
   }
   
   export default Selected;
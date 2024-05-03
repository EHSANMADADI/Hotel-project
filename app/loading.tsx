import Image from "next/image";

export default function Loading() {
     return (
       <div className="flex justify-center text-center bg-white dark:bg-slate-900 h-max-screen mt-72">
        <Image width={100} height={100}  src={"/loader/loader.gif"} alt="Loading.."/>
       </div>
     )
   }
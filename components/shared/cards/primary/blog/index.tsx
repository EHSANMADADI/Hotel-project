import Image from "next/image";
import Link from "next/link";
import BlogCardImpl from "./types";

const BlogCard = ({ date, desc, href, src, title }: BlogCardImpl) => {
  return (
    <>
      <Link href={"/"} className="w-full inline-block  relative group h-full">
        <div className="w-full h-full overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-black transition-all duration-700
             group-hover:opacity-40 z-10"
          ></div>
          <div
            className="absolute top-5 right-5 flex 
              justify-center items-center flex-col text-clip 
            bg-primary text-white z-20 px-2 py-1"
          >
            <span className="font-bold text-xs mb-1">{date.month}</span>
            <span className="font-medium leading-[1]">{date.day}</span>
          </div>
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700"
            src={src}
            alt={title}
            width="400"
            height="800"
          />
        </div>
        <div
          className="flex justify-start items-start flex-col bg-white 
            z-30 absolute inset-x-6 bottom-6 p-5"
        >
          <span className="mb-2 text-sm font-light text-primary">{title}</span>
          <h3 className="text-cyan-800 font-extrabold text-xl">{desc}</h3>
        </div>
      </Link>
    </>
  );
};
export default BlogCard;

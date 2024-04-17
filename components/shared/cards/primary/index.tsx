import Image from "next/image";
import Link from "next/link";
import PrimaryCardImpl from "./types";
import cls from "classnames";

const PrimaryCard = ({
  children,
  image,
  label,
  title,
  id=0,
  layer = false,
  active = false,
}: PrimaryCardImpl) => {
  return (
    <>
      <Link
        href={`rooms/${id}`}
        className="w-full h-full relative group overflow-hidden flex justify-end items-end"
      >
        <span className="absolute left-6 top-6 horizontal bg-primary text-white text-[14px] z-20 py-2.5 px-1">
          {label}
        </span>
        <div
          className={cls(
            `absolute inset-0 bg-blue-950 opacity-10 
        transition-all duration-700 group-hover:opacity-40 z-10`,
            { "opacity-40": active }
          )}
        ></div>
        <div
          className={cls(
            `relative w-full z-20 flex justify-start items-start flex-col px-8 pb-4 pt-4 text-white
        translate-y-[45px] group-hover:translate-y-[0px] duration-500 transition-all`,
            { "bg-primary": layer, "translate-y-[0px]": active }
          )}
        >
          <h4 className="font-bold text-2xl mb-3">{title}</h4>
          <span
            className={cls(
              `w-[50px] inline-block h-[1px] border-b-[1px] border-white/40 mb-6
          group-hover:w-full duration-1000 transition-all`,
              { "w-full": active }
            )}
          ></span>
          {children}
        </div>
        <Image
          src={image}
          alt="landing"
          className={cls(
            `absolute inset-0 w-full h-full object-cover 
          object-center group-hover:scale-110 duration-700 transition-all`,
            { "scale-110": active }
          )}
          width={1500}
          height={800}
        />
      </Link>
    </>
  );
};
export default PrimaryCard;

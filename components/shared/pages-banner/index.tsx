import Image from "next/image";
import PagesBanner from "./types";

const PagesBanner = ({ children, src, alt }: PagesBanner) => {
  return (
    <>
      <div className="w-full h-[430px]" style={{ clipPath: " inset(0)" }}>
        <div
          className="flex justify-center h-full items-start flex-col container relative z-20 text-white
        mt-[40px]"
        >
          {children}
        </div>
        <div className="absolute inset-0 bg-blue-950 opacity-50 z-10"></div>
        <Image
          src={src}
          alt={alt}
          className="fixed top-0 left-0 w-full h-full object-cover object-center"
          width={1500}
          height={800}
        />
      </div>
    </>
  );
};
export default PagesBanner;

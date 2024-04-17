import PrimaryCard from "@/components/shared/cards/primary";
import { Clock } from "iconsax-react";
import cls from "classnames";
const PopularRooms = () => {
  const images =['/images/room/2.jpg','/images/room/1.jpg','/images/room/B1424625030.jpg','/images/room/3.jpg','/images/room/4.jpg']
  return (
    <>
      <div className="w-full ">
        <div className="container flex justify-start items-start flex-col py-24 md:py-7">
          <span className="text-primary font-light text-sm mb-2">
            متنوع ترین اتاق ها 
          </span>
          <h2 className="text-blue-950 font-extrabold text-5xl md:text-4xl mb-6 leading-[1.4]">
          انواع اتاق های <span className="text-primary">لوکس</span>
          </h2>
          <div className="w-full grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {images.map((src, i) => (
                <div
                  className={cls(
                    "lg:h-auto lg:aspect-square",
                    i === 0 || i === 1 ? "h-[400px]" : "h-[230px]",
                    {
                      "col-span-2 lg:col-span-1": i === 1,
                    }
                  )}
                  key={i}
                >
                  <PrimaryCard
                  id={i}
                    image={src}
                    label={i+2+' میلیون تومان '}
                    title="اتاق ویژه مهمان"
                  >
                    <div className="flex justify-start items-center text-white">
                      <div className="flex justify-center items-center ml-3">
                        <Clock size="16" />
                        <span className="text-[13px] mr-1">7 روز</span>
                      </div>
                      <div className="flex justify-center items-center ml-3">
                        <Clock size="16" />
                        <span className="text-[13px] mr-1">7 روز</span>
                      </div>
                    </div>
                  </PrimaryCard>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PopularRooms;

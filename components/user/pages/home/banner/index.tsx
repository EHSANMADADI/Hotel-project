import { Clock, House2 } from "iconsax-react";

const Banner = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center h-[500px] md:h-[300px] relative">
        <div className="absolute inset-0 bg-blue-950 opacity-40 z-10"></div>
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="https://duruthemes.com/demo/html/travol/travel-video.mp4"
            muted
            autoPlay
            loop
            preload="auto"
          />
        </div>
        <div className="relative container z-20 flex justify-center items-center h-full text-white text-center flex-col">
          <h2 className="text-4xl font-black">سواحل جنوبی آمریکای شمالی</h2>
          <div className="flex justify-center items-center mt-6">
            <div className="flex justify-center items-center">
              <House2 size="16" className="ml-1" />
              <span>فیلیپین</span>
            </div>
            <div className="flex justify-center items-center mr-4">
              <Clock size="16" className="ml-1" />
              <div>
                روز <span className="font-medium mx-1">3+</span> شب
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;

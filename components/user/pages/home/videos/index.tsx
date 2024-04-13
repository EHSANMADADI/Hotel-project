"use client";
import Modal from "@/components/shared/modal";
import Video from "@/components/shared/video";
import { Play } from "iconsax-react";
import Image from "next/image";
import useVideos from "./use";


const Videos = () => {
  const { openModal, setOpenModal, activeVideo, handleSetActiveVideo } =
    useVideos();///costom Hooks
  return (
    <>
      <Modal
        Open={openModal}
        onClose={()=>{setOpenModal(false)}}
      >
        <div className="flex justify-center items-center mx-auto p-5 z-50">
          <Video poster={activeVideo.poster} src={activeVideo.src} />
        </div>
      </Modal>
      <div className="w-full ">
        <div className="container flex justify-between md:flex-wrap items-start py-16">
          <div
            className="w-[calc(50%-15px)] md:w-full md:mb-5
         flex justify-start items-start flex-col cursor-pointer"
          >
            <div
              className="w-full aspect-video relative group"
              onClick={() =>
                handleSetActiveVideo(
                  "/Video/video.mp4",
                  "/images/11.jpg"
                )
              }
            >
              <div className="absolute inset-0 bg-blue-950 opacity-40 z-10"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div
                  className="w-[80px] md:w-[70px] aspect-square border-2 border-zinc-300 
                transition-all duration-500 group-hover:border-white
              rounded-full flex justify-center items-center"
                >
                  <Play
                    size="28"
                    className="text-white transition-all duration-500 group-hover:scale-90 md:hidden"
                  />
                  <Play className="text-white transition-all duration-500 group-hover:scale-90 hidden md:inline-block" />
                </div>
              </div>
              <div className="w-full h-full overflow-hidden">
                <div className="w-full transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={"/images/11.jpg"}
                    alt="landing"
                    className="w-full h-full object-cover object-center"
                    width={1500}
                    height={800}
                  />
                </div>
              </div>
            </div>
            <h4 className="mb-3 mt-8 text-xl font-medium text-primary">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h4>
            <span className="w-[80%] md:w-full text-zinc-400 text-[15px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </span>
          </div>
          <div
            className="w-[calc(50%-15px)] md:w-full md:mb-5
         flex justify-start items-start flex-col cursor-pointer"
          >
            <div
              className="w-full aspect-video relative group"
              onClick={() =>
                handleSetActiveVideo(
                  "/Video/video.mp4",
                  "/images/miladtawer.jpg"
                )
              }
            >
              <div className="absolute inset-0 bg-blue-950 opacity-40 z-10"></div>
              <div className="absolute inset-0 flex justify-center items-center z-20">
                <div
                  className="w-[80px] md:w-[70px] aspect-square border-2 border-zinc-300 
                transition-all duration-500 group-hover:border-white
              rounded-full flex justify-center items-center"
                >
                  <Play
                    size="28"
                    className="text-white transition-all duration-500 group-hover:scale-90 md:hidden"
                  />
                  <Play className="text-white transition-all duration-500 group-hover:scale-90 hidden md:inline-block" />
                </div>
              </div>
              <div className="w-full h-full overflow-hidden">
                <div className="w-full transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={"/images/miladtawer.jpg"}
                    alt="landing"
                    className="w-full  object-center"
                    width={1500}
                    height={800}
                  />
                </div>
              </div>
            </div>
            <h4 className="mb-3 mt-8 text-xl font-medium text-primary">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h4>
            <span className="w-[80%] md:w-full text-zinc-400 text-[15px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Videos;

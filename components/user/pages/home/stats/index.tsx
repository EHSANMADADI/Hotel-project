"use client";
import { Car, Personalcard, Teacher } from "iconsax-react";
import Image from "next/image";
import StatsCounter from "./stats-counter";
import useStats from "./use";
import cls from "classnames";
import { BiBuilding, BiLayer } from "react-icons/bi";
import { MdCardTravel, MdMeetingRoom, MdRoom, MdRoomPreferences } from "react-icons/md";

const items = [
  {
    title: "تور ها",
    icon: MdCardTravel,
    count: 25,
    id: 1,
  },
  {
    title: "مهمان",
    icon: Personalcard,
    count: 6000,
    id: 2,
  },
  {
    title: "شعبه",
    icon: BiBuilding,
    count: 6,
    id: 3,
  },
  {
    title: "اتاق",
    icon: MdMeetingRoom,
    count: 80,
    id: 4,
  },
];

const Stats = () => {
  const { activeCardId, onMouseEnter, onMouseLeave } = useStats();///custom Hooks

  return (
    <>
      <div className="w-full relative" style={{ clipPath: " inset(0)" }}>
        <div className="container relative z-20 grid grid-cols-4 text-white py-24 gap-4 md:grid-cols-1">
          {items.map(({ count, icon: Icon, id, title }) => (
            <div
              key={id}
              className="flex justify-center items-center flex-col text-center"
            >
              <div
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
                className="w-[100px] h-[100px] mb-3 border-[7px] 
            border-white/20 rounded-full relative  flex justify-center items-center overflow-hidden"
              >
                <div
                  className={cls(
                    `bg-white/30 rounded-full absolute inset-1.5 transition-all duration-200`,
                    activeCardId === id
                      ? "translate-x-[-90px]"
                      : "translate-x-0"
                  )}
                >
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Icon size="42" />
                  </div>
                </div>
                <div
                  className={cls(
                    `bg-white/40 rounded-full absolute inset-1.5 transition-all duration-200`,
                    activeCardId === id ? "translate-x-0" : "translate-x-[90px]"
                  )}
                >
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Icon size="42" />
                  </div>
                </div>
              </div>

              <StatsCounter count={count} />
              <span className="text-lg font-semibold max-w-[100px]">
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-blue-950 opacity-60 z-10"></div>
        <Image
          src={"/images/15.jpg"}
          alt="landing"
          className="fixed top-0 left-0 w-full h-full object-cover object-center"
          width={1500}
          height={800}
        />
        <div className=""></div>
      </div>
    </>
  );
};
export default Stats;

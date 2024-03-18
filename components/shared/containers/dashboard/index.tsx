"use client";
import DashboardContainer from "./types";
import { ChemicalGlass, Coffee, HomeWifi } from "iconsax-react";
import DashTab from "./dash-tab";

const DashboardContainer = ({ children }: DashboardContainer) => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-start py-[110px]">
        <div className="container flex justify-start items-start 991px:flex-col">
          <div
            className="min-w-[350px] border-[1px] border-black/10 p-2 sticky top-[100px] 
          991px:mb-6 991px:relative 991px:top-auto md:min-w-full"
          >
            <DashTab href="/dashboard" icon={HomeWifi} titlte="اتاق ها" />
            <DashTab
              href="/dashboard/resturant"
              icon={ChemicalGlass}
              titlte="رستوران"
            />
            <DashTab
              href="/dashboard/coffee-shop"
              icon={Coffee}
              titlte="کافی شاپ"
            />
          </div>
          <div className="w-full border-[1px] border-black/10 h-[800px] mr-7 p-3 991px:mr-0">
            {children}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
export default DashboardContainer;

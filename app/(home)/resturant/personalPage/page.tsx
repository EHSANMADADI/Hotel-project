/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ArshiveRezerv from "@/components/shared/ArshiveRezerv/ArshiveRezerv";
import CancellRezerved from "@/components/shared/CancellRezerv/CancellRezerved";
import CurrentRezerv from "@/components/shared/CurrentRezerv/CurrentRezerv";
import React, { useState } from "react";

import Link from "next/link";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import useRole from "@/store/useRole";
export default function page() {
  // const { isAdmin } = useStore();
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const {role} = useRole()
  const [arshive, setArshive] = useState(false);
  const [currentRezerv, setCurrentRezerv] = useState(true);
  const [cancellRezerved, setCancellRezerved] = useState(false);
  return (
    <>
      {role !== 'Admin' && (
        <div className="w-full h-screen mt-14 bg-white pr-10">
          <div className="flex mb-5 pt-5 justify-start">
            <button
              onClick={() => {
                setArshive(false);
                setCurrentRezerv(true);
                setCancellRezerved(false);
              }}
              className={`${
                currentRezerv
                  ? "bg-gray-200 px-5 py-2 rounded-md border-2 border-blue-300 font-semibold hover:bg-blue-300 duration-300"
                  : "bg-transparent font-semibold border-none outline-none text-gray-500 mx-8"
              }`}
            >
              غذا های خریداری شده
            </button>
            <button
              onClick={() => {
                setArshive(true);
                setCancellRezerved(false);
                setCurrentRezerv(false);
              }}
              className={`${
                arshive
                  ? "bg-gray-200 px-5 py-2 rounded-md border-2 border-blue-300 font-semibold hover:bg-blue-300 duration-300"
                  : "bg-transparent font-semibold border-none outline-none text-gray-500 mx-8"
              }`}
            >
              خرید های گذشته
            </button>

            <button
              onClick={() => {
                setArshive(false);
                setCancellRezerved(true);
                setCurrentRezerv(false);
              }}
              className={`${
                cancellRezerved
                  ? "bg-gray-200 px-5 py-2 rounded-md border-2 border-blue-300 font-semibold hover:bg-blue-300 duration-300"
                  : "bg-transparent font-semibold border-none outline-none text-gray-500 mx-8"
              }`}
            >
              خریدهای لغو شده
            </button>
          </div>
          {currentRezerv && <CurrentRezerv Food={true} />},
          {arshive && <ArshiveRezerv Food={true} />},
          {cancellRezerved && <CancellRezerved Food={true} />}
        </div>
      )}

      {/* {(isAdmin === false || isAdmin === null) && (
        <div className="w-full h-screen flex justify-center items-center font-bold text-red-600 text-2xl ">
          
          شما به این صفحه دسترسی ندارید
          <div dir="ltr" className="p-5 m-2">
            <Link
              className="text-red-800 text-6xl md:text-3xl bg-white hover:text-blue-800"
              href="/resturant"
            >
              {" "}
              <IoArrowBackCircleSharp />{" "}
            </Link>
          </div>
        </div>
      )} */}
    </>
  );
}

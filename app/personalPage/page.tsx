'use client'
import ArshiveRezerv from "@/components/shared/ArshiveRezerv/ArshiveRezerv";
import CancellRezerved from "@/components/shared/CancellRezerv/CancellRezerved";
import CurrentRezerv from "@/components/shared/CurrentRezerv/CurrentRezerv";
import React, { useState } from "react";

export default function Page() {
  const [arshive, setArshive] = useState(false);
  const [currentRezerv, setCurrentRezerv] = useState(true);
  const [cancellRezerved, setCancellRezerved] = useState(false);
  return (
    <div className="w-full h-screen mt-14 bg-white pr-10">
      <div className="flex mb-5 pt-5 justify-start">
        <button
          onClick={() => {
            setArshive(false);
            setCurrentRezerv(true);
            setCancellRezerved(false);
          }}
          className={`${currentRezerv
              ? "bg-gray-200 px-5 py-2 rounded-md border-2 border-blue-300 font-semibold hover:bg-blue-300 duration-300"
              : "bg-transparent font-semibold border-none outline-none text-gray-500 mx-8"
            }`}
        >
          رزوهای در جریان
        </button>
        <button
          onClick={() => {
            setArshive(true);
            setCancellRezerved(false);
            setCurrentRezerv(false);

          }}
          className={`${arshive
              ? "bg-gray-200 px-5 py-2 rounded-md border-2 border-blue-300 font-semibold hover:bg-blue-300 duration-300"
              : "bg-transparent font-semibold border-none outline-none text-gray-500 mx-8"
            }`}
        >
          رزو های گذشته
        </button>

        <button
          onClick={() => {
            setArshive(false);
            setCancellRezerved(true);
            setCurrentRezerv(false);
          }}
          className={`${cancellRezerved
              ? "bg-gray-200 px-5 py-2 rounded-md border-2 border-blue-300 font-semibold hover:bg-blue-300 duration-300"
              : "bg-transparent font-semibold border-none outline-none text-gray-500 mx-8"
            }`}
        >
          رزو های لغو شده
        </button>
      </div>

      {
        currentRezerv && <CurrentRezerv Food={false} />
      },
      {
        arshive && <ArshiveRezerv Food={false} />
      },
      {
        cancellRezerved && <CancellRezerved Food={false} />
      }



    </div>
  );
}

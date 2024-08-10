import Link from 'next/link';
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { FaUserEdit } from 'react-icons/fa';

export default function MenuOfCetring() {
    return (
        <div className="flex z-50 text-center justify-between border-b-2 border-dashed p-5">
          <div className="flex justify-around">
            <Link
              className="mx-5 text-xl cursor-pointer hover:text-blue-500 duration-200"
              href="/resturant/personalPage"
            >
              {" "}
              خرید های من
            </Link>
          </div>
          <div className="flex">
            <div
              className=
                ' text-5xl z-50 m-0 border w-12 border-dashed border-yellow-200  flex rounded-full justify-center'
            >
              <Link href={"/ShopingCard"}>
                {" "}
                <CiShoppingCart className="p-1 cursor-pointer" />{" "}
              </Link>
            </div>
    
            <div
              className=
                'text-5xl mx-1 z-50 m-0 border w-12 border-none hover:text-blue-300 cursor-pointer  flex rounded-full justify-center'
            >
              <Link href={"/auth"}>
                <FaUserEdit className="p-1" />
              </Link>
            </div>
          </div>
        </div>
      );
}

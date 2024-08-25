"use client";
import useRole from "@/store/useRole";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser, FaUserEdit } from "react-icons/fa";

export default function MenuResturont() {
  const { role } = useRole()
  return (
    <div className="flex z-50 text-center justify-between  border-b-2 border-dashed pt-8 pb-6 px-8">
      <div className="flex justify-around items-center">
        <Link
          href="/"
          className="mx-5 text-xl cursor-pointer hover:text-blue-500 duration-200"
        >
          هتل
        </Link>

        <Link
          href="/coffee-shop"
          className="mx-5 text-xl cursor-pointer hover:text-blue-500 duration-200"
        >
          کافی شاپ
        </Link>
        <Link
          className="mx-5 text-xl cursor-pointer hover:text-blue-500 duration-200"
          href="/resturant/rezervTable"
        >
          رزرو میز{" "}
        </Link>
        <Link
          className="mx-5 text-xl cursor-pointer hover:text-blue-500 duration-200"
          href="/resturant/cetring"
        >
          کترینگ
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className=" text-5xl z-50 m-0 border w-12 border-dashed border-yellow-200  flex rounded-full justify-center">
          <Link href={"/ShopingCard"}>
            {" "}
            <CiShoppingCart className="p-1 cursor-pointer" />{" "}
          </Link>
        </div>

        <div className="text-5xl mx-1 z-50 m-0 border w-12 border-none hover:text-blue-300 cursor-pointer  flex rounded-full justify-center">
          {role === 'UnAuthenticated' ?
            <Link href={'/auth'}><FaUser title="ورود به صفحه ادمین" size={36} /></Link> :
            (
              role === "Admin" ?
                <Link href='/resturant/admin'> <FaUserEdit /> </Link>
                : <Link href={'/resturant/user'}><FaUser title="ورود به حساب کاربری" size={36} /></Link>
            )
          }
        </div>
      </div>
    </div>
  );
}

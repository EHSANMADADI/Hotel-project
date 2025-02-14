"use client";

import Link from "next/link";
import cls from "classnames";
import { HambergerMenu } from "iconsax-react";
import useMenu from "./use";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { CiLogout, CiShoppingCart } from "react-icons/ci";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { useCart } from '@/Context/FoodContextProvider'

import { useEffect, useState } from "react";
import useRole from "@/store/useRole";
import { IoLogOutOutline } from "react-icons/io5";

const links = [
  {
    name: "خانه",
    href: "/",
  },
  {
    name: "اتاق ها",
    href: "/rooms",
  },
  {
    name: "رستوران",
    href: "/resturant",
  },
  {
    name: "کافی شاپ",
    href: "/coffee-shop",
  },
  {
    name: "مقالات",
    href: "/blogs",
  },
  {
    name: "سوالات متدوال",
    href: "/faq",
  },
  {
    name: "درباره ما",
    href: "/about-us",
  },
];

const Menu = () => {
  const { setToggleMenu, showStickyMenu, toggleMenu, dashboardPage } = useMenu();
  const { role, changeRole } = useRole()

  return (
    <>
      <div
        className={cls(
          `inset-0 bottom-auto flex items-center justify-center z-[999] box-border border-b-[1px]`,
          showStickyMenu
            ? "fixed bg-white border-black/10"
            : "absolute border-transparent",
          { "bg-primary": dashboardPage }
        )}>

        <div className="container md:!px-0 relative">

          <div
            style={{
              height: toggleMenu
                ? links.length * 28.3 + links.length * 8 + 8 + "px"
                : "0px",
            }}
            className="hidden md:flex justify-between items-start flex-col text-lg absolute inset-x-0 
          top-full bg-white border-t-[1px] border-zinc-200 overflow-hidden transition-all duration-300 ease-in-out
          "
          >


            {links.map(({ href, name }, index) => (
              <Link
                key={name}
                className={cls(
                  {
                    "pr-3  pt-1 pb-2 border-b-[1px] border-black/10 w-full":
                      index === links.length - 1,
                  },
                  {
                    "mr-3  mb-1 mt-2": index === 0,
                  },
                  { "mr-3  my-1": index !== 0 && index !== links.length - 1 },
                  showStickyMenu ? "text-slate-600" : "text-zinc-500"
                )}
                href={href}
              >
                {name}
              </Link>

            ))}



          </div>
          <div
            className="flex justify-between
        items-center border-b-[1px] border-white/20 py-5 md:px-3"
          >
            <Link href={"/"} className="ml-3 relative">
              <img
                src={
                  showStickyMenu
                    ? "/images/logo-dark.png"
                    : "/images/logo-light.png"
                }
                width={showStickyMenu ? 100 : 150}
                height={50}
                alt="logo"
              />
            </Link>

            <HambergerMenu
              onClick={() => setToggleMenu(!toggleMenu)}
              className={cls(
                `cursor-pointer hidden md:inline-block`,
                showStickyMenu ? "text-primary" : "text-white"
              )}
            />
            <div className="flex justify-center items-center  md:hidden">
              {links.map(({ href, name }) => (
                <Link
                  key={name}
                  className={cls(
                    `mr-5`,
                    showStickyMenu
                      ? "text-slate-600 hover:text-primary"
                      : "text-white hover:text-zinc-300"
                  )}
                  href={href}
                >
                  {name}
                </Link>
              ))}

            </div>
          </div>
        </div>
        <div className="flex mx-8 sm:mx-4 sm:gap-1 gap-2 items-center">

          <div className={cls(`p-5`, showStickyMenu ? 'text-black' : 'text-white')}>
            <ThemeSwitcher />
          </div>

          <div className={cls(` text-5xl mx-1 z-50 m-0 border w-12 border-none hover:text-blue-300 cursor-pointer  flex rounded-full justify-center`, showStickyMenu ? "text-black" : "text-white")}>
            {role === 'UnAuthenticated' ?
              <Link href={'/auth'}><FaUser title="ورود به حساب کاربری" size={36} /></Link> :
              <IoLogOutOutline title="خروج از حساب کاربری" onClick={() => changeRole('UnAuthenticated')} />
            }

          </div>
        </div>
      </div>

    </>
  );
};
export default Menu;

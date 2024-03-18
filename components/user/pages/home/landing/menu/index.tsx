"use client";
import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import { HambergerMenu } from "iconsax-react";
import useMenu from "./use";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
  const { setToggleMenu, showStickyMenu, toggleMenu, dashboardPage } =
    useMenu();
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
              <Image
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
        
          

        
        <div className={cls(`p-5`,showStickyMenu?'text-black':'text-white')}>
          <ThemeSwitcher/>
        </div>

      </div>

    </>
  );
};
export default Menu;

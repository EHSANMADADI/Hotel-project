
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";


const ThemeSwitcher = ({}) => {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger= () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <IoMdSunny className="w-8 h-8 "  role="button" onClick={() => 
         setTheme('light')} />
      )
    }

    else {
      return (
        <FaRegMoon className="w-8 h-8" role="button" onClick={() => 
         setTheme('dark')} />
      )
    }
 };

  return (
    <>
    {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher;
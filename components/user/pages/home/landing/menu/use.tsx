import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) setShowStickyMenu(true);
      else setShowStickyMenu(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    showStickyMenu,
    toggleMenu,
    setToggleMenu,
    dashboardPage: pathname.includes("/dashboard"),
  };
};
export default useMenu;

import { usePathname } from "next/navigation";
import { UseDashTabImpl } from "./types";

const useDashTab = ({ href }: UseDashTabImpl) => {
  const pathname = usePathname();

  return { active: pathname === href };
};

export default useDashTab;

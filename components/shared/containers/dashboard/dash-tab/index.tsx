import Link from "next/link";
import DashTabImpl from "./types";
import useDashTab from "./use";
import cls from "classnames";

const DashTab = ({ href, icon: Icon, titlte }: DashTabImpl) => {
  const { active } = useDashTab({ href });
  return (
    <>
      <Link
        href={href}
        className={cls(
          `w-full p-3 flex justify-start items-center 
            transition-all duration-200 hover:bg-primary hover:text-white
            border-b-[1px] border-black/5 last:border-0`,
          active ? "text-white bg-primary" : "bg-zinc-200/60  text-zinc-700"
        )}
      >
        <Icon className="ml-2" />
        <span>{titlte}</span>
      </Link>
    </>
  );
};
export default DashTab;

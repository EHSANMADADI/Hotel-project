import RootContainerImpl from "./types";
import Menu from "@/components/user/pages/home/landing/menu";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <div className="bg-zinc-100">
        {/* <Menu /> */}
        {children}
      </div>
    </>
  );
};
export default RootContainer;

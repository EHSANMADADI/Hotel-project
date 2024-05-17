import FoodContextProvider from "@/Context/FoodContextProvider";
import Cover from "./cover";
import Details from "./details";
import Menu from "./menu";

const Landing = () => {
  return (
    <>
      <FoodContextProvider>
        <Menu />
        <div className="w-full h-screen relative z-50">
          <Cover />
          <Details />
        </div>
      </FoodContextProvider>
    </>
  );
};
export default Landing;

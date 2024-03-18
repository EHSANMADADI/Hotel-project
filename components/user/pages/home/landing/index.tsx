import Cover from "./cover";
import Details from "./details";
import Menu from "./menu";

const Landing = () => {
  return (
    <>
    <Menu/>
      <div className="w-full h-screen relative z-50">
        <Cover />
        <Details />
      </div>
    </>
  );
};
export default Landing;

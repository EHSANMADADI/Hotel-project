import FindNow from "./find-now";

const Details = () => {
  return (
    <>
      <div
        className="absolute inset-0 z-10 flex mx-auto
        justify-center items-center flex-col container">
        <span className="text-white mb-3 text-center">
          حس خوب آرامش و راحتی  را باما تجربه کنید
        </span>
        <h1
          className="text-8xl text-white font-black
         text-center leading-[1.2] max-w-4xl w-full md:text-5xl md:leading-[1.3]"
        >
          زیبایی را در هتل{" "}
          <span
            className="text-transparent  border-8 px-2"
            style={{
              WebkitTextStroke: "2px #fff",
            }}
          >
            میلاد
          </span>{" "}
          کشف کنید
        </h1>
        <FindNow />
      </div>
    </>
  );
};
export default Details;

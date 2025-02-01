
const Cover = () => {
  return (
    <>
      <div className="absolute inset-0 bg-blue-950 opacity-40"></div>
      <img
        src={"/images/miladtawer.jpg"}
        alt="landing"
        className="w-full h-full object-cover object-center"
        width={1500}
        height={800}
      />
    </>
  );
};
export default Cover;

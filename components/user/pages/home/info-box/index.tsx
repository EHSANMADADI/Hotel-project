import InfoSection from "./info-section";

const InfoBox = () => {
  return (
    <>
      <div className="container">
        <div className="container flex justify-start items-start flex-col py-10 pb-20 md:pb-16">
          <span className="text-primary font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-5xl md:text-4xl mb-6 leading-[1.4] text-blue-950">
            لورم ایپسوم متن <span className="text-primary">ساختگی</span>
          </h2>
          <InfoSection />
          <InfoSection reverse={true} />
        </div>
      </div>
    </>
  );
};
export default InfoBox;

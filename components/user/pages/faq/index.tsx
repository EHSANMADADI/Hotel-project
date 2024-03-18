import PagesBanner from "@/components/shared/pages-banner";
import Link from "next/link";
import FAQItem from "./item";

const FAQ = () => {
  return (
    <>
      <div className="w-full flex justify-start items-start flex-col">
        <PagesBanner alt="contact-us" src="/images/15.jpg">
          <span className="font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
            سوالات <span className="text-primary">متداول</span>
          </h2>
        </PagesBanner>
        <div className="container flex justify-start items-start flex-col my-14">
          <div className="max-w-md flex justify-start items-start flex-col">
            <span className="text-primary font-light text-sm mb-2">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </span>
            <h2 className="text-blue-950 font-extrabold text-4xl leading-[1.4]">
              از ما سوال بپرسید !!
            </h2>
            <Link
              className="mb-6 mt-2 text-primary underline underline-offset-4 cursor-pointer hover:opacity-75"
              href={"/about-us"}
            >
              سوالات خود را پیدا نکردید ؟
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-2xl flex justify-start items-start flex-col">
              {Array(6)
                .fill("")
                .map((_, i) => (
                  <FAQItem
                    open={i === 0}
                    desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته"
                    title="با استفاده از طراحان گرافیک"
                    key={i}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;

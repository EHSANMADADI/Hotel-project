import BlogCard from "@/components/shared/cards/primary/blog";
import PagesBanner from "@/components/shared/pages-banner";
import Pagination from "@/components/shared/pagination";
import BlogsPagination from "./pagination";

const Blogs = () => {
  return (
    <>
      <div className="w-full flex justify-start items-start flex-col">
        <PagesBanner alt="contact-us" src="/images/15.jpg">
          <span className="font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
            تجربیات <span className="text-primary">ما</span>
          </h2>
        </PagesBanner>
        <div className="container md:my-6 my-24 flex justify-start items-center flex-col">
          <div
            className="grid grid-cols-3 lg:gap-3 md:grid-cols-2 
        520px:grid-cols-1 gap-12"
          >
            {Array(6)
              .fill("")
              .map((_, i) => (
                <div
                  className="h-[550px] lg:h-[450px] md:h-[350px] 520px:h-[450px]"
                  key={i}
                >
                  <BlogCard
                    date={{ day: "4", month: "آبان" }}
                    desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"
                    href="/"
                    src="/images/15.jpg"
                    title="لورم ایپسوم متن ساختگی "
                  />
                </div>
              ))}
          </div>
          <div className="w-full mt-10 md:mt-5 sm:mt-3">
            <BlogsPagination />
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;

import BlogCard from "@/components/shared/cards/primary/blog";
import PagesBanner from "@/components/shared/pages-banner";
import Pagination from "@/components/shared/pagination";
import BlogsPagination from "./pagination";

const Blogs = () => {
  const obj=[{
    desc:"معرفی شهر های نزدیک تهران برای مسافرت",
    src:"/images/blog1.jpg"
  },
  {
    desc:"خانم‌ها بدون این وسایل ضروری نباید به سفر بروند!",
    src:"/images/neseseritool.jpg"
  }
]
  return (
    <>
      <div className="w-full flex justify-start items-start flex-col">
        <PagesBanner alt="contact-us" src="/images/15.jpg">
          <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
            مقالات <span className="text-primary">ما</span>
          </h2>
        </PagesBanner>
        <div className="container md:my-6 my-24 flex justify-center items-center flex-col">
          <div
            className="grid grid-cols-3 lg:gap-3 md:grid-cols-2 
        520px:grid-cols-1 gap-12"
          >
            {
              
              obj.map((item, i) => (
                <div
                  className="h-[550px] lg:h-[450px] md:h-[350px] 520px:h-[450px]"
                  key={i}
                >
                  <BlogCard
                    date={{ day: `${i+5}`, month: "آبان" }}
                    desc={item.desc}
                    href={`blogs/${i}`}
                    src={item.src}
                    title="لورم ایپسوم متن ساختگی "
                  />
                </div>
              ))}
          </div>
        
        </div>
      </div>
    </>
  );
};
export default Blogs;

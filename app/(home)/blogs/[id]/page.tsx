

import BlogOne from "@/components/shared/BlogsContent/BlogOne";
import BlogTow from "@/components/shared/BlogsContent/BlogTow";

const BlogsContents = ({ params }: any) => {
    const Id = params.id;

    switch (Id) {
        case '0': return (<BlogOne />);
        case '1': return (<BlogTow />);
        default: return (<h1>هیچ چیز وجود ندارد</h1>);
    }
};

// اضافه کردن تابع generateStaticParams
// export async function generateStaticParams() {
//     // لیست آی‌دی‌هایی که باید به صورت استاتیک تولید شوند
//     const blogIds = ['0', '1']; // مقادیر ثابت یا مقادیری که از API می‌آیند

//     // هر مقدار id را به عنوان پارامتر بازمی‌گرداند
//     return blogIds.map((id) => ({
//         id,
//     }));
// }

export default BlogsContents;

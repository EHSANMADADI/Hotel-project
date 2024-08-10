'use client'

import BlogOne from "@/components/shared/BlogsContent/BlogOne";
import BlogTow from "@/components/shared/BlogsContent/BlogTow";

const BlogsContents = ({ params }: any) => {
     const Id = params.id;
     switch (Id) {
          case '0': return (<BlogOne/>)
          case '1': return (<BlogTow/>)
       

          default: return (<h1>هیچ چیز وجود ندارد</h1>)
     }
}
export default BlogsContents;
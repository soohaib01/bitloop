import TopBlog from "../components/Blogs/topSection";
import FilterBlogs from "../components/Blogs/filterBlog";
import Blogs from "../components/Blogs/blogs";
import Action from "../components/newsletter";
import Head from "next/head";

const blogs = () => {
  return (
    <div>
      <Head>
        <title>Bitloops | Blogs</title>
      </Head>
      <TopBlog />
      {/* Blog Filtering Selection Here */}
      <FilterBlogs />
      {/* All Blog Component */}
      <Blogs />
      {/* Necessary From Footer Component */}
      <Action />
    </div>
  );
};

export default blogs;

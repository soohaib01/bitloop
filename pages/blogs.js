import TopBlog from "../components/Blogs/topSection";
import FilterBlogs from "../components/Blogs/filterBlog";
import Blogs from "../components/Blogs/blogs";

const blogs = () => {
  return (
    <div>
      <TopBlog />
      {/* Blog Filtering Selection Here */}
      <FilterBlogs />
      {/* All Blog Component */}
      <Blogs />
    </div>
  );
};

export default blogs;

import AllPosts from "../../components/posts/AllPosts";
const DUMMY_POSTS = [
  {
    slug: "getting-started-to-blog",
    title: "First Blog",
    image: "getting-started-nextjs.png",
    excerpt: "Building blog page for learning purposes",
    date: "2023-06-27",
  },
  {
    slug: "getting-started-to-blog2",
    title: "First Blog",
    image: "getting-started-nextjs.png",
    excerpt: "Building blog page for learning purposes",
    date: "2023-06-27",
  },
  {
    slug: "getting-started-to-blog3",
    title: "First Blog",
    image: "getting-started-nextjs.png",
    excerpt: "Building blog page for learning purposes",
    date: "2023-06-27",
  },
  {
    slug: "getting-started-to-blog4",
    title: "First Blog",
    image: "getting-started-nextjs.png",
    excerpt: "Building blog page for learning purposes",
    date: "2023-06-27",
  },
];
const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;

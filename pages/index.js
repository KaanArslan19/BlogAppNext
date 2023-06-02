import { Fragment } from "react";
import Hero from "../components/homePage/Hero";
import FeaturedPosts from "@/components/homePage/FeaturedPosts";

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

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

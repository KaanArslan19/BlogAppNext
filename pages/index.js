import { Fragment } from "react";
import Hero from "../components/homePage/Hero";
import FeaturedPosts from "@/components/homePage/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";
export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Kaan' Blog</title>
        <meta
          name="description"
          content="I post about programming, engineering, corporate life and work-life balance."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

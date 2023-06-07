import { getAllPosts } from "@/lib/posts-util";
import AllPosts from "../../components/posts/AllPosts";
import { Fragment } from "react";
import Head from "next/head";
const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of All tutorials and posts!" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;

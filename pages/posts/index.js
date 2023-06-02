import { getAllPosts } from "@/lib/posts-util";
import AllPosts from "../../components/posts/AllPosts";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
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

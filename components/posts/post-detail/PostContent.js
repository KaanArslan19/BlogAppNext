import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  slug: "getting-started-to-blog",
  title: "First Blog",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2023-06-27",
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

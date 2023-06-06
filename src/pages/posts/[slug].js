import PostContent from "@/components/posts/post-detail/post-content"
import { getPostData, getPostFiles } from "@/lib/post-util";

const PostDetailPage = ({ post }) => {
  return (
    <PostContent post={post} />
  )
}

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData();

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: false,
  }
}

export default PostDetailPage
import FeaturedPosts from "@/components/home-page/features-posts"
import Hero from "@/components/home-page/hero"
import { getFeaturedPosts } from "@/lib/post-util"

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    }
  }
}

export default HomePage
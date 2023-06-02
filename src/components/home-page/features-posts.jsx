import React from 'react';
import classes from './features-posts.module.css';
import PostsGrid from '../posts/posts-grid';

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
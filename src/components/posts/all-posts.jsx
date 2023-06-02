import React from 'react';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h3>All Posts</h3>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default AllPosts
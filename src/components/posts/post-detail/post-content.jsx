import React from 'react';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

const PostContent = () => {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath}  />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
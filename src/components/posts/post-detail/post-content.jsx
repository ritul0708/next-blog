import React from 'react';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image 
              src={`/images/posts/${post.slug}/${image.url}`} 
              alt={image.alt} 
              width={600} 
              height={300} 
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          language={language} 
          style={atomDark}
          children={value}
        />
      ) 
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}  />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
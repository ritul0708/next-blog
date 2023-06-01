import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/jack.png' alt='dummy-user' width={300} height={300} />
      </div>
      <h1>Hi, I am Ritul Jain</h1>
      <p>I write blogs about web development. Especially on JavaScript</p>
    </section>
  )
}

export default Hero
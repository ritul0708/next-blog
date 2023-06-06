import React, { useState } from 'react';
import classes from './contact-form.module.css';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredMessage, setEnteredMessage] = useState();

  const sendMessageHandler = (event) => {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })
    });
  }

  return (
    <section className={classes.contact} onSubmit={sendMessageHandler}>
      <h1>How Can I Help YOu?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id='email' 
              required 
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id='name' 
              required 
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              rows="5"
              required
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            ></textarea>
          </div>
          <div className={classes.action}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
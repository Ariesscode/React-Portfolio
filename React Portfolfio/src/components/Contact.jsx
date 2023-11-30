import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact-form.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('snervice_2kj8qx', 'template_nmjniar', form.current, '0F7q40iXe__uTE6yp')
      .then((result) => {
          console.log(result.text);
          console.log('message sent.')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Contact;



import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact-form.css';
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";



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
      <div className='contact-form-edit'>
        <div className="contact-info">
          <h1>Contact me</h1>
          <p>For inquiries, contact us at:</p>
          <p><FaPhoneAlt className='contact-icon' />
Phone: (407) 690-0081</p>
          <p><SiMinutemailer className='contact-icon' />
Email: abigailtop95@yahoo.com</p>
        </div>
    
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
    
        <div className="additional-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
    );
    
  
};
export default Contact;



import React, { useRef, useState } from "react";
import "./ContactScreen.css"; // Import the CSS file for styling
import emailjs from "@emailjs/browser";

const ContactScreen = () => {
  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [message,setMessage] = useState('')



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w69vrr5", "template_7r81j0j", form.current, {
        publicKey: "8YG5YdLmmyptBoyej",
      })
      .then(
        () => {
          alert('message send successfully')
          console.log("SUCCESS!");
        },
        (error) => {
          alert('message failed')
          console.log("FAILED...", error.text);
        }
      );
      setName('')
      setMail('')
      setMessage('')
  };

  return (
    <div className="contact__screen">
      <div className="contact__box">
        <h2>Contact</h2>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="from_email" value={mail} onChange={(e) => setMail(e.target.value)} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <input className="send__mail" type="submit" value="Send" />
          <p className="project__img">
        </p>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;

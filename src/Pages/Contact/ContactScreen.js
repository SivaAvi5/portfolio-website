import React, { useRef, useState } from "react";
import "./ContactScreen.css";
import emailjs from "@emailjs/browser";
import mailanimation from "../../Animation - bye.json";
import Lottie from "lottie-react";

const ContactScreen = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(mail)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm("service_w69vrr5", "template_7r81j0j", form.current, {
        publicKey: "8YG5YdLmmyptBoyej",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          console.log("SUCCESS!");
          setIsLoading(false);
        },
        (error) => {
          alert("Message failed. Please try again.");
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
    setName("");
    setMail("");
    setMessage("");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div ref={contactRef} className="contact">
      <h2>Contact</h2>
      {/* <p className="manual__email">manualy connect to us <a href="mailto:sivatamilarasan.dev@gmail.com">sivatamilarasan.dev@gmail</a></p> */}
      <div className="contact__screen">
        <div className="contact__box">
          <div className="contact__us">
            <form className="contact__form" ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input
                className="send__mail"
                type="submit"
                value={isLoading ? "Sending..." : "Let's Collaborate"}
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
        <Lottie
          animationData={mailanimation}
          loop={isLoading}
          className="lottie"
          style={{ width: 240 }}
        />
      </div>
      <p className="last__message">
        <span>M</span>ake it a <span>W</span>onderful <span>D</span>ay
        <span>!</span>
      </p>
    </div>
  );
};

export default ContactScreen;

import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Environment variable
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Environment variable
      );
      setFeedbackMessage("Your message was sent successfully!");
      e.target.reset();
    } catch (error) {
      setFeedbackMessage("Your message could not be sent. Please try again.");
    }
    // Clear the message after 5 seconds
    setTimeout(() => {
      setFeedbackMessage("");
    }, 5000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>murtessajabesa65@gmail.com</h5>
            <a
              href="mailto:murtessajabesa65@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Murtessa Jabesa</h5>
            <a
              href="http://linkedin.com/in/murtessa-jabesa-a36998295"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+251961806851</h5>
            <a
              href="https://wa.me/+251961806851"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send Message
            </a>
          </article>
        </div>
        <div className="form-message">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="7"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          {feedbackMessage && (
            <p className="feedback_message">{feedbackMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

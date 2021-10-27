import "./Contact.scss";
import {
  EmailTwoTone,
  LocationOn,
  PhoneAndroidRounded,
} from "@material-ui/icons";

import { useRef, useState } from "react";

// Email Config
import emailjs from "emailjs-com";

export const Contact = () => {
  const formRef = useRef();
  const [complete, setComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44ckheh",
        "template_ccxvu88",
        formRef.current,
        "user_sPKH6oZk84TwI8ATJjGGi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setComplete(true);

          // Reset contact form

          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className='contactMe'>
      <h2>Get In Touch</h2>
      <p>
        Have any question? Would you like to work with me? Have any criticism on
        what you see? Fear not. Hit me up and I will get back to you ASAP.
      </p>

      <div className='formContainer'>
        <div className='formText'>
          <span>
            <PhoneAndroidRounded className='icon' />
            <h5>Phone</h5>
            <p>+254 795 058 630</p>
          </span>
          <span>
            <EmailTwoTone className='icon' />
            <h5>Email</h5>
            <p>Shammahsteve.o@gmail.com</p>
          </span>
          <span>
            <LocationOn className='icon' />
            <h5>Location</h5>
            <p>Nairobi, Kenya</p>
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          id='contact'
          className='contactForm'
          ref={formRef}>
          <span>
            <input type='text' placeholder='Name' name='user_name' required />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input
              type='email'
              placeholder='Email'
              name='user_email'
              required
            />
          </span>
          <div>
            <textarea placeholder='Message' name='message' required></textarea>

            <button>Send Message</button>
            <span>{complete && "Thank you. Message has been sent."}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

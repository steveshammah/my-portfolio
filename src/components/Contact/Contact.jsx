import "./Contact.scss";
import {
  EmailTwoTone,
  LocationOn,
  PhoneAndroidRounded,
  HourglassFullOutlined,
  ReportProblem,
  CheckCircle,
} from "@material-ui/icons";

import { useEffect, useRef, useState } from "react";

// Email Config
import emailjs from "emailjs-com";

export const Contact = ({ setMenuActive }) => {
  const formRef = useRef();
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_44ckheh",
        "template_ccxvu88",
        formRef.current,
        "user_sPKH6oZk84TwI8ATJjGGi"
      )
      .then(
        (result) => {
          setLoading(false);
          setError(false);
          // Reset contact form
          formRef.current.reset();
        },
        (ApiError) => {
          console.log(ApiError.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section className="contactMe" onClick={() => setMenuActive(false)}>
      <div className="get-in-touch">
        <h2>Get In Touch</h2>
        <p>
          Have any questions? Would you like to work with me? <br />
          Hit me up and I will get back to you ASAP.
        </p>
      </div>
      <div className="container">
        <div className="formContainer">
          <form
            onSubmit={handleSubmit}
            id="contact"
            className="contactForm"
            ref={formRef}
          >
            <div className="inputs">
              <input type="text" placeholder="Name" name="user_name" required />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
            <div className="text-area">
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>

              <div className="button-alerts">
                <div
                  className={`notification ${
                    error === false ? "success" : undefined
                  } ${error === true ? "error" : undefined}}`}
                >
                  <div
                    className={`border ${error === true ? "error" : "success"}`}
                  >
                    {/* Alert Border */}
                  </div>

                  <div className="message">
                    {error === false && (
                      <>
                        <span>Thank you. Your message has been sent.</span>
                        <CheckCircle
                          className="icon"
                          style={{ color: "green" }}
                        />
                      </>
                    )}
                    {error && (
                      <>
                        <span>Oops something unexpected happened.</span>
                        <ReportProblem
                          className="icon"
                          style={{ color: "red" }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <button className={loading ? "loading" : undefined}>
                  {!loading && <span>Send Message</span>}
                  {loading && (
                    <>
                      <HourglassFullOutlined /> <span>Loading</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <span>
            <PhoneAndroidRounded className="icon" />
            <h5>Phone</h5>
            <p>+254 795 058 630</p>
          </span>
          <span>
            <EmailTwoTone className="icon" />
            <h5>Email</h5>
            <p>Shammahsteve.o@gmail.com</p>
          </span>
          <span>
            <LocationOn className="icon" />
            <h5>Location</h5>
            <p>Nairobi, Kenya</p>
          </span>
        </div>
      </div>
    </section>
  );
};

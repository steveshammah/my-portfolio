import "./Intro.scss";

import {
  Twitter,
  GitHub,
  ArrowDropDown,
  GetApp,
  LinkedIn,
} from "@material-ui/icons";
import Resume from "./cv-dark.pdf";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import avatar from "./cartoon-avatar.jpg";

export const Intro = ({ setMenuActive }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Hello world 🌍",
        "Steve Shammah here",
        "This is a kind reminder",
        "To declare variables 😁",
        "and not war 🕊",
        "...",
      ],
      backSpeed: 60,
      startDelay: 500,
    });
  }, []);

  return (
    <section className="introContainer" onClick={() => setMenuActive(false)}>
      <div className="leftContainer">
        <div className="backgroundContainer"></div>

        <div className="image">
          <img src={avatar} alt="AVATAR" />
          <div className="introText">
            <h2 ref={textRef}>{""}</h2>
          </div>
          <div className="nav-button">
            <a href="#contact">
              <button>Contact Me</button>
            </a>
            <a href={"#resume"} download={Resume}>
              <button className="cv-download">
                Resume <GetApp className="icon" />
              </button>
            </a>{" "}
          </div>
          <div className="personalText">
            <div className="social">
              <a
                href={`https://www.linkedin.com/in/steve-shammah-252b62191/`}
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                <LinkedIn className="icon" />{" "}
              </a>{" "}
              |
              <a
                href={`https://github.com/steveshammah`}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <GitHub className="icon" />{" "}
              </a>{" "}
              |
              <a
                href={`https://twitter.com/steveshammah_`}
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <Twitter className="icon" />
              </a>
            </div>
          </div>

          <a href="#about">
            <ArrowDropDown className="icon arrow-down" />
          </a>
        </div>
      </div>
      <div className="rightContainer" id="about">
        <div className="container">
          <div className="card">
            <h2 className="title">Personal Information</h2>
            <div className="card-body">
              <div className="meta-data">
                <span>
                  <strong>Residence:</strong> <span>Kenya</span>
                </span>
                <span>
                  <strong>City:</strong> <span>Nairobi</span>
                </span>
              </div>

              <div className="meta-text">
                <p>
                  I am a Software Engineer currently working as a{" "}
                  <i>Frontend Developer</i> at{" "}
                  <a
                    href={"https://www.savannahinformatics.com"}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Savannah Informatics
                  </a>{" "}
                  . Below are some of the projects I've worked on. <br />
                  Feel free to reach out through email or other means if you'd
                  like to have a chat.
                  <br /> <br />
                  <strong>
                    <small>Shammah out 🙋</small>
                  </strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#portfolio">
          <ArrowDropDown className="icon" />
        </a>
      </div>
    </section>
  );
};

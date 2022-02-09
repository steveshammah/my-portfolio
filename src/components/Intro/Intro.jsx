import "./Intro.scss";
import avatar from "./cartoon-avatar.jpg";
import {
  Twitter,
  GitHub,
  ArrowDropDown,
  GetApp,
  Star,
  LinkedIn,
} from "@material-ui/icons";
import CV from "./CV.pdf";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export const Intro = ({ setMenuActive }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Hi",
        "My name you ask?",
        "Steve Shammah",
        "A Full Stack Web Developer",
        "Enthusiastic about software development",
        "and all the errors that come with it.",
        "...",
      ],
      backSpeed: 60,
      startDelay: 500,
    });
    return () => {};
  }, []);

  const age = new Date().getFullYear() - 1996;

  return (
    <section className='introContainer' onClick={() => setMenuActive(false)}>
      <div className='leftContainer'>
        <div className='backgroundContainer'></div>

        <div className='image'>
          <img src={avatar} alt='AVATAR' />
          <div className='introText'>
            <h2 ref={textRef}>|</h2>
          </div>
          <div className='nav-button'>
            <a href='#contact'>
              <button>Contact Me</button>
            </a>
            <a href={CV} download='Steve_shammah-CV'>
              <button className='cv-download'>
                Resume <GetApp className='icon' />
              </button>
            </a>{" "}
          </div>
          <div className='personalText'>
            <div className='social'>
              <a
                href={`https://www.linkedin.com/in/steve-shammah-252b62191/`}
                target='_blank'
                rel='noreferrer'
                title='Linkedin'>
                <LinkedIn className='icon' />{" "}
              </a>{" "}
              |
              <a
                href={`https://github.com/Shammah08`}
                target='_blank'
                rel='noreferrer'
                title='GitHub'>
                <GitHub className='icon' />{" "}
              </a>{" "}
              |
              <a
                href={`https://twitter.com/steveshammah_`}
                target='_blank'
                rel='noreferrer'
                title='Twitter'>
                <Twitter className='icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='rightContainer'>
        <div className='container'>
          <div className='meta-data'>
            <h3>Personal Details</h3>
            <span>
              <h5>Residence:</h5> <h5>Kenya</h5>
            </span>
            <span>
              <h5>City:</h5> <h5>Nairobi</h5>
            </span>
            <span>
              <h5>Age:</h5> <h5>{age}</h5>
            </span>
          </div>
          <p>
            I Software Developer with experience and knowledge in designing and
            building web applications with some of the latest technologies.{" "}
            <br /> Key skills include: <br /> <Star className='icon' />{" "}
            Languages: JavaScript, Python, SQL. <br />
            <Star className='icon' /> Frameworks & Libraries: React JS,Django,
            Flask, JQuery <br /> <Star className='icon' /> Database systems:
            MYSQL.
            <br /> <Star className='icon' /> Others: HTML, CSS, Sass, Bootstrap.
          </p>
        </div>

        <a href='#portfolio'>
          <ArrowDropDown className='icon' />
        </a>
      </div>
    </section>
  );
};

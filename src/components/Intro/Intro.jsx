import "./Intro.scss";
import avatar from "./cartoon-avatar.jpg";
import {
  Twitter,
  GitHub,
  Instagram,
  ArrowDropDown,
  GetApp,
  Star,
} from "@material-ui/icons";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Hi",
        "My name you ask?",
        "Steve Shammah",
        "I am a web developer!",
        "and I enjoy building stuff.",
        "...",
      ],
      backSpeed: 60,
      startDelay: 500,
    });
    return () => {};
  }, []);

  const age = new Date().getFullYear() - 1996;

  return (
    <section className='introContainer'>
      <div className='backgroundContainer'></div>
      <div className='leftContainer'>
        <div className='image'>
          <img src={avatar} alt='AVATAR' />
          <div className='introText'>
            <h2 ref={textRef}>|</h2>
          </div>
          <div className='nav-button'>
            <a href='#contact'>
              <button>Contact Me</button>
            </a>
            <a href='#contact' title='Feature currently Unavailable'>
              <button className='cv-download'>
                Download CV <GetApp className='icon' />
              </button>
            </a>{" "}
          </div>
          <div className='personalText'>
            <div className='social'>
              <a
                href={`https://github.com/Shammah08`}
                target='_blank'
                rel='noreferrer'
                title='GitHub'>
                <GitHub className='icon' />{" "}
              </a>{" "}
              |{" "}
              <a
                href={`https://instagram.com/steveshammah`}
                target='_blank'
                rel='noreferrer'
                title='Instagram'>
                {" "}
                <Instagram className='icon' />{" "}
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
            I am a web developer with knowledge and practice in designing and
            building application with some of the up to date technologies.{" "}
            <br /> Key technologies include: <br /> <Star className='icon' />{" "}
            Languages: JavaScript, Python, SQL <br /> <Star className='icon' />{" "}
            Database systems: MYSQL <br />
            <Star className='icon' /> Frameworks & Libraries: React JS, Flask,
            JQuery <br /> <Star className='icon' /> Others: Html, CSS, Sass.
          </p>
        </div>

        <a href='#portfolio'>
          <ArrowDropDown className='icon' />
        </a>
      </div>
    </section>
  );
};

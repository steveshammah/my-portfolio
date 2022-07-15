import "./Intro.scss";
import avatar from "./cartoon-avatar.jpg";
import {
  Twitter,
  GitHub,
  ArrowDropDown,
  GetApp,
  LinkedIn,
} from "@material-ui/icons";
import CV from "./CV.pdf";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { images } from "./images";

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
        "A Software Engineer",
        "Enthusiastic about software development",
        "and all the errors that come with it.",
        "...",
      ],
      backSpeed: 60,
      startDelay: 500,
    });
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
                href={`https://github.com/steveshammah`}
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

              <a href='#about'>
          <ArrowDropDown className='icon arrow-down' />
        </a>
        </div>
      </div>
      <div className='rightContainer' id="about">
        <div className="container">
       
      
     
          <div className="card">
            
            
            <h2 className='title'>Personal Information</h2>
            <div className="card-body">
            <div className='meta-data'>
           <span>
             <strong>Residence:</strong> <span>Kenya</span>
            </span>
           <span>
             <strong>City:</strong> <span>Nairobi</span>
            </span>
           <span>
              <strong>Age:</strong> <span>{age}</span>
           </span>
            </div>
    
              <div className="meta-text">
              <p>
                I am a self-taught developer and have a passion for learning new things.
                Some of the technologies I have worked with include the below:
                </p>
                   <p>Currently I work at <a href={'https://www.savannahinformatics.com'} target={'_blank'} rel={'noreferrer'}>
                Savannah Informatics 
              </a> {' '}
                 as a Frontend Engineer.
                Part of a larger team that is currenlty engaged in building frontends for all the companies' web applications using Js, Typescript, React & Next Js.</p>
           </div>
            </div>
          </div>
          

              <div className="tech-stack">
            {images.map(({ label, img }, index) => (
              <div>
              <img src={img} alt="avatar" key={index} className='tech-image' title={label} /> 
              <span>{label}</span>
              </div>
            ))}
            
            </div>

     </div>
  
        <a href='#portfolio'>
          <ArrowDropDown className='icon' />
        </a>
      </div>
    </section>
  );
};



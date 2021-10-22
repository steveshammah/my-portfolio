import "./Intro.scss";
import { Twitter, GitHub, Instagram } from "@material-ui/icons";

export const Intro = () => {
  return (
    <div className='introContainer'>
      <div className='leftContainer'>
        <div className='image'>
          <img src='ME' alt='' />
          <div className='introText'>
            <h3>Steve Shammah Odhiambo.</h3>
            <h4>Web Developer</h4>
          </div>
          <div className='personalText'>
            <span>
              <h4>Residence:</h4> <h5>Kenya</h5>
            </span>
            <span>
              <h4>City:</h4> <h5>Nairobi</h5>
            </span>
            <span>
              <h4>Age:</h4> <h5>25</h5>
            </span>

            <div className='social'>
              <GitHub className='icon' /> | <Instagram className='icon' /> |{" "}
              <Twitter className='icon' />
            </div>
          </div>
          <div className='nav-button'>
            <a href='#contact'>
              <button>Contact Me</button>
            </a>
          </div>
        </div>
      </div>
      <div className='rightContainer'>Right</div>
    </div>
  );
};

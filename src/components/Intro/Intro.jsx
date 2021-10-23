import "./Intro.scss";
import avatar from "./cartoon-avatar.jpg";
import {
  Twitter,
  GitHub,
  Instagram,
  ArrowDropDown,
  CloudDownload,
  // DeleteIcon,
} from "@material-ui/icons";

export const Intro = () => {
  return (
    <div className='introContainer'>
      <div className='leftContainer'>
        <div className='image'>
          <img src={avatar} alt='AVATAR' />
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
            <a href=''>
              <button className='cv-download'>
                Download CV <CloudDownload className='icon' />
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className='rightContainer'>
        <h2>Information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ut
          magni accusamus sequi. Voluptatem deleniti perferendis enim quos,
          libero impedit. Nostrum quis nobis facere mollitia labore reiciendis
          eius voluptas excepturi! Labore quasi magnam fuga doloremque esse
          reprehenderit. Ducimus deleniti optio quod, sit provident dolore
          neque, qui quisquam, doloremque incidunt nesciunt deserunt quos? Rerum
          eligendi, iusto reiciendis alias eveniet vitae, reprehenderit voluptas
          expedita dolore nostrum fugiat incidunt dolores recusandae illo nisi
          minima nobis omnis atque quia iste? Quos voluptatem odit quis non
          vitae deserunt molestiae, magni natus sequi delectus incidunt
          perferendis repudiandae dolorem maxime atque, enim aperiam totam eos.
          Veritatis possimus maiores perspiciatis reprehenderit tenetur
          voluptatem?
        </p>

        <a href='#portfolio'>
          <ArrowDropDown className='icon' />
        </a>
      </div>
    </div>
  );
};

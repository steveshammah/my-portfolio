import "./Header.scss";
import "./Header.media.scss";

import { Person, Mail, Phone, ComputerTwoTone } from "@material-ui/icons";

export const Header = ({ menuActive, setMenuActive }) => {
  return (
    <header className={menuActive ? "activeHeader" : ""}>
      <div className='logo'>
        <a href='#home'>
          <ComputerTwoTone className='icon' />
        </a>
      </div>
      <div className='leftContainer'>
        <div className='itemContainer'>
          <Person className='icon' />
          <span>Steve Shammah</span>
        </div>
        <div className='itemContainer'>
          <Mail className='icon' />
          <span>Shammahsteve.o@gmail.com</span>
        </div>
        <div className='itemContainer'>
          <Phone className='icon' />
          <span>+254 795 058 630</span>
        </div>
      </div>
      <div className='rightContainer'>
        <div className='burgerNav' onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

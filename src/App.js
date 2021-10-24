import {useState} from 'react';
import "./App.scss";
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Intro} from './components/Intro/Intro';
import {Portfolio} from './components/Portfolio/Portfolio';
import {Experience} from './components/Experience/Experience';
import {Contact} from './components/Contact/Contact';

function App() {
  const [menuActive, setMenuActive] = useState(false)
  console.log(menuActive, 'Menu Active')

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }
  return (
    <div className='app' id='home'>
    <Header menuActive={ menuActive} setMenuActive={setMenuActive} onClick={handleMenuClick}/>
    <Menu menuActive={ menuActive} setMenuActive={setMenuActive}/>
    <Intro />
    <Portfolio/>
    <Experience/>
    <Contact />
    </div>
  );
}

export default App;

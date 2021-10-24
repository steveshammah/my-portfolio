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
 
  return (
    <div className='app' id='home'>
    <Header menuActive={ menuActive} setMenuActive={setMenuActive} />
    <Menu menuActive={ menuActive} setMenuActive={setMenuActive}/>
    <Intro menuActive={ menuActive} setMenuActive={setMenuActive}/>
    <Portfolio menuActive={ menuActive} setMenuActive={setMenuActive}/>
    <Experience menuActive={ menuActive} setMenuActive={setMenuActive}/>
    <Contact menuActive={ menuActive} setMenuActive={setMenuActive}/>
    </div>
  );
}

export default App;

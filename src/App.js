import {useState} from 'react';
import "./App.css";
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Intro} from './components/Intro/Intro';
import {Portfolio} from './components/Portfolio/Portfolio';

function App() {
  const [menuActive, setMenuActive] = useState(false)
  console.log(menuActive, 'Menu Active')

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }
  return (
    <>
    <Header menuActive={ menuActive} setMenuActive={setMenuActive} onClick={handleMenuClick}/>
    <Menu menuActive={ menuActive}/>
    <Intro />
    <Portfolio />
      <h2>Welcome!</h2>
    </>
  );
}

export default App;

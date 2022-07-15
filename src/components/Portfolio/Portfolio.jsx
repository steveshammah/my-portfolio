import "./Portfolio.scss";
import { AllProjects } from "./AllProjects";


export const Portfolio = ({ setMenuActive, menuActive }) => {
  return (
    <section
      className='portfolioContainer'
      id='portfolio'
      >
    <a href="#portfolio" className="title" >Projects</a>
           <AllProjects
          menuActive={menuActive}
          setMenuActive={setMenuActive}         
        />
      </section>


  );
};

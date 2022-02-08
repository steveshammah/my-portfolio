import "./Portfolio.scss";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { useState } from "react";

export const Portfolio = ({ setMenuActive, menuActive }) => {
  const [projectView, setProjectView] = useState(true);

  return (
    <section
      className='portfolioContainer'
      id='portfolio'
      onClick={() => setMenuActive(false)}>
      <span className='project-view'>
        {projectView ? (
          <>
            <h2 className='active'>Project</h2>
            <h2 onClick={() => setProjectView(!projectView)}>Work</h2>
          </>
        ) : (
          <>
            <h2 onClick={() => setProjectView(!projectView)}>Project</h2>
            <h2 className='active'>Work</h2>
          </>
        )}
      </span>{" "}
      {projectView ? (
        <Projects
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          setProjectView={setProjectView}
        />
      ) : (
        <Experience
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          setProjectView={setProjectView}
        />
      )}
    </section>
  );
};

import ProjectDetails from "./ProjectContainer";
import "./Portfolio.scss";
import { GitHub, Public } from "@material-ui/icons";
import { useState } from "react";

export const AllProjects = ({ setMenuActive }) => {
  const [activeProject, setActiveProject] = useState("");
  const projects = [
    {
      _name: "goodapp",
      name: "The Good App",
      stack: ["HTML", "Sass", "JavaScript", "React", "React Icons"],
      image: "",
      about: "An application model of an agency. ",
      desc: "An application model of an agency. Description",
      git: "thegoodapp",
      url: "thecompanyke.netlify.app",
    },
    {
      _name: "impala",
      name: "Impala Rugby App",
      stack: ["HTML", "Sass", "JavaScript", "React", "Material UI"],
      image: "",
      about: "A sports team website",
      desc: "An application model of an agency. Description",
      git: "",
      url: "impalarugby.netlify.app",
    },
    {
      _name: "portfolio",
      name: "My Portfolio",
      stack: ["HTML", "Sass", "JavaScript", "React", "Material UI"],
      image: "",
      about: "This is my personal portfolio",
      desc: "An application model of an agency. Description",
      git: "my-portfolio",
      url: "",
    },
    {
      _name: "farm",
      name: "The Farm",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      about: "This a chicken management system application.",
      desc: "An application model of an agency. Description",
      git: "theFarm",
      url: "",
    },
    {
      _name: "blog",
      name: "My Blog",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      about:
        "This is my personal blog used to document part of my learning process.",
      desc: "An application model of an agency. Description",
      git: "blog-2.0",
      url: "",
    },
    {
      _name: "manu",
      name: "Manchester United",
      stack: ["HTML", "CSS", "JavaScript", "JQuery"],
      image: "",
      about:
        "This website was modelled from the landing page of the official Manchester United application.",
      desc: "An application model of an agency. Description",

      git: "man-u-clone",
      url: "",
    },
  ];
  return (
    <section
      className='projectsWrapper'
      id='portfolio'
      onClick={() => setMenuActive(false)}>
      <div className='projectsContainer'>
        <ProjectDetails
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        {projects.map((project) => {
          return (
            <div
              className='project'
              key={project.name}
              onClick={() => setActiveProject(project)}>
              <h3>{project.name}</h3>
              <p>{project.about}</p>
              <h4>Technologies used:</h4>
              <span>
                {project.stack.map((item) => (
                  <i key={item}>{item}</i>
                ))}
              </span>

              <span>
                {project.url ? (
                  <a
                    href={`https://${project.url}`}
                    target='_blank'
                    rel='noreferrer'>
                    <Public className='icon' />
                  </a>
                ) : (
                  <Public
                    className='icon'
                    style={{ cursor: "not-allowed" }}
                    title='Not Live'
                  />
                )}
                <a
                  href={`https://github.com/steveshammah/${project.git}`}
                  target='_blank'
                  rel='noreferrer'>
                  <GitHub className='icon' />
                </a>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

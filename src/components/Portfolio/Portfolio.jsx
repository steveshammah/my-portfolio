import "./Portfolio.scss";
import { GitHub, Public } from "@material-ui/icons";

export const Portfolio = () => {
  const projects = [
    {
      name: "The Good App",
      stack: ["HTML", "CSS", "JavaScript", "React", "React Icons"],
      image: "",
      description: "An application model of an agency. ",
      git: "thegoodapp",
      url: "thecompanyke.netlify.app",
    },
    {
      name: "My Portfolio",
      stack: ["HTML", "Sass", "JavaScript", "React", "Material UI"],
      image: "",
      description: "This is my personal portfolio",
      git: "my-portfolio",
      url: "steveshammah.netlify.app",
    },
    {
      name: "The Farm",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      description: "This a chicken management system application.",
      git: "theFarm",
      url: "",
    },
    {
      name: "My Blog 2.0",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      description: "This is my personal blog version 2.0.",
      git: "blog-2.0",
      url: "",
    },
    {
      name: "Manchester United",
      stack: ["HTML", "CSS", "JavaScript", "JQuery"],
      image: "",
      description:
        "This website was modelled from the landing page of the official Manchester United application.",
      git: "man-u-clone",
      url: "",
    },
    {
      name: "My Blog",
      stack: ["HTML", "CSS", "BootStrap", "Python", "Flask", "MySQL"],
      image: "",
      description: "This is my personal blog.",
      git: "blog-app",
      url: "",
    },
  ];
  return (
    <section className='portfolioContainer' id='portfolio'>
      <h2>Portfolio</h2>
      <div className='projectsContainer'>
        {projects.map((project) => {
          return (
            <div className='project' key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
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
                  href={`https://github.com/Shammah08/${project.git}`}
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

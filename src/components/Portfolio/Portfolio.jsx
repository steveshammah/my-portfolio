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
      stack: ["HTML", "SCSS", "JavaScript", "React", "Material UI"],
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
      name: "My Blog",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      description: "This is my personal blog.",
      git: "blog-2.0",
      url: "",
    },
  ];
  return (
    <div className='portfolioContainer'>
      <h2 id='portfolio'>Portfolio</h2>
      <div className='projectsContainer'>
        {projects.map((project) => {
          return (
            <div className='project'>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span>
                {project.stack.map((item) => (
                  <i>{item}</i>
                ))}
              </span>

              <span>
                <a
                  href={`https://${project.url}`}
                  target='_blank'
                  rel='noreferrer'>
                  <Public className='icon' />
                </a>
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
    </div>
  );
};

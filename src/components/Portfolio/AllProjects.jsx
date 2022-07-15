import "./Portfolio.scss";
import { GitHub, Public } from "@material-ui/icons";

export const AllProjects = ({ setMenuActive }) => {
  
  const projects = [
    {
      _name: "goodapp",
      name: "The Good App",
      stack: ["HTML", "Sass", "JavaScript", "React", "React Icons"],
      image: "",
      about: "An application made for a media agency.  ",
      git: "thegoodapp",
      url: "uat-tgc.netlify.app",
    },
    {
      _name: "impala",
      name: "Impala Rugby App",
      stack: ["HTML", "Sass", "JavaScript", "React", "Material UI"],
      image: "",
      about: "A sports team web application for the team's content management.",
      
      git: "impala-rugby",
      url: "impalarugbyke.netlify.app",
    },
    {
      _name: "react_native",
      name: "React Native App",
      stack: ["React", "React Native", "JavaScript", 'Expo Cli'],
      image: "",
      about: "This is a cross platform mobile app. A follow up of the Good App.",
      git: "glowing-barnacle",
      url: "",
    },
    {
      _name: "farm",
      name: "The Farm",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      about: "This a chicken business management system application. For staff and product management.",
      
      git: "theFarm",
      url: "",
    },
    {
      _name: "blog",
      name: "My Blog",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      about:
        "This is my personal blog for documenting part of my learning process.",
      
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
     
        {projects.map((project) => {
          return (
            <div
              className='project'
              key={project.name}
            >
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

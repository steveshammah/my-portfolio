import "./Portfolio.scss";
import { GitHub, Public } from "@material-ui/icons";

export const AllProjects = ({ setMenuActive }) => {
  const projects = [
    {
      _name: "impala",
      name: "Impala Rugby Club",
      stack: ["HTML", "Tailwind", "Typescript", "NextJs", "Firebase"],
      image: "",
      about: "A sports team web application for the team's content management.",
      git: "impala-rugby",
      url: "impala-rugby.vercel.app",
    },
    {
      _name: "goodapp",
      name: "The Good Company",
      stack: ["HTML", "Sass", "JavaScript", "React", "React Icons"],
      image: "",
      about: "An application made for a media agency.  ",
      git: "thegoodapp",
      url: "uat-tgc.netlify.app",
    },

    {
      _name: "farm",
      name: "The Farm",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      about:
        "This a chicken business management system application. For staff and product management.",

      git: "theFarm",
      url: "",
    },
  ];
  return (
    <section
      className="projectsWrapper"
      id="portfolio"
      onClick={() => setMenuActive(false)}
    >
      <div className="projectsContainer">
        {projects.map((project) => {
          return (
            <div className="project" key={project.name}>
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
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Public className="icon" />
                  </a>
                ) : (
                  <Public
                    className="icon"
                    style={{ cursor: "not-allowed" }}
                    title="Not Live"
                  />
                )}
                <a
                  href={`https://github.com/steveshammah/${project.git}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub className="icon" />
                </a>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

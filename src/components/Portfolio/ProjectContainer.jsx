import ProjectDetails from "./ProjectDetails";
import ProjectSlides from "./ProjectSlides";

const ProjectContainer = ({ activeProject, setActiveProject }) => {
  return (
    <>
      {activeProject ? (
        <div className={`project-details ${activeProject && "active"}`}>
          <ProjectDetails activeProject={activeProject} />
          <ProjectSlides
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectContainer;

import { FaGithub } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";

const Page = () => {
  const projects = [
    {
      _name: "impala",
      name: "Impala Rugby Club",
      stack: ["HTML", "Tailwind", "Typescript", "NextJs", "Firebase"],
      image: "",
      about: "A sports team web application for the team's content management.",
      git: "https://impala-rugby.vercel.app/squads/members/steve-shammah",
      url: "impala-rugby.vercel.app",
    },
    {
      _name: "goodapp",
      name: "The Good Company",
      stack: ["HTML", "Sass", "JavaScript", "React", "React Icons"],
      image: "",
      about: "An application made for a media agency.  ",
      git: "https://github.com/steveshammah/thegoodapp",
      url: "uat-tgc.netlify.app",
    },

    {
      _name: "farm",
      name: "The Farm",
      stack: ["HTML", "CSS", "Python", "Flask", "JavaScript", "MySQL"],
      image: "",
      about:
        "This a chicken business management system application. For staff and product management.",

      git: "https://github.com/steveshammah/theFarm",
      url: "",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-3xl font-semibold">Projects</h2>

      <div className="lg:w-[80%] w-full mt-8 grid gap-3 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body p-0">
                <h2 className="card-title p-2">{project.name}</h2>
                <p className="p-2">{project.about}</p>

                <div className="card-actions border-t border-slate-50 h-12 w-full justify-center items-center">
                  <a
                    href={`https://github.com/steveshammah/${project.git}#readme`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 justify-center btn btn-sm bg-transparent outline-none border-none hover:bg-white text-black dark:text-white"
                  >
                    <MdDocumentScanner className="text-xl mr-2" /> Read More
                  </a>
                  {/* <span className="border border-slate-200 h-full w-[1px]" /> */}
                  <div className="divider lg:divider-horizontal"></div>
                  <a
                    href={`${project.git}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 btn btn-sm bg-transparent outline-none border-none hover:bg-white text-black dark:text-white"
                  >
                    <FaGithub className="text-xl mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;

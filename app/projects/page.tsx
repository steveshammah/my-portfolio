import { FaGithub } from "react-icons/fa";
import { projects } from "../../data";
import Link from "next/link";
import ProjectCard from "@components/project-card";

const Page = async () => {
  return (
    <section className="flex flex-col items-center justify-center mt-8 pb-28">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="lg:w-[80%] w-full mt-8 flex flex-col items-center  md:grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
        <Link
          href={`https://github.com/steveshammah`}
          rel="noreferrer"
          target="_blank"
          className="card md:w-96 w-[90%] h-[410px] flex flex-col bg-base-200 shadow-xl hover:translate-5 hover:scale-105 transition-all ease-in-out "
          title="GitHub"
        >
          <div className="flex relative w-full  items-center justify-center flex-grow h-[200px] rounded-t-md">
            <FaGithub className="text-2xl h-full w-full" />
          </div>
          <p className="flex h-full w-full justify-center items-center my-10">
            View GitHub Profile
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Page;

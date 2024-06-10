"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

interface Props {
  project: any;
}
const ProjectCard = ({ project }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "badge-info",
    "badge-warning",
    "badge-error",
    "badge-ghost",
    "badge-success",
    "badge-primary",
    "badge-secondary",
    "badge-accent",
  ];
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className=" card md:w-96 w-[90%] h-[410px] flex flex-col bg-base-200 shadow-xl hover:translate-5 hover:scale-105 transition-all ease-in-out "
    >
      <div className="flex relative w-full  items-center justify-center flex-grow h-[200px] rounded-t-md">
        <Image
          src={project?.image?.src}
          alt="AVATAR"
          fill
          className="rounded-t-md"
        />

        {isActive && (
          <div className="absolute bottom-0 transition-all ease-in-out duration-150 delay-1000 flex items-center flex-wrap w-full justify-evenly">
            {project?.stack?.map((tag: any, index: number) => (
              <div className={`badge ${options[index]} m-1`} key={index}>
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="card-body p-0 h-[210px]">
        <div className="flex items-center">
          <h2 className="card-title p-2">{project.name}</h2>{" "}
          {project?.version && (
            <span className="text-xs">v{project.version}</span>
          )}
          {project?.git && (
            <a href={`${project.git}`} target="_blank" rel="noreferrer">
              <FaGithub className="text-xl" />
            </a>
          )}
        </div>
        <p className="p-2 text-sm">{project.about}</p>

        <div className="card-actions border-t border-slate-50 h-12 w-full justify-center items-center">
          <a
            href={`${project.url}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 justify-center btn btn-sm bg-transparent outline-none border-none hover:bg-white  text-white hover:text-black"
          >
            <BiGlobe className="text-xl mr-2" /> Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

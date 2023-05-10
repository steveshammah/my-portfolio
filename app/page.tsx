import { FaLinkedin, FaGithub } from "react-icons/fa";
import avatar from "@public/code-head.svg";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row  bg-no-repeat bg-cover  lg:h-[calc(100vh-120px)] h-screen">
      <div className="flex flex-1 items-center justify-center flex-grow h-full  place-items-center">
        <Image src={avatar.src} alt="AVATAR" width={600} height={600} />
      </div>
      <div className="flex flex-1 flex-grow h-full items-center justify-center  place-items-center">
        <div className="flex flex-col justify-center lg:items-start items-center">
          <h1
            className={`font-[500] font-[sans serif]  lg:text-[1.5rem] text-[1rem] lg:w-[40vw] w-full text-center lg:text-start`}
          >
            Hi there, I'm Shammah. A Sofware Engineer with experience working
            across the stack and I currently build and maintain software at
            Savannah Informatics Ltd Kenya.
          </h1>

          <div className="flex items-center h-[90px]">
            <Link
              href={`https://www.linkedin.com/in/steve-shammah-252b62191/`}
              target="_blank"
              rel="noreferrer"
              title="Linkedin"
              className="btn btn-ghost btn-circle"
            >
              <FaLinkedin className="text-2xl" />{" "}
            </Link>{" "}
            |
            <Link
              href={`https://github.com/steveshammah`}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="btn btn-ghost btn-circle"
            >
              <FaGithub className="text-2xl" />{" "}
            </Link>{" "}
          </div>

          <div className="flex btn-group mt-4 mb-8">
            <button className="lg:btn btn-sm glass hover:btn-primary">
              Resume
            </button>
            <Link href="/contact" className="lg:btn btn-sm hover:btn-primary">
              Contact
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

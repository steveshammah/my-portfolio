import { FaLinkedin, FaGithub } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import avatar from "@public/ranks.jpeg";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center  bg-no-repeat bg-cover lg:h-[calc(100vh-120px)] h-screen">
      <div className="h-[200px]">
        <Image
          src={avatar.src}
          alt="AVATAR"
          width={200}
          height={200}
          className="rounded-full overflow-hidden hover:scale-110 transition-all ease-in shadow-md shadow-slate-50"
        />
      </div>
      <div className="flex items-center justify-center p-8  place-items-center">
        <div className="flex flex-col justify-center lg:items-start text-center items-center">
          <h1 className={` text-[1.4rem] lg:w-[40vw] w-full `}>
            Hi, I'm Shammah. A Software Engineer based in Nairobi,
            Kenya&nbsp;🇰🇪. I am currently working in the Frontend domain using
            Typescript and ReactJs for most of the projects i'm building.
          </h1>

          <small className="w-full py-2">
            I occasionally get my feet wet with some python and Django.
          </small>
          <div className="flex w-full justify-center items-center btn-group mt-8 mb-4">
            <Link
              href="/projects"
              className="lg:btn btn-sm glass hover:btn-primary"
            >
              Portfolio
            </Link>
            <Link href="/contact" className="lg:btn btn-sm hover:btn-primary">
              Contact
            </Link>{" "}
          </div>

          <div className="flex w-full justify-center items-center h-[90px]">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;

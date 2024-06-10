import Image from "next/image";
import avatar from "@public/ranks.jpeg";

import ExperienceTimeLapse from "@components/time-lapse";

const ExperiencePage = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="fixed top-1/3 left-5 hidden lg:flex flex-col items-center justify-start w-[400px] h-[400px]">
        <Image
          src={avatar.src}
          alt="AVATAR"
          width={200}
          height={200}
          className="lg:flex hidden rounded-full overflow-hidden shadow-md shadow-slate-50"
        />

        <div className="divider"></div>
        <div className="flex flex-col lg:ml-10">
          <div className="flex flex-col">
            <span>Steve Shammah</span>
            <span className="text-[10px]">Software Engineer</span>
          </div>

          <div className="flex flex-col mt-3 text-sm">
            <span>Nairobi, Kenya 🇰🇪</span>
          </div>
        </div>
      </div>

      <ExperienceTimeLapse />
    </div>
  );
};

export default ExperiencePage;

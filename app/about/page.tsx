"use client";

import Image from "next/image";
import avatar from "@public/ranks.jpeg";

import { useMemo, useState } from "react";

const jobs = [
  {
    company: "Savannah Informatics Ltd",
    joinDate: "February 2022",
    leaveDate: "Present",
    role: "Frontend Engineer",
    desc: [
      " Reconciled group and individual renewal rates based on information provided by the Underwriters and actuarial/pricing department using the organisation’s core system. The process generates invoices for finance approval.",
      " Resolved erroneous member problems, by providing support to staff who are directly in contact with customers and relied on information accessible by our department.",
      " Onboard members to their respective schemes and with their agreed upon benefits and sub-benefits within stipulated TAT.",
    ],
  },
  {
    company: "Resolution Insurance Ltd",
    joinDate: "July 2020",
    leaveDate: "January 2022",
    role: "Underwriting Executive",
    desc: [
      " Reconciled group and individual renewal rates based on information provided by the Underwriters and actuarial/pricing department using the organisation’s core system. The process generates invoices for finance approval.",
      " Resolved erroneous member problems, by providing support to staff who are directly in contact with customers and relied on information accessible by our department.",
      " Onboard members to their respective schemes and with their agreed upon benefits and sub-benefits within stipulated TAT.",
    ],
  },
  {
    company: "Resolution Insurance Ltd",
    joinDate: "April 2019",
    leaveDate: "July 2020",
    role: "Claims Executive",
    desc: [
      "Examined claims forms and other records to determine insurance coverage and validity.",
      "Reviewed and analyzed suspicious and potentially fraudulent insurance claims and flagged it to the relevant authorities",
      "Loaded member claims and invoices to the system for assesment by adjudicators and further payment or decline by finance department. ",
    ],
  },
  {
    company: "Fashtech Computers Ltd",
    joinDate: "September 2017",
    leaveDate: "December 2017",
    role: "IT Technician - Internship",
    desc: [
      " Gained experience with computer diagnostics of both hardware and software.",
      " Computers, laptops and other peripheral hardware repairs",
      "Networking: Setting up of Local Area Network and routing configuration",
    ],
  },
].reverse();

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number>(jobs.length - 1);

  const activeJob = useMemo(() => jobs.reverse()[activeIndex], [activeIndex]);

  return (
    <div>
      <section className="flex flex-col items-center justify-center mt-8">
        <div className="flex flex-col items-center justify-center lg:w-[80%]">
          <div className="flex items-center justify-start w-full">
            <Image
              src={avatar.src}
              alt="AVATAR"
              width={170}
              height={170}
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

          <div className="flex flex-col lg:flex-row lg:justify-start justify-center  w-full mt-8">
            <ul className="steps lg:steps-vertical steps-horizontal w-fit mr-3">
              {jobs.reverse().map((job, index) => (
                <li
                  className={`step cursor-pointer text-ellipsis ${
                    activeIndex >= index && "step-primary"
                  }`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {job.company}
                </li>
              ))}

              <li data-content="?" className="step step-neutral">
                <span className="animate-pulse">...</span>{" "}
              </li>
            </ul>

            <div className="flex-1 w-full pt-4 lg:ml-8">
              <div className="flex flex-col w-full flex-1">
                <div className="work" key={activeJob?.role}>
                  <div className="job-meta">
                    <h3 className="text-3xl">{activeJob?.company}</h3>

                    <h4 className="text-primary">
                      <i>{activeJob?.role}</i>
                    </h4>

                    <span className="pr-2">
                      From
                      <i className="pl-3">{activeJob?.joinDate} </i> To
                      <i> {activeJob?.leaveDate || "Present"}</i>{" "}
                    </span>
                  </div>
                  <div className="job-description">
                    <h3 className="text-lg font-semibold my-4">
                      Key responsibilities:{" "}
                    </h3>
                    <ul className="list-disc">
                      {activeJob?.desc.map((info: any) => {
                        return (
                          <li key={info} className="w-[80%] mb-3">
                            {info}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

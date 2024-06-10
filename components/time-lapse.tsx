"use client";

import { BiCheckCircle } from "react-icons/bi";
import { differenceInYears, differenceInMonths } from "date-fns";
import { jobs } from "../data";

export default function ExperienceTimeLapse() {
  function duration(start: any, end: any) {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    let years = differenceInYears(endDate, startDate);
    let months = differenceInMonths(
      endDate,
      new Date(startDate.setFullYear(startDate.getFullYear() + years))
    );

    if (months > 0) {
      if (months % 6 === 0) {
        return `${years} and half a yr`;
      } else {
        if (years) {
          return `${years}yrs and ${months}months`;
        }
        return `${months}months`;
      }
    }

    return `${years}${years > 1 ? `yrs` : "yr"}`;
  }

  return (
    <div className="flex lg:ml-[420px] items-center justify-center h-full w-full lg:w-[80%] overflow-y-auto min-h-fit py-28">
      <div className="flex flex-col overflow-y-auto items-center gap-12 min-h-fit">
        {jobs?.map((exp: any, index: number) => (
          <div
            key={`${index}`}
            className="flex-1 relative flex pb-8 last:pb-0
            h-auto flex-col items-baseline gap-6 md:flex-row md:gap-12"
          >
            <div className="absolute inset-0 flex w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
            </div>
            <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500 align-middle text-white">
              <BiCheckCircle className="text-white text-2xl" />
            </div>

            <div className="w-full  ">
              <div className="w-full pl-8">
                <div
                  className={`flex flex-wrap items-center step cursor-pointer text-ellipsis text-2xl font-semibold`}
                >
                  {exp.company}&nbsp;
                  <small className="text-xs"> {exp?.location}</small>
                </div>
                <div className="flex flex-col w-full flex-1 pl-2">
                  <div className="work" key={exp?.role}>
                    <div className="job-meta">
                      <h4 className="text-primary">
                        <i>{exp?.role}</i>
                      </h4>

                      <span className="pr-2 text-sm">
                        <i className="">{exp?.joinDate} </i> -
                        <i> {exp?.leaveDate || "Present"}</i>{" "}
                      </span>
                      <small className="text-xs text-primary">
                        {exp.joinDateLong &&
                          duration(exp.joinDateLong, exp.leaveDateLong)}
                      </small>
                    </div>
                    <div className="job-description">
                      <h3 className="text-lg font-semibold my-4">
                        Experience:{" "}
                      </h3>
                      <ul className="list-disc">
                        {exp?.desc.map((info: any) => {
                          return (
                            <li key={info} className="w-[90%] md:w-[80%] mb-3">
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
        ))}
      </div>
    </div>
  );
}

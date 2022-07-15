import "./Portfolio.scss";
import { useState, useEffect } from "react";

export const Experience = ({ setMenuActive }) => {
  const [activeYear, setActiveYear] = useState("Present");
  const [activeJob, setActiveJob] = useState([]);
  const workYears = ["Present", "2022", "2020", "2017"];

  useEffect(() => {
    setJob();

    // eslint-disable-next-line
  }, [activeYear]);

  //   Jobs Object
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
  ];

  //   Set Selected Job -Year
  const setJob = () => {
    // eslint-disable-next-line
    const job = jobs.filter((job) => job.leaveDate.includes(activeYear));
    setActiveJob(job);
  };

  //   Get clicked year
  const handleClick = (e) => {
    e.preventDefault();
    let selectedYear = e.target.innerHTML;

    setActiveYear(selectedYear);
  };
  return (
    <section
      className='ExperienceContainer'
      id='experience'
      onClick={() => setMenuActive(false)}>
      <div className='years'>
        {workYears.map((year) => (
          <span
            onClick={handleClick}
            className={year === activeYear ? "active" : ""}
            key={year}>
            {year}
          </span>
        ))}
      </div>
      {/* Map through active job */}
      <div className='jobs'>
        {activeJob.map((item) => {
          return (
            <div className='work' key={item.role}>
              <div className='job-meta'>
                <h3>
                  <i>{item.company}</i>
                </h3>

                <h4>
                  <i>{item.role}</i>
                </h4>

                <span className='work-period'>
                  From
                  <i>{item.joinDate} </i> To
                  <i> {item.leaveDate}</i>{" "}
                </span>
              </div>
              <div className='job-description'>
                <h3>Key responsibilities: </h3>
                <ul>
                  {item.desc.map((info) => {
                    return <li key={info}>{info}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

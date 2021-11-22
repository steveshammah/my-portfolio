import "./Experience.scss";
import { useState, useEffect } from "react";

export const Experience = ({ setMenuActive }) => {
  const [activeYear, setActiveYear] = useState(2020);
  const [activeJob, setActiveJob] = useState([]);

  useEffect(() => {
    setJob();
    return () => {};
    // eslint-disable-next-line
  }, [activeYear]);
  const workYears = [2020, 2019, 2017];

  //   Jobs Object
  const jobs = [
    {
      company: "Resolution Insurance Ltd",
      joinDate: 2020,
      leaveDate: "Present",
      role: "Underwriting Executive",
      desc: [
        " Reconciled group and individual renewal rates based on information provided by the Underwriters and actuarial/pricing department using the organisation’s core system. The process generates invoices for finance approval.",
        " Resolved erroneous member problems, by providing support to staff who are directly in contact with customers and relied on information accessible by our department.",
        " Onboard members to their respective schemes and with their agreed upon benefits and sub-benefits within stipulated TAT.",
      ],
    },
    {
      company: "Resolution Insurance Ltd",
      joinDate: 2019,
      leaveDate: 2020,
      role: "Claims Executive",
      desc: [
        "Examined claims forms and other records to determine insurance coverage and validity.",
        "Reviewed and analyzed suspicious and potentially fraudulent insurance claims and flagged it to the relevant authorities",
        "Loaded member claims and invoices to the system for assesment by adjudicators and further payment or decline by finance department. ",
      ],
    },
    {
      company: "Fashtech Computers Ltd",
      joinDate: 2017,
      leaveDate: 2018,
      role: "IT Technician",
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
    const job = jobs.filter((job) => job.joinDate == activeYear);
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
      <h2>Work Experience</h2>
      <div className='years'>
        {workYears.map((year) => (
          <span
            onClick={handleClick}
            // eslint-disable-next-line
            className={year == activeYear ? "active" : ""}
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

                <span>
                  <h4>
                    <i>{item.joinDate}</i>
                  </h4>{" "}
                  -{" "}
                  <h4>
                    <i>{item.leaveDate}</i>
                  </h4>
                </span>
              </div>
              <div className='job-description'>
                <h3>What I did...</h3>
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

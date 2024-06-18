import civisec from "@images/civisec.png";
import flair from "@images/flair.png";
import takeover from "@images/takeover.png";
import healthcloud from "@images/healthcloud.png";
import deforestation from "@images/deforestation.png";
import goodcompany from "@images/goodcompany.png";
import nci from "@images/nci.png";

export const jobs = [
  {
    company: "Flair Sports",
    joinDate: "Down Time",
    leaveDate: "",
    joinDateLong: "2023-06-01",
    leaveDateLong: "",
    location: "Onsite",
    role: "Tech Lead",
    desc: [
      "Working with Tony Jerym - Backend Eng, to help improve the sports management landscape in Kenya and beyond with the sports management application; Flair",
    ],
  },
  {
    company: "Reznik Infrastructure Systems.",
    joinDate: "January 2024",
    leaveDate: "",
    joinDateLong: "2024-01-01",
    leaveDateLong: "",
    location: "Israel - Remote",
    role: "Software Engineer",
    desc: [
      "Part of the Frontend team working on the core Web application - An Engineering project management application that tracks infrastructure projects, tasks and sub - tasks with their timelines, assignees and geographical locations (GIS, React, Prime, Styled Components)",
    ],
  },
  {
    company: "Savannah Informatics Ltd",
    joinDate: "February 2022",
    leaveDate: "February 2024",
    joinDateLong: "2022-02-08",
    leaveDateLong: "2024-02-08",
    role: "Software Engineer",
    location: "Nairobi - Hybrid",

    desc: [
      "Led the development and contributed in the design of the HealthCloud API- A knowledge base on how Slade360 works and how to build on top of the APIs and NCI Portal - A health navigator for people affected by cancer in partnership with the National Cancer Institute of Kenya. (Typescript, NextJs, GCP, K8s, Tailwind)",
      "Involved in re-platforming of some the existing fronted infrastructure from Google Cloud Run (GCR) to Google Kubernetes Engine (GKE) resulting in a Net reduced infrastructure cost across the company of about 50%.(Typescript NextJs, GCP, Sentry, MsClarity)",
      "Rewrote the internal Call Center Application that integrates with AfricasTalking Voice API to a maintainable and cost efficient stack i.e From Monorepo and GCR to Standalone NextJs and GKE (Nx, NextJs, Typescript, Tailwind, Docker, GCP)",
      "Part of the Core Slade360 Team that maintained and deployed the frontend of the Electronic Medical Records system (Javascript, AngularJs, Less, Grunt, Webpack, Ansible, Gitlab) ",
      "Trained and helped with the onboarding of new Frontend hires and interns",
    ],
  },
  {
    company: "Resolution Insurance Ltd",
    joinDate: "April 2019",
    joinDateLong: "2019-05-15",
    leaveDateLong: "2024-02-28",
    leaveDate: "January 2022",
    role: "Claims/Underwriting Executive",
    location: "Nairobi - Onsite",
    desc: [
      "Reconciled group and individual renewal rates based on information provided by the Underwriters and actuarial/pricing department using the organisation’s core system. The process generates invoices for finance approval.",
      "Evaluated claims forms and related documentation to determine insurance coverage and validity.",
      "Investigated and analyzed suspicious and potentially fraudulent insurance claims, reporting to relevant authorities.",
      "Entered member claims and invoices into the system for assessment by adjudicators, facilitating further payment or decline decisions by the finance department.",
    ],
  },
  {
    company: "Fashtech Ltd",
    joinDate: "August 2017",
    leaveDate: "December 2017",
    joinDateLong: "2017-08-6",
    leaveDateLong: "2017-12-18",
    role: "IT Technician - Internship",
    location: "Nairobi - Onsite",
    desc: [
      "Developed expertise in diagnosing and troubleshooting computer hardware and software issues.",
      "Performed repairs on computers, laptops, and other peripheral hardware.",
      "Set up Local Area Networks (LAN) and configured routing systems.",
    ],
  },
];

export const links = [
  {
    name: "Experience",
    href: "/experience",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Home",
    href: "/",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export const projects = [
  {
    name: "Flair Sports",
    stack: [
      "CRM",
      "Tailwind",
      "Typescript",
      "NextJs",
      "Firebase",
      "ShadCn",
      "React",
      "Django",
      "MySql",
    ],
    image: flair,
    about:
      "A sports management system for staff, facility and resource monitoring and management. Serves as an input portal for team information to be visualized to the public on TakeOver Media. - Tech Lead",
    git: "",
    url: "https://flairsports.co.ke",
  },
  {
    name: "TakeOver Media",
    stack: [
      "Tailwind",
      "Typescript",
      "NextJs",
      "Firebase",
      "ShadCn",
      "React",
      "Django",
      "MySql",
    ],
    image: takeover,
    about:
      "A media outlet and e-commerce platform for sports teams powered by Flair. - Tech Lead",
    git: "",
    url: "https://takeover-sports.vercel.app",
  },
  {
    name: "NCI Kenya - Portal",
    version: "0.0.1",
    stack: ["CSS", "NextJs", "K8s", "TypeScript", "Wagtail", "CMS", "GitLab"],
    image: nci,
    about:
      "A health navigator for people affected by cancer in partnership with the National Cancer Institute of Kenya to help make accessible valuable media content and locations to nearby cancer centers - Frontend Lead",

    git: "",
    url: "https://portal.ncikenya.go.ke/en",
  },
  {
    name: "HealthCloud API ",
    version: "1.0.0",
    stack: [
      "CSS",
      "NextJs",
      "K8s",
      "TypeScript",
      "GitLab",
      "Open Api",
      "Swagger",
    ],
    image: healthcloud,
    about:
      "An application aimed at exposing powerful internal APIs that power Slade360 an extensive healthcare ecosystem serving patients, medical providers and insurance companies. - Frontend Lead. ",

    git: "",
    url: "https://healthcloud.sh",
  },
  {
    name: "The Good App",
    stack: [
      "React",
      "Sass",
      "React Router",
      "Flutterwave",
      "YouTube Api",
      "Netlify",
    ],
    image: goodcompany,
    about:
      "This is a clone with multiple added features of the official website of the Good Company. A media Agency in Kenya. - Tech Lead",

    git: "https://github.com/steveshammah/thegoodapp",
    url: "https://uat-tgc.netlify.app/",
  },
  {
    name: "Civisec",
    version: "1.0.0",
    stack: ["NextJs", "TypeScript", "Firebase", "Vercel"],
    image: civisec,
    about:
      "An assessment tool designed to help you identify strengths and weaknesses in your cybersecurity approach, as well as provide resources for improvement. - Frontend Lead",
    git: "",
    url: "https://civisec.io",
  },

  {
    name: "Deforestation in Kenya",
    stack: ["React", "Chakra Ui", "Netlify"],
    image: deforestation,
    about:
      "This is a simple application that shows the effects of deforestation across different geographical areas in Kenya over time. - Tech Lead",

    git: "https://github.com/robinkiplangat/ke_deforestation",
    url: "https://deforestationke.netlify.app/",
  },
];

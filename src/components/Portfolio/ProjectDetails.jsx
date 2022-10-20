// import { GitHub, Public } from "@material-ui/icons";
// import { images } from "../images/images";

// const ProjectDetails = ({ activeProject }) => {
//   const slides = images[activeProject._name];

//   return (
//     <div className='details'>
//       <h2>{activeProject.name}</h2>

//       <img src={slides[0]} alt={activeProject.name} />
//       <h3>{activeProject.about}</h3>
//       <div className='meta'>
//         <div className='stack'>
//           <h4>Technologies used:</h4>

//           <span>
//             {activeProject.stack.map((item, index) => (
//               <i key={index * 1000}>{item}</i>
//             ))}
//           </span>
//         </div>

//         <p>{activeProject.desc}</p>
//         <span>
//           {activeProject.url ? (
//             <>
//               Live Demo:{" "}
//               <a
//                 href={`https://${activeProject.url}`}
//                 target='_blank'
//                 rel='noreferrer'>
//                 <Public className='icon' />
//               </a>
//             </>
//           ) : (
//             <>
//               Not Deployed:
//               <Public
//                 className='icon'
//                 style={{ cursor: "not-allowed" }}
//                 title='Not Live'
//               />
//             </>
//           )}
//           <>
//             GitHub Repo:{" "}
//             <a
//               href={`https://github.com/steveshammah/${activeProject.git}`}
//               target='_blank'
//               rel='noreferrer'>
//               <GitHub className='icon' />
//             </a>
//           </>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
export {};

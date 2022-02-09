import { useEffect, useState } from "react";
import { images } from "../images/images";

const ProjectSlides = ({ activeProject, setActiveProject }) => {
  const [image, setImage] = useState("");
  const slides = images[activeProject._name];

  useEffect(() => {
    setImage(slides[0]);
  }, []);

  return (
    <div className='slides'>
      <strong className='close' onClick={() => setActiveProject("")}>
        X
      </strong>

      <div className='img-container'>
        <img src={image} alt={activeProject.name} />

        <div className='slider'>
          <div className='images'>
            {slides.map((src) => {
              return (
                <img
                  src={src}
                  alt=''
                  className='image'
                  onClick={() => setImage(src)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlides;

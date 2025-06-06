/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export const ProjectItem = (props) => {
  const { project } = props;
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    if (imageIndex === 2) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const showPrevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(2);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
      <div className=" relative aspect-video overflow-hidden">
        <div className=" absolute h-full hidden group-hover:flex justify-center items-center p-2  ">
          <div
            className="bg-card/60 rounded-full cursor-pointer "
            onClick={showPrevImage}
          >
            <ChevronLeft />
          </div>
        </div>
        <div className=" absolute right-0 h-full hidden group-hover:flex justify-center items-center p-2 ">
          <div
            className="bg-card/60 rounded-full cursor-pointer"
            onClick={showNextImage}
          >
            <ChevronRight />
          </div>
        </div>
        <img
          src={project.image[imageIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 "
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 text-justify">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={project.demoUrl}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

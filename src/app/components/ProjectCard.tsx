import React from "react";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4">
      {/* Image Section */}
      <div
        className="h-24 w-24 md:h-32 md:w-32 bg-gray-100 flex-shrink-0" // Smaller size for the image container
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain", // Ensures the whole image is visible
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image within the container
        }}
      ></div>

      {/* Text Section */}
      <div className="ml-4 flex-1 text-black">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
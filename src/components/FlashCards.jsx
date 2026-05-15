import React from "react";

const FlashCard = ({
  title,
  description,
  image,
  tech = [],
  demoLink,
  repoLink,
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 w-80">
      
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-cyan-600 px-3 py-1 rounded-md hover:bg-cyan-700"
            >
              Live Demo
            </a>
          )}

          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-600 border border-cyan-600 px-3 py-1 rounded-md hover:bg-cyan-50"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
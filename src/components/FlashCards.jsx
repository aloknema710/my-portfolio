import {
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

const FlashCard = ({
  title,
  description,
  image,
  tech,
  demoLink,
  repoLink,
  number,
}) => {
  return (
    <div
      className="
      project-card
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      "
    >
      {/* Spotlight */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Image */}

      <div className="relative overflow-hidden h-72">
        <img
          src={image}
          alt={title}
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent" />

        <span
          className="
          absolute
          right-6
          top-6
          text-6xl
          font-black
          text-white/10
          "
        >
          {number}
        </span>
      </div>

      {/* Content */}

      <div className="relative p-8">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-zinc-400 mb-6">
          {description}
        </p>

        {/* Tech Pills */}

        <div className="flex flex-wrap gap-3 mb-8">
          {tech.map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}

        <div className="flex gap-4">
          <a
            href={demoLink}
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white
            text-black
            px-5
            py-3
            font-medium
            transition
            hover:scale-105
            "
          >
            Live Demo
            <FiArrowUpRight />
          </a>

          <a
            href={repoLink}
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            px-5
            py-3
            transition
            hover:bg-white/10
            "
          >
            Code
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;




// import React from "react";

// const FlashCard = ({
//   title,
//   description,
//   image,
//   tech = [],
//   demoLink,
//   repoLink,
// }) => {
//   return (
//     <div className="group bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 w-80">
      
//       {/* Image */}
//       <div className="h-48 overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col gap-3">
        
//         {/* Title */}
//         <h2 className="text-lg font-semibold text-gray-800">
//           {title}
//         </h2>

//         {/* Description */}
//         <p className="text-sm text-gray-600 line-clamp-3">
//           {description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {tech.map((item, index) => (
//             <span
//               key={index}
//               className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-md"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3 mt-2">
//           {demoLink && (
//             <a
//               href={demoLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm text-white bg-cyan-600 px-3 py-1 rounded-md hover:bg-cyan-700"
//             >
//               Live Demo
//             </a>
//           )}

//           {repoLink && (
//             <a
//               href={repoLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm text-cyan-600 border border-cyan-600 px-3 py-1 rounded-md hover:bg-cyan-50"
//             >
//               Code
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlashCard;
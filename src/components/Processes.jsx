import React, { useState } from "react";

const Processes = () => {
  const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const steps = [
    {
      id: 1,
      title: "Align",
      text: "Cut through ambiguity, define the goal, and set a clear decision bar",
      media:
        "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Plan",
      text: "Structure the approach and map out the execution path",
      media:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Build",
      text: "Turn ideas into tangible, working solutions",
      media:
        "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Test",
      text: "Validate, refine, and ensure everything performs as expected",
      media:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Launch",
      text: "Stay close through implementation and QA for smooth delivery",
      media:
        "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop",
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen px-6 md:px-16 py-24 bg-[#050816] text-white overflow-hidden"
    >
      {/* Ambient Background Blobs */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] bg-purple-500/10 blur-[180px]" />

      {/* Floating Preview */}
      {hovered && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            top: position.y + 20,
            left: position.x + 20,
          }}
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <img
              src={steps.find((s) => s.id === hovered)?.media}
              className="w-72 h-44 object-cover"
              alt="preview"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-24">
        <span className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
          Workflow
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
          Building
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Exceptional Products
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          A structured process that transforms ideas into scalable,
          production-ready digital experiences.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-10">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={step.id}
              onMouseEnter={() => setHovered(step.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

              {/* Card */}
              <div
                className={`
                  relative flex flex-col md:flex-row items-start md:items-center justify-between
                  gap-10 md:gap-20
                  p-10
                  rounded-[32px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all duration-700
                  hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10
                `}
              >
                {/* Spotlight Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>

                {/* Big Background Number */}
                <div
                  className="
                    absolute right-6 top-4
                    text-[120px]
                    font-black
                    text-white/5
                    group-hover:text-cyan-400/10
                    transition
                  "
                >
                  {String(step.id).padStart(2, "0")}
                </div>

                {/* Left Number (mobile fallback) */}
                {!isEven && (
                  <div className="text-gray-500 text-xl md:hidden">
                    {String(step.id).padStart(2, "0")}
                  </div>
                )}

                {/* Content */}
                <div className="max-w-2xl relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold transition group-hover:text-cyan-300">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-lg md:text-xl text-zinc-400 leading-relaxed transition group-hover:text-zinc-200">
                    {step.text}
                  </p>
                </div>

                {/* Right Number (desktop alternating) */}
                {isEven && (
                  <div className="hidden md:block text-gray-500 text-2xl">
                    {String(step.id).padStart(2, "0")}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Processes;






// import React, { useState } from "react";

// const Processes = () => {
//   const [hovered, setHovered] = useState(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Align",
//       text: "Cut through ambiguity, define the goal, and set a clear decision bar",
//       media: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 2,
//       title: "Plan",
//       text: "Structure the approach and map out the execution path",
//       media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 3,
//       title: "Build",
//       text: "Turn ideas into tangible, working solutions",
//       media: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 4,
//       title: "Test",
//       text: "Validate, refine, and ensure everything performs as expected",
//       media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 5,
//       title: "Launch",
//       text: "Stay close through implementation and QA, so the build & test keeps on",
//       media: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   return (
//     <div
//       className="px-4 py-10 md:px-10 lg:px-20 min-h-screen relative m-20"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Floating Preview */}
//       {hovered && (
//         <div
//           className="fixed pointer-events-none z-50 transition-transform duration-75"
//           style={{
//             top: position.y + 20,
//             left: position.x + 20,
//           }}
//         >
//           {/* IMAGE VERSION */}
//           <img
//             src={steps.find((s) => s.id === hovered)?.media}
//             alt="preview"
//             className="w-72 h-44 object-cover rounded-xl shadow-2xl"
//           />

//           {/* VIDEO VERSION (optional)
//           <video
//             src={steps.find((s) => s.id === hovered)?.media}
//             autoPlay
//             loop
//             muted
//             className="w-72 h-44 object-cover rounded-xl shadow-2xl"
//           />
//           */}
//         </div>
//       )}

//       {/* Title */}
//       <div className="py-5">
//         <h1 className="text-3xl md:text-5xl font-bold">Our Processes</h1>
//       </div>

//       <hr />

//       {/* Steps */}
//       <div className="flex flex-col justify-center gap-5">
//         {steps.map((step, index) => {
//           const isEven = index % 2 === 1;

//           return (
//             <React.Fragment key={step.id}>
//               <hr />

//               <div
//                 // className="h-60 flex flex-row justify-between gap-20 items-center"
//                 className="
//                   min-h-[220px]
//                   flex
//                   flex-col
//                   md:flex-row
//                   justify-between
//                   items-start
//                   md:items-center
//                   gap-6
//                   md:gap-20
//                   py-8
//                   "
//                 onMouseEnter={() => setHovered(step.id)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 {/* Left side */}
//                 {!isEven && (
//                   <h2 className="m-5 text-gray-500 text-2xl">
//                     {String(step.id).padStart(2, "0")}
//                   </h2>
//                 )}

//                 {/* <div className="flex flex-col py-5 m-7 gap-3 max-w-xl"> */}
//                 <div className="flex flex-col gap-3 max-w-xl">
//                   <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
//                   <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed">{step.text}</p>
//                 </div>

//                 {/* Right side */}
//                 {isEven && (
//                   <h2 className="m-5 text-gray-500 text-2xl">
//                     {String(step.id).padStart(2, "0")}
//                   </h2>
//                 )}
//               </div>
//             </React.Fragment>
//           );
//         })}

//         <hr />
//       </div>
//     </div>
//   );
// };

// export default Processes;
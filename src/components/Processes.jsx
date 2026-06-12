// import React from 'react'

// const Processes = () => {
//   return (
//     <div className='p-5 min-h-screen relative m-20'>
//         <div className='p-5 m-10 text-5xl'>
//             <h1>Our Processes</h1>
//         </div>

//             <hr />

//         <div className='flex flex-col justify-center gap-5'>
//             <hr />
//             <div className='h-60 flex flex-row justify-between gap-20'>
//                 <h2 className='m-5 text-gray-500'>01</h2>
//                 <div className='flex flex-col py-5 m-7 gap-3'>
//                     <h3 className='left-0'>Align</h3>
//                     <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
//                 </div>
//             </div>
//             <hr />
//             <div className='h-60 flex flex-row justify-between gap-20'>
//                 <div className='flex flex-col py-5 m-7 gap-3'>
//                     <h3 className='left-0'>Align</h3>
//                     <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
//                 </div>
//                 <h2 className='m-5 text-gray-500'>02</h2>
//             </div>
//             <hr />
//             <div className='h-60 flex flex-row justify-between gap-20'>
//                 <h2 className='m-5 text-gray-500'>03</h2>
//                 <div className='flex flex-col py-5 m-7 gap-3'>
//                     <h3 className='left-0'>Align</h3>
//                     <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
//                 </div>
//             </div>
//             <hr />
//             <div className='h-60 flex flex-row justify-between gap-20'>
//                 <div className='flex flex-col py-5 m-7 gap-3'>
//                     <h3 className='left-0'>Align</h3>
//                     <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
//                 </div>
//                 <h2 className='m-5 text-gray-500'>04</h2>
//             </div>
//             <hr />
//             <div className='h-60 flex flex-row justify-between gap-20'>
//                 <h2 className='m-5 text-gray-500'>05</h2>
//                 <div className='flex flex-col py-5 m-7 gap-3'>
//                     <h3 className='left-0'>Align</h3>
//                     <p className='text-4xl max-w-lg'>Stay close through implementation and QA, so the build & test keeps on</p>
//                 </div>
//             </div>
//             <hr />
//         </div>
        
//     </div>
//   )
// }

// export default Processes



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
      media: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Plan",
      text: "Structure the approach and map out the execution path",
      media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Build",
      text: "Turn ideas into tangible, working solutions",
      media: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Test",
      text: "Validate, refine, and ensure everything performs as expected",
      media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Launch",
      text: "Stay close through implementation and QA, so the build & test keeps on",
      media: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      className="px-4 py-10 md:px-10 lg:px-20 min-h-screen relative m-20"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Preview */}
      {hovered && (
        <div
          className="fixed pointer-events-none z-50 transition-transform duration-75"
          style={{
            top: position.y + 20,
            left: position.x + 20,
          }}
        >
          {/* IMAGE VERSION */}
          <img
            src={steps.find((s) => s.id === hovered)?.media}
            alt="preview"
            className="w-72 h-44 object-cover rounded-xl shadow-2xl"
          />

          {/* VIDEO VERSION (optional)
          <video
            src={steps.find((s) => s.id === hovered)?.media}
            autoPlay
            loop
            muted
            className="w-72 h-44 object-cover rounded-xl shadow-2xl"
          />
          */}
        </div>
      )}

      {/* Title */}
      <div className="py-5">
        <h1 className="text-3xl md:text-5xl font-bold">Our Processes</h1>
      </div>

      <hr />

      {/* Steps */}
      <div className="flex flex-col justify-center gap-5">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;

          return (
            <React.Fragment key={step.id}>
              <hr />

              <div
                // className="h-60 flex flex-row justify-between gap-20 items-center"
                className="
                  min-h-[220px]
                  flex
                  flex-col
                  md:flex-row
                  justify-between
                  items-start
                  md:items-center
                  gap-6
                  md:gap-20
                  py-8
                  "
                onMouseEnter={() => setHovered(step.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Left side */}
                {!isEven && (
                  <h2 className="m-5 text-gray-500 text-2xl">
                    {String(step.id).padStart(2, "0")}
                  </h2>
                )}

                {/* <div className="flex flex-col py-5 m-7 gap-3 max-w-xl"> */}
                <div className="flex flex-col gap-3 max-w-xl">
                  <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                  <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed">{step.text}</p>
                </div>

                {/* Right side */}
                {isEven && (
                  <h2 className="m-5 text-gray-500 text-2xl">
                    {String(step.id).padStart(2, "0")}
                  </h2>
                )}
              </div>
            </React.Fragment>
          );
        })}

        <hr />
      </div>
    </div>
  );
};

export default Processes;
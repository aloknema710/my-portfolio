
// import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Experience = () => {
    const first = useRef()

    const moveText = function(){
      gsap.to(first.current,{
        
      })
    }

    // useGSAP()
  return (
    <div onScroll={moveText} className='min-h-screen overflow-hidden'>
        <h1 ref={first} className='text-[40vw]'>Experience </h1>
    </div>
  )
}

export default Experience



// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Experience = () => {
//   const container = useRef();
//   const textRef = useRef();

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(textRef.current, {
//         x: "-50%", // adjust based on text length
//         ease: "none",
//         scrollTrigger: {
//           trigger: container.current,
//           start: "top top",
//           end: "+=200%", // more scroll = smoother movement
//           scrub: 2,
//           pin: true,
//         },
//       });
//     }, container);

//     return () => ctx.revert(); // cleanup (important in React)
//   }, []);

//   return (
//     <div
//       ref={container}
//       className="h-screen w-full overflow-hidden flex items-center"
//     >
//       <div
//         ref={textRef}
//         className="flex w-max whitespace-nowrap"
//       >
//         <h1 className="text-[45vw] font-black text-white">
//           Experience
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlashCard from "../components/FlashCards";
import projects from "../../projects.js";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

const Projects = () => {
  const container = useRef();

  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  });

  // useGSAP(() => {
  //   gsap.from(".project-card", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //     stagger: 0.15,
  //     ease: "power4.out",
  //   });
  // }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      <section
        ref={container}
        className="relative max-w-7xl mx-auto px-6 py-28"
      >
        {/* Aurora */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] bg-purple-500/10 blur-[180px]" />

        <div className="mb-20">
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            Portfolio
          </span>

          <h1 className="mt-6 text-6xl md:text-8xl font-bold">
            Featured
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="max-w-2xl mt-6 text-zinc-400 text-lg">
            A collection of products, experiments and ideas I've
            transformed into real-world applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <FlashCard
              key={index}
              {...project}
              number={`0${index + 1}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};



// import React from "react";

// const Projects = () => {
//   return (
//     <div>
//       <Navbar />

//       <section className="px-10 py-20 max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           Projects
//         </h1>
//         <p className="text-gray-600 mb-10">
//           A selection of my recent work and personal builds.
//         </p>

//         {/* Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <FlashCard key={index} {...project} />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

export default Projects;
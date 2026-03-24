// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='w-full bg-blue-950'>
//         <div className='flex justify-between items-center px-6 py-6'>
//             <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" className='h-16' alt="logo" />

//             <div className='flex justify-between items-center gap-12'>
//                 <h1>About</h1>
//                 <h1>Services</h1>
//                 <h1>Projects</h1>
//                 <h1>Contact</h1>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const navRef = useRef();
  const linksRef = useRef([]);

  useGSAP(() => {
    // Navbar entrance
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Links stagger animation
    gsap.from(linksRef.current, {
      y: -15,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <div
      ref={navRef}
      className="w-full fixed top-0 z-50 backdrop-blur-lg"
      // style={{ backgroundColor: "rgba(15, 23, 42, 0.7)" }}
    >
      <div className="flex justify-between items-center px-8 py-8">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            className="h-10 w-10 rounded-full object-cover"
            alt="logo"
          />
          <span className="text-[#e2e8f0] text-lg font-semibold tracking-wide">
            Brand
          </span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-10 text-[#e2e8f0] font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="relative cursor-pointer group"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -2,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }}
            >
              <a href={item.link}>{item.name}</a>

              {/* Smooth underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="px-5 py-2 rounded-full font-semibold transition-all duration-300"
          style={{
            backgroundColor: "#38bdf8",
            color: "#0f172a",
          }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.05,
              duration: 0.2,
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              duration: 0.2,
            });
          }}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;

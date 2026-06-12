import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);

      requestAnimationFrame(() => {
        gsap.fromTo(
          mobileMenuRef.current,
          {
            opacity: 0,
            y: -30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => setMenuOpen(false),
      });
    }
  };

  const closeMenu = () => {
    gsap.to(mobileMenuRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setMenuOpen(false),
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50
                   bg-white/5 backdrop-blur-xl
                   border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              alt="logo"
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="text-white font-semibold text-lg tracking-wide">
              Brand
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="
                  relative text-slate-200
                  transition-colors duration-300
                  hover:text-sky-400
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-sky-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <button
            className="
              hidden md:block
              px-5 py-2.5
              rounded-full
              font-semibold
              bg-sky-400
              text-slate-900
              hover:scale-105
              transition-all duration-300
            "
          >
            Hire Me
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="
              md:hidden
              text-white
              text-3xl
              transition-transform duration-300
            "
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="
            fixed inset-0 z-40
            bg-slate-950/95
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col items-center justify-center h-full gap-10">
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={closeMenu}
                className="
                  text-3xl
                  font-semibold
                  text-slate-200
                  hover:text-sky-400
                  transition-colors
                "
              >
                {item.name}
              </a>
            ))}

            <button
              className="
                mt-4
                px-8 py-3
                rounded-full
                bg-sky-400
                text-slate-900
                font-semibold
              "
              onClick={closeMenu}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



// // import React from 'react'

// // const Navbar = () => {
// //   return (
// //     <div className='w-full bg-blue-950'>
// //         <div className='flex justify-between items-center px-6 py-6'>
// //             <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" className='h-16' alt="logo" />

// //             <div className='flex justify-between items-center gap-12'>
// //                 <h1>About</h1>
// //                 <h1>Services</h1>
// //                 <h1>Projects</h1>
// //                 <h1>Contact</h1>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Navbar

// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// const navItems = [
//   { name: "About", link: "/about" },
//   { name: "Services", link: "/services" },
//   { name: "Projects", link: "/projects" },
//   { name: "Contact", link: "/contact" },
// ];

// const Navbar = () => {
//   const navRef = useRef();
//   const linksRef = useRef([]);

//   useGSAP(() => {
//     // Navbar entrance
//     gsap.from(navRef.current, {    // navbar slides smoothly from top of screen
//       y: -60,                    // from 60 px above
//       opacity: 0,                 // invisible initially
//       duration: 1,                // time 1s
//       ease: "power3.out",         // smoothness
//     });

//     // Links stagger animation
//     gsap.from(linksRef.current, {      // linksRef.current is an array of dom elems..
//       y: -15,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.1,                  // creates a wave like entrance effect i.e appears one after other
//       delay: 0.3,
//       ease: "power2.out",
//     });
//   });

//   return (
//     <div
//       ref={navRef}
//       className="w-full fixed top-0 z-50 backdrop-blur-lg"
//       // style={{ backgroundColor: "rgba(15, 23, 42, 0.7)" }}
//     >
//       <div className="flex justify-between items-center px-8 py-8">
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-3 cursor-pointer">
//           <img
//             src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
//             className="h-10 w-10 rounded-full object-cover"
//             alt="logo"
//           />
//           <span className="text-[#e2e8f0] text-lg font-semibold tracking-wide">
//             Brand
//           </span>
//         </a>

//         {/* Menu */}
//         <div className="flex items-center gap-10 text-[#e2e8f0] font-medium">
//           {navItems.map((item, index) => (
//             <div
//               key={index}
//               ref={(el) => (linksRef.current[index] = el)}
//               className="relative cursor-pointer group"
//               onMouseEnter={(e) => {
//                 gsap.to(e.currentTarget, {
//                   y: -2,
//                   duration: 0.2,
//                   ease: "power2.out",
//                 });
//               }}
//               onMouseLeave={(e) => {
//                 gsap.to(e.currentTarget, {
//                   y: 0,
//                   duration: 0.2,
//                   ease: "power2.out",
//                 });
//               }}
//             >
//               <a href={item.link}>{item.name}</a>

//               {/* Smooth underline */}
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <button
//           className="px-5 py-2 rounded-full font-semibold transition-all duration-300"
//           style={{
//             backgroundColor: "#38bdf8",
//             color: "#0f172a",
//           }}
//           onMouseEnter={(e) => {
//             gsap.to(e.currentTarget, {
//               scale: 1.05,
//               duration: 0.2,
//             });
//           }}
//           onMouseLeave={(e) => {
//             gsap.to(e.currentTarget, {
//               scale: 1,
//               duration: 0.2,
//             });
//           }}
//         >
//           Hire Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

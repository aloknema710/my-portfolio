import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const isTouch =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

  if (isTouch) return null;

  // mouse tracking
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // hover detection
  useEffect(() => {
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const targets = document.querySelectorAll("a, button, .cursor-hover");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);


  return (
    <>
      {/* OUTER GLOW RING */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"         //pointer-events-none makes the cursor invisible to mouse interactions
        animate={{
          x: pos.x - (hovered ? 35 : 20),
          y: pos.y - (hovered ? 35 : 20),
          scale: hovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div
          className="
            w-16 h-16
            rounded-full
            border border-cyan-300/40
            bg-cyan-400/10
            backdrop-blur-md
          "
        />
      </motion.div>

      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x,
          y: pos.y,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 40 }}
      >
        <div
          className="
            w-2.5 h-2.5
            rounded-full
            bg-white
            shadow-[0_0_12px_rgba(34,211,238,0.8)]
          "
        />
      </motion.div>

      {/* SOFT AURA */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: pos.x - 50,
          y: pos.y - 50,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div
          className="
            w-24 h-24
            rounded-full
            bg-cyan-400/20
            blur-2xl
          "
        />
      </motion.div>
    </>
  );
};

export default Cursor;



// import React, { useEffect, useState } from "react";
// import { motion } from "motion/react";

// const Cursor = () => {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   useEffect(() => {
//     const enter = () => setHovered(true);
//     const leave = () => setHovered(false);

//     const targets = document.querySelectorAll("a, button, .cursor-hover");

//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", enter);
//       el.addEventListener("mouseleave", leave);
//     });

//     return () => {
//       targets.forEach((el) => {
//         el.removeEventListener("mouseenter", enter);
//         el.removeEventListener("mouseleave", leave);
//       });
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 z-[9999] pointer-events-none"
//       animate={{
//         x: pos.x - (hovered ? 30 : 10),
//         y: pos.y - (hovered ? 30 : 10),
//         scale: hovered ? 2 : 1,
//       }}
//       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//     >
//       <div
//         className="
//           w-5 h-5
//           rounded-full
//           bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
//           blur-sm
//           opacity-80
//         "
//       />
//     </motion.div>
//   );
// };

// export default Cursor;
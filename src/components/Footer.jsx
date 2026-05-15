// Footer.jsx
import React from "react";
import HaloBackground from "./HaloBackground";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] text-white">

      {/* 3D Animated Background */}
      <HaloBackground />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at top, rgba(201,169,110,0.12), transparent 45%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">

          {/* Socials */}
          <div className="flex flex-wrap gap-5 sm:gap-8">
            {["Linked In", "Instagram", "Other Projects"].map((item) => (
              <a
                key={item}
                href="/"
                className="group relative overflow-hidden"
              >
                <h1
                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-[#8a8a8a]
                  transition-all
                  duration-500
                  hover:text-[#d6b57a]
                "
                >
                  {item}
                </h1>

                <span
                  className="
                  absolute
                  left-0
                  bottom-0
                  h-[1px]
                  w-0
                  bg-[#d6b57a]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
                />
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            <h1 className="text-[11px] uppercase tracking-[0.2em] text-[#7d7d7d]">
              Available for freelance work
            </h1>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10 mt-8" />

        {/* MIDDLE */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
          lg:items-center
          gap-16
          py-20
        "
        >

          {/* LOGO */}
          <a
            href="/"
            className="
            group
            relative
            flex
            items-center
            gap-5
          "
          >
            <div
              className="
              relative
              transition-all
              duration-700
              group-hover:scale-110
            "
            >
              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-[#d6b57a]
                blur-2xl
                opacity-0
                group-hover:opacity-30
                transition-all
                duration-700
              "
              />

              <img
                className="
                relative
                h-14
                w-14
                rounded-full
                object-cover
                border
                border-white/20
              "
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                alt=""
              />
            </div>

            <div>
              <h1
                className="
                text-2xl
                tracking-wide
                text-white
              "
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Studio
              </h1>

              <p className="text-sm text-[#666] mt-1">
                Frontend Freelancer
              </p>
            </div>
          </a>

          {/* NAV */}
          <div className="flex flex-col gap-7">
            {[
              "About",
              "Services",
              "Projects",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="group w-fit"
              >
                <h2
                  className="
                  relative
                  text-[13px]
                  uppercase
                  tracking-[0.22em]
                  text-[#8a8a8a]
                  transition-all
                  duration-500
                  group-hover:text-white
                "
                >
                  {item}

                  <span
                    className="
                    absolute
                    left-0
                    -bottom-2
                    h-[1px]
                    w-0
                    bg-[#d6b57a]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                  />
                </h2>
              </a>
            ))}
          </div>

          {/* LOCATION */}
          <div
            className="
            flex
            flex-col
            items-start
            lg:items-end
          "
          >
            <p
              className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#555]
            "
            >
              Based in
            </p>

            <h2
              className="
              mt-3
              text-2xl
              italic
              text-[#d6b57a]
            "
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Bengaluru, India
            </h2>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10" />

        {/* CTA */}
        <div
          className="
          relative
          py-24
          sm:py-32
          lg:py-40
        "
        >
          <div className="relative w-fit">

            <h1
              className="
              leading-none
              font-bold
              cursor-default
              transition-all
              duration-700
              hover:tracking-[0.02em]
              text-[64px]
              sm:text-[100px]
              md:text-[140px]
              lg:text-[180px]
            "
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              }}
            >
              Get in Touch
            </h1>

            {/* GOLD GLOW */}
            <div
              className="
              absolute
              inset-0
              blur-3xl
              opacity-20
              bg-[#d6b57a]
              -z-10
            "
            />
          </div>

          {/* Floating CTA Button */}
          <a
            href="/contact"
            className="
            absolute
            right-0
            bottom-16
            sm:bottom-20
            flex
            items-center
            justify-center
            w-16
            h-16
            rounded-full
            border
            border-white/15
            text-2xl
            text-[#8a8a8a]
            backdrop-blur-xl
            transition-all
            duration-700
            hover:rotate-45
            hover:scale-110
            hover:border-[#d6b57a]
            hover:text-[#d6b57a]
            hover:shadow-[0_0_40px_rgba(214,181,122,0.4)]
          "
          >
            ↗
          </a>
        </div>

        {/* BOTTOM */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          border-t
          border-white/10
          pt-6
        "
        >
          <h1
            className="
            text-[11px]
            uppercase
            tracking-[0.16em]
            text-[#555]
          "
          >
            © 2026 Studio. All rights reserved.
          </h1>

          <h1
            className="
            text-[11px]
            uppercase
            tracking-[0.16em]
            text-[#555]
          "
          >
            Crafted with intention
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import HaloBackground from "./HaloBackground";

// const Footer = () => {
//   return (
//     <div className="relative w-full bg-black text-white">
//       {/* Halo Animation */}
//       {/* <HaloBackground /> */}

//       {/* Optional overlay for readability */}
//       <div className="absolute inset-0 bg-black/40 z-1" />

//       {/* Footer Content */}
//       <div className="relative z-10 p-10 flex flex-col gap-10">

//         <div className="flex justify-between items-center">
//           <div className="m-5 flex gap-5">
//             <h1 className="font-semibold">Linked In</h1>
//             <h1 className="font-semibold">Instagram</h1>
//             <h1 className="font-semibold">Other Projects</h1>
//           </div>
//           <h1>lorem ipsum</h1>
//         </div>

//         <hr />

//         <div className="flex justify-between items-center mt-20 mb-20">
//           <a href="/" className="p-6">
//             <img
//               className="h-10 w-10 rounded-full object-cover"
//               src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
//               alt=""
//             />
//           </a>

//           <div className="flex flex-col gap-7">
//             <a href="/about"><h2 className="font-bold">About</h2></a>
//             <a href="/services"><h2 className="font-bold">Services</h2></a>
//             <a href="/projects"><h2 className="font-bold">Projects</h2></a>
//             <a href="/contact"><h2 className="font-bold">Contact</h2></a>
//           </div>

//           <div className="p-8">
//             <h2 className="font-bold object-center">
//               Studio Based in Bengaluru
//             </h2>
//           </div>
//         </div>

//         <hr />

//         <div>
//           <h1 className="text-9xl p-52">Get in Touch</h1>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Footer;
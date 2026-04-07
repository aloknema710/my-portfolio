import React from "react";
import HaloBackground from "./HaloBackground";

const Footer = () => {
  return (
    <div className="relative w-full bg-black text-white">
      {/* Halo Animation */}
      <HaloBackground />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      {/* Footer Content */}
      <div className="relative z-10 p-10 flex flex-col gap-10">

        <div className="flex justify-between items-center">
          <div className="m-5 flex gap-5">
            <h1 className="font-semibold">Linked In</h1>
            <h1 className="font-semibold">Instagram</h1>
            <h1 className="font-semibold">Other Projects</h1>
          </div>
          <h1>lorem ipsum</h1>
        </div>

        <hr />

        <div className="flex justify-between items-center mt-20 mb-20">
          <div className="p-6">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold">lorem</h2>
            <h2 className="font-bold">lorem</h2>
            <h2 className="font-bold">lorem</h2>
            <h2 className="font-bold">lorem</h2>
          </div>

          <div className="p-8">
            <h2 className="font-bold object-center">
              Studio Based in Bengaluru
            </h2>
          </div>
        </div>

        <hr />

        <div>
          <h1 className="text-9xl p-52">Get in Touch</h1>
        </div>

      </div>
    </div>
  );
};

export default Footer;


// import React from 'react'
// import HaloBackground from './HaloBackground'
// // https://make-b.studio/
// const Footer = () => {
//   return (
//     <div className="relative min-h-200 overflow-hidden">
//         {/* Background */}
//         <HaloBackground />

//         {/* Optional overlay for readability */}
//         <div className="absolute inset-0 bg-black/50 z-[1]" />

//         {/* Content */}
//         <div className="relative z-10 text-white p-10">
//             <div className="flex justify-between items-center">
//             <div className="m-5 flex gap-5">
//                 <h1 className="font-semibold">Linked In</h1>
//                 <h1 className="font-semibold">Instagram</h1>
//                 <h1 className="font-semibold">Other Projects</h1>
//             </div>
//             <h1>lorem ipsum</h1>
//             </div>

//             <hr />

//             <div className="flex justify-between items-center mt-20 mb-20">
//             <div className="p-6">
//                 <img
//                 className="h-10 w-10 rounded-full object-cover"
//                 src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
//                 alt=""
//                 />
//             </div>

//             <div className="flex flex-col">
//                 <h2 className="font-bold">lorem</h2>
//                 <h2 className="font-bold">lorem</h2>
//                 <h2 className="font-bold">lorem</h2>
//                 <h2 className="font-bold">lorem</h2>
//             </div>

//             <div className="p-8">
//                 <h2 className="font-bold object-center">
//                 Studio Based in Bengaluru
//                 </h2>
//             </div>
//             </div>

//             <hr />

//             <div>
//             <h1 className="text-9xl p-52">Get in Touch</h1>
//             </div>
//         </div>
//         </div>
//     // <div className=''>
//     //     <HaloBackground />
//     //   <div className='flex justify-between items-center'>
//     //       <div className='m-5 flex gap-5'>
//     //           <h1 className='font-semibold'>Linked In</h1>
//     //           <h1 className='font-semibold'>Instagram</h1>
//     //           <h1 className='font-semibold'>Other Projects</h1>
//     //       </div>
//     //       <h1>lorem ipsum</h1>
//     //   </div>

//     //   <hr />
//     //   <div className='flex justify-between items-center mt-20 mb-20'>
//     //       <div className='p-6'>
//     //           <img className="h-10 w-10 rounded-full object-cover" 
//     //           src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" />
//     //       </div>

//     //       <div className='flex flex-col'>
//     //           <h2 className='font-bold'>lorem</h2>
//     //           <h2 className='font-bold'>lorem</h2>
//     //           <h2 className='font-bold'>lorem</h2>
//     //           <h2 className='font-bold'>lorem</h2>
//     //       </div>

//     //       <div className='p-8'>
//     //           <h2 className='font-bold object-center'>Studio Based in Bengaluru</h2>
//     //       </div>
//     //   </div>

//     //   <hr />

//     //   <div className=''>
//     //       <h1 className='text-9xl p-52'>Get in Touch</h1>
//     //   </div>

//     // </div>
//   )
// }

// export default Footer
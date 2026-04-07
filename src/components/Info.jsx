import React from 'react'

const Info = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          From <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">Identity</span> to Experience
        </h1>

        <h2 className="text-lg md:text-2xl text-gray-300 mb-10">
          We craft digital products that truly help you grow and stand out.
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="px-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300">
            Get in Touch
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-500 hover:border-white hover:bg-white hover:text-black transition-all duration-300">
            Explore Work
          </button>

        </div>

      </div>
    </section>
  )
}

export default Info


// import React from 'react'

// const Info = () => {
//   return (
//     <div className='p-5'>
//         <div className='flex flex-col'>
//             <h1>From Identity to Experience</h1>
//             <h1>We develop what helps you</h1>
//             <div className='flex flex-row'>
//                 <div>
//                     <button>Get in Touch</button>
//                 </div>
//                 <div>
//                     <button>Explore Work</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Info
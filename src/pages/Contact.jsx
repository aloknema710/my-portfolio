import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Strip from '../components/Strip'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col px-16 py-20 min-h-screen'>
        <div className='mb-6'>
          <h1 className='text-6xl font-semibold leading-tight'>Share details of<br />your project</h1>
        </div>

        <div className='flex flex-row pt-12 gap-16 items-start'>
          {/* Left side */}
          <div className='flex flex-col gap-6 w-1/3 pt-2'>
            <h4 className='text-gray-500 text-lg'>Let's get in touch</h4>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Tell us about your vision and we'll help bring it to life. We typically respond within 24 hours.
            </p>
          </div>

          {/* Right side - Form */}
          <div className='w-2/3'>
            <form action="">
              <div className='flex flex-col gap-6'>
                <div className='relative group'>
                  <input
                    type="text"
                    placeholder='Your Name'
                    className='w-full bg-transparent border-b-2 border-gray-200 py-3 px-1 text-base outline-none
                      placeholder-gray-300 text-gray-800
                      transition-all duration-300 ease-in-out
                      focus:border-black focus:placeholder-gray-400
                      hover:border-gray-400'
                  />
                  <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <div className='relative group'>
                  <input
                    type="text"
                    placeholder='Company'
                    className='w-full bg-transparent border-b-2 border-gray-200 py-3 px-1 text-base outline-none
                      placeholder-gray-300 text-gray-800
                      transition-all duration-300 ease-in-out
                      focus:border-black focus:placeholder-gray-400
                      hover:border-gray-400'
                  />
                  <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <div className='relative group'>
                  <input
                    type="email"
                    placeholder='Email'
                    className='w-full bg-transparent border-b-2 border-gray-200 py-3 px-1 text-base outline-none
                      placeholder-gray-300 text-gray-800
                      transition-all duration-300 ease-in-out
                      focus:border-black focus:placeholder-gray-400
                      hover:border-gray-400'
                  />
                  <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <div className='relative group'>
                  <textarea
                    placeholder='Tell us about your project'
                    rows={4}
                    className='w-full bg-transparent border-b-2 border-gray-200 py-3 px-1 text-base outline-none resize-none
                      placeholder-gray-300 text-gray-800
                      transition-all duration-300 ease-in-out
                      focus:border-black focus:placeholder-gray-400
                      hover:border-gray-400'
                  />
                  <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <button className='mt-2 font-semibold text-black bg-gray-100 rounded-full px-8 py-3 w-full
                  transition-all duration-300
                  hover:scale-[1.02] hover:bg-black hover:text-white
                  active:scale-[0.98]'>
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Strip/>
      <Footer/>
    </div>
  )
}

export default Contact


// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const Contact = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className='flex flex-col p-25 min-h-screen'>
//         <div className='m-10'>
//           <h1 className='text-6xl font-semibold'>Share details of your project </h1>
//         </div>
//         <div className='flex flex-row pt-10 justify-around'>
//           <h4 className='text-gray-600'>Let's get in touch</h4>
//           <div className=''>
//             <form action="">
//               <div className='flex flex-col justify-between items-center gap-5'>
//                 <input type="text" placeholder='Your Name' name="" id="" />
//                 <input type="text" placeholder='Company' name="" id="" />
//                 <input type="text" placeholder='Email' name="" id="" />
//                 <input type="text" placeholder='Tell us about your project' name="" id="" />
//                 <button className='font-bold text-black bg-gray-200 rounded-full px-5 py-2 w-full transition-all 
//                     hover:scale-105 hover:bg-gray-600 hover:text-gray-200'>Send Message</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default Contact
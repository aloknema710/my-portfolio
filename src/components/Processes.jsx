import React from 'react'

const Processes = () => {
  return (
    <div className='p-5 min-h-screen relative'>
        <div className='p-5 m-10 text-5xl'>
            <h1>Our Processes</h1>
        </div>

            <hr />

        <div className='flex flex-col justify-center gap-5'>
            <hr />
            <div className='h-60 flex flex-row justify-between gap-20'>
                <h2 className='m-5 text-gray-500'>01</h2>
                <div className='flex flex-col py-5 m-7 gap-3'>
                    <h3 className='left-0'>Align</h3>
                    <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
                </div>
            </div>
            <hr />
            <div className='h-60 flex flex-row justify-between gap-20'>
                <div className='flex flex-col py-5 m-7 gap-3'>
                    <h3 className='left-0'>Align</h3>
                    <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
                </div>
                <h2 className='m-5 text-gray-500'>02</h2>
            </div>
            <hr />
            <div className='h-60 flex flex-row justify-between gap-20'>
                <h2 className='m-5 text-gray-500'>03</h2>
                <div className='flex flex-col py-5 m-7 gap-3'>
                    <h3 className='left-0'>Align</h3>
                    <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
                </div>
            </div>
            <hr />
            <div className='h-60 flex flex-row justify-between gap-20'>
                <div className='flex flex-col py-5 m-7 gap-3'>
                    <h3 className='left-0'>Align</h3>
                    <p className='text-4xl max-w-lg'>Cut through ambiguity, define the goal, and set a clear decision bar</p>
                </div>
                <h2 className='m-5 text-gray-500'>04</h2>
            </div>
            <hr />
            <div className='h-60 flex flex-row justify-between gap-20'>
                <h2 className='m-5 text-gray-500'>05</h2>
                <div className='flex flex-col py-5 m-7 gap-3'>
                    <h3 className='left-0'>Align</h3>
                    <p className='text-4xl max-w-lg'>Stay close through implementation and QA, so the build & test keeps on</p>
                </div>
            </div>
            <hr />
        </div>
        
    </div>
  )
}

export default Processes
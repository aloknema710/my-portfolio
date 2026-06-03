import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
  return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            <div className='flex-col hidden md:flex c-space'>
                <motion.h1 className='text-4xl font-medium' initial="hidden" animate="visible"
                    transition={{delay:1}} variants={variants}>Hi we are team</motion.h1>
                <div className='flex flex-col items-start'>
                    <motion.p initial={"hidden"} animate={"visible"} variants={variants} transition={{delay:1.2}} 
                        className='text-5xl font-medium text-neutral-300'>Team Dedicated to Crafting</motion.p>
                    <motion.div initial={"hidden"} animate={"visible"} variants={variants} transition={{delay:1.5}}>
                        <FlipWords words={["Modern","Secure","Scalable"]} className={"font-black text-white text-8xl"}/>
                    </motion.div>
                    <motion.p initial={"hidden"} animate={"visible"} variants={variants} transition={{delay:1.8}}
                        className='text-4xl font-medium'>All Software Solutions</motion.p>
                </div>
            </div>
            <div className='flex- flex-col space-y-6 md:hidden'>
                <p className='text-4xl font-medium'>Hi we are Team</p>
                <div>
                    <p className='text-5xl font-black text-neutral-300'>Building</p>
                    <div><FlipWords words={["Modern","Secure","Scalable"]} className={"font-bold text-white text-7xl"}/></div>
                    <p className='text-4xl font-black text-neutral-300'>Software Applications</p>
                </div>
            </div>
        </div>
  )
}

export default HeroText
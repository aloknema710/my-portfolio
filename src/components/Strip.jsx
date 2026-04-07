import React, { useRef } from 'react'
import ImageCSS from '../assets/card.webp'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

const Strip = () => {
    const stripref = useRef()
    useGSAP(()=>{
        const handleWheel = (e) =>{
            if(e.deltaY > 0){
                gsap.to(stripref.current,{
                    x:"-50%",
                    duration: 20,
                    repeat: -1,
                    ease: "none"
                })

            }else{
                gsap.to(stripref.current,{
                    x:"0%",
                    duration: 20,
                    repeat: -1,
                    ease: 'none'
                })
            }
        }
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel",handleWheel)
    },[])
  return (
    <div className='overflow-hidden w-full'>
        <div ref={stripref} className='flex w-max p-10 gap-10'>
            <div className='flex items-center'>
                <h1 className='text-4xl'>Thrive Beyond 🧑‍💻 Plain CSS</h1>
                <img className='w-35' src={ImageCSS} alt="" />
            </div>
            <div className='flex items-center'>
                <h1 className='text-4xl'>Thrive Beyond 🧑‍💻 Plain CSS</h1>
                <img className='w-35' src={ImageCSS} alt="" />
            </div>
            <div className='flex items-center'>
                <h1 className='text-4xl'>Thrive Beyond 🧑‍💻 Plain CSS</h1>
                <img className='w-35' src={ImageCSS} alt="" />
            </div>
            <div className='flex items-center'>
                <h1 className='text-4xl'>Thrive Beyond 🧑‍💻 Plain CSS</h1>
                <img className='w-35' src={ImageCSS} alt="" />
            </div>
            <div className='flex items-center'>
                <h1 className='text-4xl'>Thrive Beyond 🧑‍💻 Plain CSS</h1>
                <img className='w-35' src={ImageCSS} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Strip
import React, { Suspense } from 'react'
import HeroText from './HeroText'
import ParallexBg from './ParallexBg'
import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from './Astronaut'
import { Float, OrbitControls } from '@react-three/drei'
import {useMediaQuery} from 'react-responsive'
import {easing} from 'maath'
import Loader from './Loader'

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 853})
  return (
    // <div className='h-screen flex items-start md:items-start md:justify-start overflow-hidden c-space'>
    <div className='relative min-h-screen flex items-start md:justify-start overflow-hidden'>
        <HeroText/>
        <ParallexBg/>
        {/* <figure
          className=' absolute inset-0' style={{width:"100vw",height:"100vh"}}> */}
        <figure className="absolute inset-0 w-full h-full">
            <Canvas>
              <Suspense fallback={<Loader/>}>

              <Float>
                <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]}/>
                {/* <OrbitControls/> */}
                <Rig/>
              </Float>
              </Suspense>
            </Canvas>
        </figure>
    </div>
  )
}
function Rig() {
    return useFrame((state,delta)=>{
      easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
      )
    })
}
export default Hero
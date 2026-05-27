import Lenis from "lenis";
import React, { useEffect } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger.js";

const Section = () => {
    gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const lenis = new Lenis({});
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useGSAP(()=>{
    document.querySelectorAll(".elem").forEach(elem=>{
    let image = elem.querySelector("img")
    let tl = gsap.timeline()

    let xtransform = gsap.utils.random(-100,100)

    tl
    .set(image,{
        transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
    })
    .to(image,{
        scale: 0,
        ease: 'none',
        scrollTrigger:{
        trigger: elem,
        start: "top top",
        end: "bottom top",
        scrub: 2
        }
    })
    .to(elem, {
        xPercent: xtransform,
        ease: "none",
        scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true
        }
        })
    })
  })

  return (
    <>
      <div className="w-full bg-zinc-900">
        <div className="grid grid-cols-8 grid-rows-10 gap-2 p-2 overflow-hidden">
          <div className="elem col-span-1" style={{ "--r": 1, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 1, "--c": 7 }}>
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 2, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 2, "--c": 6 }}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 3, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 3, "--c": 8 }}>
            <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 4, "--c": 1 }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 4, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 5, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 5, "--c": 6 }}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" />
          </div>
          <div className="elem col-span-1" style={{ "--r": 6, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 6, "--c": 7 }}>
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 7, "--c": 4 }}>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 7, "--c": 8 }}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 8, "--c": 1 }}>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 8, "--c": 5 }}>
            <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 9, "--c": 2 }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 9, "--c": 6 }}>
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 10, "--c": 3 }}>
            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop" />
          </div>

          <div className="elem col-span-1" style={{ "--r": 10, "--c": 7 }}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" />
          </div>
        </div>

        <div
          className="fixed top-0 left-0 w-full h-full font-['Helvetica_Now_Display']
                flex flex-col items-center justify-center
                bg-black/40 text-white pointer-events-none"
        >
          <h1 className="text-6xl mb-4">Biggest Text Field</h1>
          <h2 className="text-5xl">Smaller Text Field</h2>
        </div>
        <div className="w-full h-screen bg-[#D1D1D1] mx-auto py-98 relative flex items-center justify-center z-999 text-center">
          <p className="text-black text-5xl leading-[3.2rem] w-3/4 font-regular">
            Thomas Vance is a renowned clothing brand known for its exceptional
            fashion and unique designs. Our collections are crafted with the
            finest materials and attention to detail, ensuring that each piece
            is a work of art. Discover the elegance and sophistication of Thomas
            Vance, where fashion meets excellence .
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;

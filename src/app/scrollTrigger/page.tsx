"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExample() {
  const headingRef = useRef(null);
  const boxRef = useRef(null);
  const pinSectionRef = useRef(null);

  useEffect(() => {
 

    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      }
    });

    // Animation 3: Pin a section
    gsap.from(".pin-text", {
      x: -200,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        end: "bottom+=300 top",
        pin: true,
        scrub: true,
      }
    });

  }, []);

  return (
    <div className="p-10 space-y-20">

      <h1 ref={headingRef} className="text-4xl font-bold">
        ScrollTrigger Example
      </h1>

      <div 
        ref={boxRef} 
        className="w-40 h-40 bg-green-500 rounded-xl mx-auto"
      />

      <section 
        ref={pinSectionRef} 
        className="h-[200vh] bg-gray-800 text-white flex items-center justify-center"
      >
        <h2 className="pin-text text-5xl font-bold">Pinned Section</h2>
      </section>

    </div>
  );
}

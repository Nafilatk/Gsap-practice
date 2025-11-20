"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExample() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
  gsap.to(box3Ref.current,{
    x: 350,
    rotate :360,
    duration : 2
  })




  }, []);

  return (
    <div className="w-screen h-screen flex gap-10 justify-center items-center bg-black">
      <section>

      <div 
        ref={box1Ref} 
        className="w-25 h-25 bg-green-400 rounded-xl mx-auto"
      />
      <div 
        ref={box2Ref} 
        className="w-30 h-30 bg-yellow-400 rounded-xl mx-auto"
      />
            <div 
        ref={box3Ref} 
        className="w-35 h-35 bg-blue-400 rounded-xl mx-auto"
      />

      </section>

    </div>
  );
}

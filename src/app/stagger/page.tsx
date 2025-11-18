"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Page() {

  const boxesRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.from(boxesRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      repeat : -1,
      ease: "power3.out"
    
    });

    const  tl = gsap.timeline({
        defaults :{
            duration : 1,
            ease :" Power2.out"
        }
    })

    tl.from (titleRef.current ,{
        opacity : 0,
        y: -30,
        
    })
    .from(textRef.current,{
        opacity : 0,
         x: -200,
       
    })
  }, []);

  return (
    <div>
    <div className="w-screen h-screen flex justify-center items-center gap-5 bg-black">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) boxesRef.current[i] = el;
          }}
          className="w-20 h-20 bg-pink-600 rounded-xl"
        />
      ))}
    </div>

        <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center bg-black text-white">
      <h1 ref={titleRef} className="text-5xl font-bold">
        Welcome to GSAP
      </h1>

      <p ref={textRef} className="text-xl w-1/2 text-center text-gray-300">
        This text slides in after the title fades in. Using GSAP Timeline makes
        animations clean and easy to control.
      </p>
    </div>

    </div>
  );
}

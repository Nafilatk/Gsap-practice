"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Page() {

  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(boxesRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      repeat : -1,
      ease: "power3.out"
    
    });



       
  }, []);

  return (

    <div>
    <div className="w-screen h-screen flex justify-center items-center  mt-50">
    <div className="grid grid-cols-10 gap-3">

      {Array.from({length :100}).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) boxesRef.current[i] = el;
          }}
          className="w-20 h-20 bg-pink-600 rounded-xl"
        />
      ))}
    </div>


    </div>

    </div>

  );
}

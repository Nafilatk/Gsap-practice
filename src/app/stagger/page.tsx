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

       
  }, []);

  return (
    <div>
    <div className="w-screen h-screen flex justify-center items-center gap-5 bg-black">
      {[1, 2, 3, 4, 5,6,7,8,9].map((_, i) => (
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
  );
}

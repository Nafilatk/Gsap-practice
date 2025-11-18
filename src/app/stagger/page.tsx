"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Page() {

  // FIX: Correct type added
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(boxesRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      repeat : -1,
      ease: "power3.out"
    });
  }, []);

  return (
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
  );
}

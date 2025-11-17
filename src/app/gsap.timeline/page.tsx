"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" }
    });

    tl.from(box1.current, {
       y: -200, 
       opacity: 0 
      })

      .from(box2.current, { x: -300, opacity: 0 })

        .from(box3.current, {
        x: 300,
        opacity: 0,
        rotate: -180,
        scale: 0.2,
        borderRadius: "50%",
        duration: 1.5,
        ease: "back.out(1.7)",
      })
      .to(box3.current, {
        rotate: 360,
        borderRadius: "20%",
        duration: 1,
        ease: "elastic.out(1, 0.4)"
      })
      .to(box3.current,{
        x : -250,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
      });
        tl.to(box1.current,{
        x : 250,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"

      }),
        tl.to(box2.current,{
        x : -130,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
        })    
        tl.to(box3.current,{
        x : -120,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
        }) ,
        tl.to(box1.current,{
        x : 120,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
        }) ,
        tl.to(box3.current,{
        x : -5,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
        }) 
        tl.to(box1.current,{
        x : -10,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
        }) ,
        tl.to(box2.current,{
        x : 0,
        borderRadius : "100%",
        duration : 1,
        ease : "Power3.out"
        }) 

  }, []);

  return (
    <div className="w-screen h-screen flex gap-10 justify-center items-center bg-black">
      <div ref={box1} className="w-20 h-20 bg-pink-600 rounded-xl" />
      <div ref={box2} className="w-20 h-20 bg-yellow-300 rounded-xl" />
      <div ref={box3} className="w-20 h-20 bg-green-700 rounded-xl" />
    </div>
  );
}

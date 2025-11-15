"use client"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

 export default function Home(){
  const boxRef = useRef(null)

  useEffect(()=>{
    gsap.to(boxRef.current,{
      x:-400,
      y:0,
      duration:5,
      rotate : 360,
      scale :5,
      opacity : 0.8,
      ease : "power1.out",
      // delay :4,
    })

  },[])

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div
        ref={boxRef}
      
        className=" w-24 h-24 bg-pink-500  rounded-xl" 
      >
      </div>
    </div>
  )


 }
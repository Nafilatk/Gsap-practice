"use client"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

 export default function Home(){
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)
    const box3Ref = useRef(null)
    const box4Ref = useRef(null)



  useEffect(()=>{

    

    gsap.to(box1Ref.current,{
      x:-400,
      y:0,
      duration:5,
      rotate : 360,
      scale :3,
      repeat : -1,
      opacity : 0.8,
      ease : "power1.out",
    }),
    gsap.to(box2Ref.current,{
      x:400,
      y:0,
      duration:5,
      rotate : 360,
      scale :3,
       repeat : -1,

      opacity : 0.8,
      ease : "power1.out",
    }),
    gsap.to(box3Ref.current,{
      x:1000,
      y:0,
      duration:5,
      rotate : 360,
      scale :3,
            repeat : -1,
      opacity : 0.8,
      ease : "power1.out",
    }),
     gsap.to(box4Ref.current,{
      x:-1000,
      y:0,
      duration:5,
      rotate : 360,
      scale :3,
            repeat : -1,
      opacity : 0.8,
      ease : "power1.out",
    })


  },[])

  

  return (
    <div>
      <section>

    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div
        ref={box1Ref}
      
        className=" w-24 h-24 bg-pink-600  rounded-xl" 
      >
      </div>
            <div
        ref={box2Ref}
      
        className=" w-24 h-24 bg-white  rounded-xl" 
      >
      </div>

    </div>
      </section>
    

    <section>
 
    <div className="w-screen h-screen  flex justify-between items-center px-10">
        <div
        ref={box3Ref}
        className=" w-24 h-24 bg-pink-500  rounded-xl" 
        >
        </div>

        <div
        ref={box4Ref}
        className=" w-24 h-24 bg-white  rounded-xl" 
        >
        </div>

    </div>

    </section>
    </div>


    

    
  )


 }
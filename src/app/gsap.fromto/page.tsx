"use client"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function Home() {
  const box1Ref = useRef(null)
  const box3Ref = useRef(null)



  useEffect(() => {



    gsap.fromTo(box1Ref.current, {
      x: 0,
      duration: 1,
      opacity: 0.8,
      repeat: -1,

    },
      {
        x: 400,
        duration: 1,
        rotate: 360,
        scale: 3,
        opacity: 0.8,
        repeat: -1,
        ease: "power1.out",
      },

    ),
      gsap.fromTo(box3Ref.current, {
        x: 0,
        duration: 2,
        opacity: 0.8,
        ease: "power1.out",
      },
        {
          x: 1000,
          y: 0,
          duration: 5,
          scale: 3,
          repeat: -1,

          opacity: 0.8,
          ease: "power1.out",
        }
      )


  }, [])



  return (
    <div>
      <section>

        <div className="w-screen h-screen flex items-center justify-center bg-black">
          <div
            ref={box1Ref}

            className=" w-24 h-24 bg-pink-600  rounded-xl"
          >
          </div>

        </div>
      </section>


      <section>

        <div className="w-screen h-screen  flex justify-between items-center px-10">
          <div
            ref={box3Ref}
            className=" w-24 h-24 bg-pink-600  rounded-xl"
          >
          </div>


        </div>

      </section>
    </div>





  )


}
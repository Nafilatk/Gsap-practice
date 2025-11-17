"use client"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function Home() {
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)



    useEffect(() => {



        gsap.from(box1Ref.current, {
            x: -400,
            duration: 3,
            rotate: 360,
            scale: 3,
            opacity: 0.8,
            ease: "power1.out",
        }),
            gsap.from(box2Ref.current, {
                x: 400,
                duration: 3,
                rotate: 360,
                scale: 3,
                opacity: 0.8,
                ease: "power1.out",
            })

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
                    <div
                        ref={box2Ref}

                        className=" w-24 h-24 bg-white  rounded-xl"
                    >
                    </div>

                </div>
            </section>


        </div>





    )


}
"use client"
import { gsap } from "gsap/gsap-core"
import { useEffect, useRef } from "react"

export default function Page(){
    const textRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(()=>{
        gsap.timeline()
    })
}

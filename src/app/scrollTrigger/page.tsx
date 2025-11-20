"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AdvancedScroll() {
  useEffect(() => {
gsap.from(".reveal", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
  }
    });

    gsap.from(".feature-box", {
      y: 70,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features",
        start: "top 75%",
        scrub: true,
      },
    });

    gsap.from(".dark-text", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".dark-section",
        start: "top top",
        end: "+=400",
        pin: true,
        scrub: true,
      },
    });

    gsap.to(".gallery-track", {
      x: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="space-y-40 p-8">

      <section className="hero h-screen flex flex-col justify-center items-center bg-emerald-800 rounded-3xl shadow-xl">
        <h1 className="reveal text-6xl font-bold">Smooth Scroll Magic</h1>
        <p className="reveal text-xl mt-4">Powered by GSAP & ScrollTrigger</p>
      </section>

]      <section className="features h-screen flex flex-col justify-center items-center bg-pink-200 rounded-3xl shadow-xl">
        <h2 className="text-5xl font-bold mb-10 text-pink-900">Features</h2>

        <div className="grid grid-cols-3 gap-10">
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Fast</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Smooth</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Reliable</div>
        </div>
      </section>

      <section className="dark-section h-screen flex justify-center items-center bg-cyan-900 text-white rounded-3xl shadow-xl p-10">
        <h2 className="dark-text text-6xl font-bold">Pinned Section</h2>
      </section>

      <section className="gallery h-screen overflow-hidden rounded-3xl shadow-xl bg-gray-200 flex items-center p-10">
        <div className="gallery-track flex gap-10">
          <img src="https://picsum.photos/400/300?1" className="rounded-xl shadow-xl" />
          <img src="https://picsum.photos/400/300?2" className="rounded-xl shadow-xl" />
          <img src="https://picsum.photos/400/300?3" className="rounded-xl shadow-xl" />
          <img src="https://picsum.photos/400/300?4" className="rounded-xl shadow-xl" />
        </div>
      </section>

    </div>
  );
}

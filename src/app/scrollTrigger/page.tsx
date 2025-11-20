"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AdvancedScroll() {
  useEffect(() => {


    gsap.from(".reveal", {
      x: -400,
      y: -300,
      opacity: 0,
      duration: 5,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".reveal",
        toggleActions: "restart pause resume",
      }
    });
    gsap.from(".feature-box", {
      y: 100,
      opacity: 0,
      duration: 4,
      stagger: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features",
        start: "top 75%",
        scrub: true,
      },
    });
    gsap.from(".fhead", {
      x: -400,
      y: 0,
      opacity: 0,
      duration: 5,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fhead",
        toggleActions: "restart pause resume",
        start: "top top",
        end: "+=800",


      }
    });


    gsap.from(".dark-text", {
      x: -400,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".dark-section",
        pin: true,
        markers: true,
        scrub: true,
      },
    });

    gsap.to(".gallery-track", {
      x: "-365%",
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "+=1800",
        scrub: true,
        markers: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="space-y-40 p-8">
      <div>

        <section className="hero h-screen flex flex-col justify-center items-center bg-emerald-800 rounded-3xl shadow-xl">
          <h1 className="reveal text-6xl font-bold">Smooth Scroll Magic</h1>
          <p className="reveal text-xl mt-4">Powered by GSAP & ScrollTrigger</p>

        </section>

      </div>

      <section className="features h-screen flex flex-col justify-center items-center bg-pink-200 rounded-3xl shadow-xl">
        <h2 className="fhead text-5xl font-bold items-end mb-10 text-pink-900">Features</h2>

        <div className="grid grid-cols-6 gap-10">
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Fast</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Smooth</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Reliable</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Fast</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Smooth</div>
          <div className="feature-box bg-black text-pink-200 p-10 rounded-xl shadow-xl text-center">Reliable</div>

        </div>
      </section>

      <section className="dark-section h-screen flex justify-center items-center bg-cyan-900 text-white rounded-3xl shadow-xl p-10">
        <h2 className="dark-text text-6xl font-bold">Pinned Section</h2>
      </section>

      <section className="gallery h-screen overflow-hidden rounded-3xl shadow-xl bg-gray-200 flex items-center p-10">
        <div className="gallery-track flex gap-10 h-full">
          <img
            src="https://i.pinimg.com/1200x/f9/c6/71/f9c671a98d4a6555ea30af394981d571.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 1"
          />
          <img
            src="https://i.pinimg.com/736x/77/e4/da/77e4dabd262ea7d7c9c5ee62a4153d51.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 2"
          />
          <img
            src="https://i.pinimg.com/736x/bf/b7/a0/bfb7a00fcee5ee3a8dc8c9eff1548bdd.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 3"
          />
          <img
            src="https://i.pinimg.com/736x/6f/d4/71/6fd471e93d9f15009cf83ca49b1bdc82.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 4"
          />
          <img
            src="https://i.pinimg.com/1200x/f9/c6/71/f9c671a98d4a6555ea30af394981d571.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 1"
          />
          <img
            src="https://i.pinimg.com/736x/77/e4/da/77e4dabd262ea7d7c9c5ee62a4153d51.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 2"
          />
          <img
            src="https://i.pinimg.com/736x/bf/b7/a0/bfb7a00fcee5ee3a8dc8c9eff1548bdd.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 3"
          />
          <img
            src="https://i.pinimg.com/736x/6f/d4/71/6fd471e93d9f15009cf83ca49b1bdc82.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 4"
          />
          <img
            src="https://i.pinimg.com/736x/bf/b7/a0/bfb7a00fcee5ee3a8dc8c9eff1548bdd.jpg"
            className="h-full w-auto object-cover rounded-xl shadow-xl "
            alt="Pinterest pic 3"
          />

        </div>
      </section>



    </div>
  );
}

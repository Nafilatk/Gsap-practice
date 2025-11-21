"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">MiniStore</h2>

      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div
        className={`flex flex-col md:flex-row gap-6 absolute md:static left-0 w-full md:w-auto bg-gray-800 px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ${
          open
            ? "top-16 opacity-100"
            : "top-[-300px] opacity-0 md:opacity-100"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/gsap.to">to</Link>
        <Link href="/gsap.from">from</Link>
        <Link href="/gsap.fromto">fromTo</Link>
        <Link href="/gsap.timeline">Timeline</Link>
        <Link href="/stagger">Stagger</Link>
        <Link href="/gsap.text">Text</Link>
        <Link href="/scrollTrigger">ScrollTrigger</Link>
      </div>
    </nav>
  );
}

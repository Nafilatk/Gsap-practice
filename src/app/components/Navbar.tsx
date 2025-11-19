import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">MiniStore</h2>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/gsap.to">to</Link>
        <Link href="/gsap.from">from</Link>
        <Link href="/gsap.fromto">fromTo</Link>
        <Link href="/gsap.timeline">Timeline</Link>
        <Link href="/stagger">Stagger</Link>
        <Link href="/gsap.text">Text</Link>

      </div>
    </nav>
  );
}
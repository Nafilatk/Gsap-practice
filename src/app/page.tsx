import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen  ">

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-42 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="https://i.pinimg.com/1200x/7a/d7/7f/7ad77fdae977c55f86893ae07d879676.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Greensock Animation Platform  (GSAP)
          </h1>
          <div>
                      <a
              className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[153px]"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={12}
              />
              Deploy Now
            </a>

          </div>
        </div>
      </main>
    </div>
  );
}
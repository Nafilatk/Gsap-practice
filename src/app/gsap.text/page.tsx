"use client"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
export default function Text() {

    const textHead = useRef<HTMLHeadingElement | null>(null)
    const para1Ref = useRef<HTMLParagraphElement | null>(null)
    const ulRef = useRef<HTMLUListElement | null>(null)
    const para2Ref = useRef<HTMLParagraphElement | null>(null)
    const para3Ref = useRef<HTMLParagraphElement | null>(null)
    const para4Ref = useRef<HTMLParagraphElement | null>(null)
    const para5Ref = useRef<HTMLParagraphElement | null>(null)


    useEffect(() => {
        const textElement = textHead.current
        if (!textElement) return;

        const words = textElement.textContent!.trim().split(" ")

        textElement.innerHTML = words
            .map((word) => {
                const letters = word
                    .split("")
                    .map((l) => `<span class="char inline-block">${l}</span>`)
                    .join("");
                return `<span class ="word inline-block mr-2">${letters}</span>`

            })
            .join("")

        const tl = gsap.timeline({
            defaults: {
                stagger: 1,
                opacity: 0,
                duration: 1

            }

        })
        tl.from(textElement.querySelectorAll(".word"), {
            y: 30,
            stagger: 0.2,
            ease: "power3.out"
        })

            .from(textElement.querySelectorAll(".char"), {
                y: 10,
                stagger: 0.02,
                ease: "power2.out"
            }, "-=0.5")
        tl.from(para1Ref.current, {
            y: 20,

            ease: "power3.out"
        })
            .from(ulRef.current, {
                x: 50,
                duration: 1,
                ease: "power3.out"

            })
            .from(para2Ref.current, {
                x: -50,
                duration: 1,
                ease: "power3.out"

            })
            .from(para3Ref.current, {
                y: 40,
                skewY: 50,
                stagger: 0.05,
                ease: "power4.out"
            })
            .from(para4Ref.current, {
                duration: 1,
                yoyo: true,
                ease: "none",

            })
            .from(para5Ref.current, {
                clipPath: "inset(0 0 100% 0)",
                duration: 3,
                ease: "power2.out"
            })


    })
    return (

        <div>

            <section>
                <div className=" flex flex-col gap-4 justify-center items-center bg-black text-white p-20 40  ">

                    <h1 ref={textHead} className="text-5xl font-bold">
                        Text Animations
                    </h1>



                    <p ref={para1Ref} className=" ml-20 mr-20">GSAP has dedicated text utilities (SplitText, TextPlugin, ScrambleText) that make text animation much easier. See the docs for SplitText and TextPlugin.


                        Scroll-triggered text animations are commonly done with ScrollTrigger.


                        As of recent GSAP announcements, GSAP (and many text tools) are broadly available for free/modern use — check the official pricing/docs for the latest license details.
                        Plugins — SplitText (split DOM into chars/words/lines), TextPlugin (typewriter-like text changes), ScrambleText (randomizing letters). Use them when it simplifies code.

                    </p>

                    <ul ref={ulRef} className=" ml-20 mr-20">
                        <li >
                            Tween / Timeline — a tween animates a property; a timeline sequences/coordinates tweens.
                            heheheheheheheheh
                        </li>
                        <li>
                            Stagger — offsetting start times across sibling elements (perfect for characters/words).
                        </li>
                        <li>
                            from / to / fromTo — start-from vs end-to animation styles; from() is great for entrance effects.
                        </li>
                        <li>
                            Transform & GPU — prefer transform (translate/scale/rotate, opacity) over layout properties (width/top) for perf.
                        </li>
                        <li>
                            Plugins — SplitText (split DOM into chars/words/lines), TextPlugin (typewriter-like text changes), ScrambleText (randomizing letters). Use them when it simplifies code.
                        </li>
                    </ul>


                    <p ref={para2Ref} className=" ml-20 mr-20">
                        Accessibility & semantics

                        Keep the actual text in the DOM (do not replace it irreversibly). Plugins like SplitText handle screen-reader safety; manual splits should preserve aria-label or an offscreen plain text fallback.

                        Avoid animations that cause motion sickness (provide reduced-motion alternatives using @media (prefers-reduced-motion: reduce)).

                        Ensure focus states and keyboard navigation aren’t broken by overlays/masks.
                    </p>


                    <p ref={para3Ref} className=" ml-20 mr-20">
                        Performance tips

                        Animate transforms & opacity, not layout properties (left, top, width, height).

                        Use will-change: transform, opacity sparingly for elements you animate.

                        Keep DOM count reasonable — splitting every character in paragraphs is expensive; restrict per-heading.

                        Test on mid/low-end mobile devices. For heavy, consider canvas/WebGL approaches.

                        Batch DOM changes and avoid reading layout (reflow) inside loops.
                    </p>

                    <p ref={para4Ref} className=" ml-20 mr-20">
                        When to use a plugin vs manual

                        Use SplitText for fast, robust splitting with responsive re-splitting and accessibility.
                        GSAP

                        Use TextPlugin for typed text or replacing whole content strings.
                        GSAP

                        Manual splitting is fine for tiny headings or when you prefer no external plugin.
                    </p>



                    <p ref={para5Ref} className=" ml-20 mr-20">
                        Debugging tips & best practices

                        If stagger/timing looks off, visualize with tl.timeScale(0.5) to slow timeline.

                        Use gsap.getProperty(el, "x") or gsap.getTweensOf(el) to inspect.

                        If SplitText isn’t defined, ensure you imported/registerPlugin before using it.


                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                    </p>
                </div>


            </section>

        </div>


    )
}
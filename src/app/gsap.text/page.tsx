"use client"
import { gsap } from "gsap"
import { url } from "inspector"
import { useEffect, useRef } from "react"
export default function Text() {

    const textHead = useRef<HTMLHeadingElement | null>(null)
    const para1Ref = useRef<HTMLParagraphElement | null>(null)
    const ulRef = useRef<HTMLUListElement | null>(null)
    const para2Ref = useRef<HTMLParagraphElement | null>(null)
    const para3Ref = useRef<HTMLParagraphElement | null>(null)
    const para4Ref = useRef<HTMLParagraphElement | null>(null)


    useEffect(() => {
        const textElement = textHead.current
        if(!textElement) return;

        const letters = textElement.textContent!.split(" ")  

        textElement.innerHTML = letters
            .map((l) => `<span class="char inline-block">${l}</span>`)
            .join("");

        const tl = gsap.timeline({
            defaults: {
                stagger: 1,
                opacity: 0,
                duration: 1
            }

        })
        tl.from(textElement.querySelectorAll(".char"), {
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.7,
                ease: "power3.out",
            });
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
            duration: 2,
            yoyo: true,
            ease: "none",

        })


    })
    return (

        <div>
            <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center bg-black text-white">
                <h1 ref={textHead} className="text-5xl items-center font-bold">Text Animations </h1>



                <p ref={para1Ref} className=" ml-20 mr-20">GSAP has dedicated text utilities (SplitText, TextPlugin, ScrambleText) that make text animation much easier. See the docs for SplitText and TextPlugin.


                    Scroll-triggered text animations are commonly done with ScrollTrigger.


                    As of recent GSAP announcements, GSAP (and many text tools) are broadly available for free/modern use — check the official pricing/docs for the latest license details.
                    Plugins — SplitText (split DOM into chars/words/lines), TextPlugin (typewriter-like text changes), ScrambleText (randomizing letters). Use them when it simplifies code.

                </p>

                <ul ref={ulRef} className=" ml-20 mr-20">
                    <li >
                        Tween / Timeline — a tween animates a property; a timeline sequences/coordinates tweens.
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

            </div>

            {/* 

            <p>
                Debugging tips & best practices

                If stagger/timing looks off, visualize with tl.timeScale(0.5) to slow timeline.

                Use gsap.getProperty(el, "x") or gsap.getTweensOf(el) to inspect.

                If SplitText isn’t defined, ensure you imported/registerPlugin before using it.
            </p> */}
        </div>
    )
}
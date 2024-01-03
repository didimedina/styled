import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Basic() {
  return (
    <>
      <button
        type="button"
        className="rounded-[6px] bg-gradient-to-t from-orange-950/30 bg-brand-10 px-4 h-8 text-xs font-semibold text-brand-2 shadow-sm shadow-brand-6 hover:bg-brand-9 ring-1 ring-brand-12 ring-inset  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >Push it!
      </button>
  </>
)}


//==============================



export function Animated() {
  
  const container = useRef();
  // const tl = useRef()
  // do you need a timeline for any reason in this example if you start stacking animations?

  
  const { contextSafe } = useGSAP({  scope: container });

  const animButton = contextSafe(() => {
      gsap.to("#button", {rotation: "+=45"})
  })
  
  
  return (
    <div ref={container}>
      <button
        id="button"
        type="button"
        className="rounded-[6px] bg-gradient-to-t from-orange-950/30 bg-brand-10 px-4 h-8 text-xs font-semibold text-brand-2 shadow-sm shadow-brand-6 hover:bg-brand-9 ring-1 ring-brand-12 ring-inset  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onMouseEnter={animButton}
      >
        <p>Push Me!</p>
      </button>
    </div>
)}
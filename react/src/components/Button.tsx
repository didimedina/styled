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
      gsap.timeline()
      .to("#icon", {scale: .9, opacity: 0.8, duration: .2})
      .to("#icon", {scale: 1, opacity: 1, duration: .6}) 
  })
  
  
  return (
    <div ref={container}>
      <button
        type="button"
        className="flex items-center gap-1 rounded-[6px] bg-gradient-to-t from-brand-12/60 bg-brand-10 px-4 h-11 text-md font-medium text-brand-2 shadow-sm shadow-brand-6 hover:bg-brand-9 ring-1 ring-brand-12 ring-inset"
        onMouseEnter={animButton}
      >
        <div id="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </div>
        <p>Push Me!</p>
      </button>
    </div>
)}
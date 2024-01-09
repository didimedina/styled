import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useRef } from "react";

export function Basic() {
  return (
    <>
      <button
        type="button"
        className="flex items-center gap-1 rounded-[6px] bg-gradient-to-t from-purple-950/10 bg-purple-50 px-4 h-11 text-md font-medium text-purple-950 shadow-sm shadow-purple-950/10 hover:bg-purple-100 ring-1 ring-purple-950/20 ring-inset"
      >Push it!
      </button>
  </>
)}

//==============================



export function SimpleAnimated() {
  
  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const animButton = contextSafe(() => {
      gsap.timeline()
      .to("#icon", {scale: .9, opacity: 0.8, duration: .2})
      .to("#icon", {scale: 1, opacity: 1, duration: .6}) 
  })
  
  
  return (
    <div ref={container}>
      <button
        type="button"
        className="flex items-center gap-1 rounded-[6px] bg-gradient-to-t from-purple-950/50 bg-purple-700 px-4 h-11 text-md font-medium text-purple-100 shadow-sm shadow-purple-900/50 hover:bg-purple-800 ring-1 ring-purple-950 ring-inset"
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


// ==============================

export function ComplexAnimated() {

  
  const container = useRef();
  
  useGSAP(() => {
    gsap.registerPlugin(Observer)

    Observer.create({  
      target: "#button",
      type: "pointer",
      capture: true,
      // onMove: (observer) => {
      //   const { x, y } = observer; // Get cursor position
      //   gsap.to("#icon", {
      //     left: x - observer.target.getBoundingClientRect().left, // Adjust for element position
      //     top: y - observer.target.getBoundingClientRect().top,
      //     duration: 3,
      //     ease: "expo.out"
      //   })},
      onMove: (observer) => {
        const buttonRect = observer.target.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
      
        gsap.to("#icon", {
          left: observer.x - centerX - 12/* half of icon's width */,
          top: observer.y - centerY - 12/* half of icon's height */,
          duration: 3,
          ease: "expo.out"
        })},
      onHoverEnd: () => {
        gsap.to("#icon", {
          top: 0,
          left: 0,
          duration: 3,
          ease: "expo.out"
        })},
  });

  },{ scope: container });


  
  
  return (
    <div ref={container}>
      <button
        id="button"
        type="button"
        className="relative rounded-[6px] bg-gradient-to-t from-purple-950/50 bg-purple-700 h-11 aspect-square text-md  font-medium text-purple-100 shadow-sm shadow-purple-900/50 hover:bg-purple-800 ring-1 ring-purple-950 ring-inset"
        // onMouseEnter={animButton}
      >
        <div className="absolute w-6 aspect-square ring-1 inset-0 m-auto ring-purple-500" id="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </div>
      </button>
    </div>
)}
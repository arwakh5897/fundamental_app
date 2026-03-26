import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      smoothTouch: true,
      normalizeWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;

// useEffect(() => {
//   const lenis = new Lenis({
//     duration: 1.2,          
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // very popular easing (expo-out like)
//     // easing: (t) => 1 - Math.pow(1 - t, 3),          // alternative: cubic-out, bit snappier
//     smoothWheel: true,
//     wheelMultiplier: 0.9,       // ← slightly slower mouse wheel feel (default 1)
//     smoothTouch: true,         // ← important: disable on mobile → prevents weird jitter / over-scroll
//     normalizeWheel: true,       // helps consistency across devices
//   });

//   // Optional: listen to scroll events if you later add GSAP / parallax
//   // lenis.on('scroll', (e) => { console.log(e); });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   // Cleanup (good practice)
//   return () => {
//     lenis.destroy();
//   };
// }, []);
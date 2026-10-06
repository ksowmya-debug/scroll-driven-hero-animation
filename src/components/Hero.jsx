import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from './Stats';
import ScrollVisual from './ScrollVisual';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const statsContainerRef = useRef(null);
  const visualRef = useRef(null);

  useLayoutEffect(() => {
    // A GSAP context to ensure proper cleanup in React
    const ctx = gsap.context(() => {
      // 1. Initial Load Animation Timeline
      const tl = gsap.timeline();

      // Headline entrance: opacity 0->1, y 40->0
      tl.fromTo(headlineRef.current, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      // Stats stagger entrance
      .fromTo(statsContainerRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
        "-=0.6" // start slightly before headline finishes
      )
      // Visual entrance
      .fromTo(visualRef.current,
        { opacity: 0, scale: 0.85, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.4"
      );

      // 2. Scroll-Driven Animation (Scrub & Pin)
      // We pin the entire hero container while scrolling 1500px, 
      // transforming the visual as we scrub.
      gsap.to(visualRef.current, {
        x: '30vw', // Moves noticeably horizontally
        y: '5vh',  // Slight vertical shift
        scale: 1.3, // Scales up
        rotation: 12, // Slight rotation
        ease: 'none', // Important for smooth scrub
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=1500', // Pinned for 1500px of scrolling
          scrub: 1,      // 1 second smoothing effect on scrub
          pin: true,     // Pin the hero section
          anticipatePin: 1
        }
      });
    }, heroRef); // Scope to heroRef

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen flex flex-col items-center justify-start pt-20 overflow-hidden bg-[#050505]"
    >
      {/* Background gradients for premium feel */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Headline */}
      <h1 
        ref={headlineRef}
        className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] md:tracking-[0.4em] text-center uppercase text-glow opacity-0 z-10 px-4 mt-8"
      >
        <span className="block mb-2 text-gray-300">W E L C O M E</span>
        <span className="block font-medium text-white">I T Z &nbsp; F I Z Z</span>
      </h1>

      {/* Stats */}
      <div ref={statsContainerRef} className="z-10 mt-12 w-full max-w-4xl px-6">
        <Stats />
      </div>

      {/* Main Visual */}
      <div 
        ref={visualRef} 
        className="absolute top-[50%] left-1/2 -translate-x-1/2 md:-translate-x-1/2 opacity-0 z-20 w-full max-w-3xl flex justify-center"
      >
        <ScrollVisual />
      </div>
    </section>
  );
};

export default Hero;

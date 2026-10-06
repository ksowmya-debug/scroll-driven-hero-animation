import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, MousePointer2, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section heading
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stagger cards
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featureList = [
    {
      title: "Smooth Motion",
      desc: "Optimized GSAP animations driven entirely by scroll progress.",
      icon: <Activity className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Scroll Interaction",
      desc: "Scrubbed timelines that allow users to control playback naturally.",
      icon: <MousePointer2 className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Performance",
      desc: "Hardware-accelerated transforms instead of expensive layout reflows.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-32 px-6 bg-[#050505] flex flex-col items-center border-t border-white/5 relative z-10">
      <div ref={headingRef} className="max-w-3xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
          BUILT FOR SMOOTH <br className="hidden md:block"/> DIGITAL EXPERIENCES
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          This page demonstrates premium scroll-driven interactions using GSAP ScrollTrigger,
          creating an immersive narrative that follows the user's pace.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {featureList.map((feature, i) => (
          <div 
            key={i}
            className="flex flex-col items-start p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] hover:border-white/[0.1] transition-colors"
          >
            <div className="p-3 bg-white/[0.05] rounded-xl mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

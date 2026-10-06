import React from 'react';

const ScrollVisual = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-96 md:h-96">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>
      
      {/* Main Abstract Visual (Geometric / Automotive-inspired silhouette) */}
      <svg 
        viewBox="0 0 200 100" 
        className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 20,80 L 40,40 L 100,20 L 160,40 L 180,80 Z" 
          stroke="url(#grad1)" 
          strokeWidth="3" 
          fill="rgba(30, 58, 138, 0.4)"
          strokeLinejoin="round"
        />
        <path 
          d="M 40,40 L 160,40" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1" 
        />
        <path 
          d="M 100,20 L 100,80" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1" 
        />
        <circle cx="60" cy="80" r="12" stroke="cyan" strokeWidth="2" fill="#000" />
        <circle cx="140" cy="80" r="12" stroke="cyan" strokeWidth="2" fill="#000" />
        
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollVisual;

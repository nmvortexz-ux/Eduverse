import React from 'react';

interface EduVerseLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function EduVerseLogo({ className = '', ...props }: EduVerseLogoProps) {
  return (
    <svg 
      viewBox="0 15 200 195" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* ── Icon (Geometric Monogram) ── */}
      <g 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="square" 
        strokeLinejoin="miter"
      >
        {/* Central Spine */}
        <line x1="100" y1="30" x2="100" y2="150" />
        
        {/* Top Section (Horizontal line + intersecting semi-circle) */}
        <line x1="40" y1="30" x2="160" y2="30" />
        <path d="M 40 30 A 60 60 0 0 0 160 30" />
        
        {/* Bottom Section (Quarter circle + horizontal base) */}
        <path d="M 100 90 A 60 60 0 0 0 40 150" />
        <line x1="40" y1="150" x2="160" y2="150" />
      </g>
      
      {/* ── Typography ── */}
      {/* Primary Brand Text */}
      <text 
        x="100" 
        y="195" 
        textAnchor="middle" 
        fill="currentColor" 
        textLength="135" 
        lengthAdjust="spacing"
        style={{ 
          fontFamily: '"Montserrat", "Spartan", system-ui, -apple-system, sans-serif', 
          fontSize: '24px', 
          fontWeight: 800 
        }}
      >
        EDUVERSE
      </text>
    </svg>
  );
}

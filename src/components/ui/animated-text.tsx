import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  groupHoverClass?: string;
}

export function AnimatedText({ text, groupHoverClass = "group-hover/btn", className = "" }: AnimatedTextProps) {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        char === ' ' ? <span key={index} className="w-[4px]">&nbsp;</span> :
        <span 
          key={index} 
          className={`block transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] relative ${groupHoverClass}:-translate-y-full`}
          style={{ transitionDelay: `${index * 15}ms` }}
        >
          <span className="block">{char}</span>
          <span className="absolute top-full left-0 block">{char}</span>
        </span>
      ))}
    </div>
  );
}

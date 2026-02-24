import React from 'react';
import { cn } from '@/lib/utils';

interface RollingTextProps {
  text: string;
  className?: string;
  groupHoverClass?: string;
}

export function RollingText({ text, className, groupHoverClass = "group-hover/btn" }: RollingTextProps) {
  return (
    <div 
      className={cn(
        "relative flex items-center justify-center overflow-hidden h-[1.5em] leading-[1.5em]",
        className
      )}
      style={{
        // @ts-ignore
        '--line-height-abs': '1.5em',
      }}
    >
      <div className={cn(
        "flex transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
        "group-hover:-translate-y-full", // Default if no groupHoverClass
        groupHoverClass && `${groupHoverClass}:-translate-y-full`
      )}>
        <p 
          className="m-0 p-0 flex whitespace-pre"
          style={{
            // @ts-ignore
            '--text': 'currentColor',
            textShadow: '0 1.5em 0 var(--text)',
          }}
        >
          {text.split('').map((char, i) => (
            <span 
              key={i} 
              className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

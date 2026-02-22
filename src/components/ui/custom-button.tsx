import React from 'react';
import { AnimatedText } from './animated-text';
import { cn } from '@/lib/utils'; 
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  groupClass?: string;
  href?: string;
}

export function CustomButton({ 
  text, 
  variant = 'primary', 
  className = '', 
  groupClass = 'group/btn',
  href,
  ...props 
}: CustomButtonProps) {
  const variants = {
    primary: 'bg-[#1852CC] text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500/30',
    outline: 'border-2 border-[#1852CC] text-[#1852CC] hover:bg-[#1852CC] hover:text-white',
    white: 'bg-white text-[#1852CC] hover:bg-slate-50 hover:shadow-md',
  };

  const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]';
  
  const hoverClass = groupClass.replace('group/', 'group-hover/');
  const content = <AnimatedText text={text} groupHoverClass={hoverClass} />;

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${groupClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${groupClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}

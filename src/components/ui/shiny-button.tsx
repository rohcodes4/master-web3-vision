import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  target?: string;
  rel?: string;
}

export function ShinyButton({ children, onClick, className = "", variant = "primary" }: ShinyButtonProps) {
  const isPrimary = variant === "primary";
  
  return (
    <button 
      className={`shiny-cta ${isPrimary ? 'shiny-primary' : 'shiny-secondary'} ${className}`} 
      onClick={onClick}
    >
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
}

export function ShinyLink({ 
  children, 
  className = "", 
  variant = "primary", 
  href, 
  target, 
  rel,
  onClick 
}: ShinyButtonProps) {
  const isPrimary = variant === "primary";
  
  return (
    <a 
      href={href}
      target={target}
      rel={rel}
      className={`shiny-cta ${isPrimary ? 'shiny-primary' : 'shiny-secondary'} ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">{children}</span>
    </a>
  );
}

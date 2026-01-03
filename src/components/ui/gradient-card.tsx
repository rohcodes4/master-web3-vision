'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export const GradientCard = ({ 
  icon, 
  title, 
  description, 
  linkText = "Read More",
  linkHref = "#" 
}: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-[360px] h-[320px] rounded-3xl overflow-hidden cursor-pointer group"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl z-10 pointer-events-none" />

      {/* Dark background */}
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(145deg, rgba(15,15,20,0.95) 0%, rgba(10,10,15,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Purple/cyan glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-sky-500/30 rounded-3xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Central purple glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-40'}`} />

      {/* Bottom border glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />

      {/* Left edge glow */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-30'}`} />

      {/* Right edge glow */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-gradient-to-b from-transparent via-sky-400/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-30'}`} />

      {/* Card content */}
      <div className="relative z-20 h-full flex flex-col p-8">
        {/* Icon circle */}
        <div className="relative mb-6">
          <div className={`absolute inset-0 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-lg transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
          <div 
            className="relative w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, rgba(139,92,246,0.15) 0%, rgba(34,211,238,0.15) 100%)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-syne text-xl font-bold text-white mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Link */}
        <a href={linkHref} className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mt-6 group/link">
          {linkText}
          <svg 
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

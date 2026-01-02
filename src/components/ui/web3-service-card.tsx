"use client"

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Web3ServiceCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  delay?: number;
}

export function Web3ServiceCard({
  icon: Icon,
  title,
  features,
  delay = 0
}: Web3ServiceCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 transition-all duration-500 hover:bg-white/[0.06] hover:border-primary/30 hover:-translate-y-2 animate-float"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      {/* Icon Section */}
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-syne text-xl font-bold mb-5 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-foreground/70">
            <span className="text-primary text-xs">→</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

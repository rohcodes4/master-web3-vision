"use client"

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedGlowingSearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFilterClick?: () => void;
  className?: string;
}

export function AnimatedGlowingSearch({
  placeholder = "Search projects...",
  value,
  onChange,
  onFilterClick,
  className = ""
}: AnimatedGlowingSearchProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative group">
        {/* Glow Layer 1 - Main outer glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[80px] max-w-[calc(100%-16px)] sm:max-w-[420px] rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-60 blur-2xl group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Glow Layer 2 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[70px] max-w-[calc(100%-32px)] sm:max-w-[400px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-40 blur-xl animate-pulse" />
        
        {/* Glow Layer 3 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[60px] max-w-[calc(100%-48px)] sm:max-w-[380px] rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-30 blur-lg" />

        {/* Bright highlight layer */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[56px] max-w-[calc(100%-64px)] sm:max-w-[360px] rounded-xl bg-gradient-to-r from-purple-300/20 via-pink-300/30 to-purple-300/20 opacity-50" />

        {/* Inner border glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[392px] h-[58px] max-w-[calc(100%-18px)] sm:max-w-[392px] rounded-lg border border-purple-500/30" />

        {/* Main input container */}
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="bg-background/95 backdrop-blur-sm border border-purple-500/40 w-full sm:w-[390px] h-[56px] rounded-lg text-foreground px-14 text-base focus:outline-none focus:border-purple-400 placeholder-muted-foreground transition-colors" 
          />
          
          {/* Input fade mask */}
          <div className="absolute right-14 top-0 bottom-0 w-8 bg-gradient-to-l from-background/95 to-transparent pointer-events-none" />
          
          {/* Pink glow accent */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 w-2 h-8 bg-pink-500/40 blur-md rounded-full" />
          
          {/* Spinning border on filter button */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-conic from-purple-500 via-pink-500 to-purple-500 animate-spin-slow opacity-60" style={{ animationDuration: '4s' }} />
          </div>
          
          {/* Filter button */}
          <button 
            onClick={onFilterClick}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-background rounded-md flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          
          {/* Search icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
            <Search className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface FilterTag {
  id: string;
  label: string;
}

interface GlowingFilterTagsProps {
  tags: FilterTag[];
  activeTag: string;
  onTagClick: (id: string) => void;
}

export function GlowingFilterTags({ tags, activeTag, onTagClick }: GlowingFilterTagsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onTagClick(tag.id)}
          className={cn(
            "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeTag === tag.id
              ? "text-white"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {/* Active glow effect */}
          {activeTag === tag.id && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-80" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 blur-md opacity-60" />
              <div className="absolute inset-[1px] rounded-full bg-background/80 backdrop-blur-sm" />
            </>
          )}
          <span className="relative z-10">{tag.label}</span>
        </button>
      ))}
    </div>
  );
}

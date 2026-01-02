"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidBadgeVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default",
  {
    variants: {
      variant: {
        default: "text-primary",
        secondary: "text-secondary-foreground",
        destructive: "text-destructive",
        outline: "text-foreground",
        success: "text-green-600 dark:text-green-400",
        warning: "text-amber-600 dark:text-amber-400",
      },
      size: {
        sm: "h-5 px-2 text-[10px] rounded-full",
        default: "h-6 px-3 text-xs rounded-full",
        lg: "h-7 px-4 text-sm rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function GlassFilter() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id="liquid-glass-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feDisplacementMap in="blur" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="1" result="softBlur" />
          <feMerge>
            <feMergeNode in="softBlur" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

export interface LiquidGlassBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof liquidBadgeVariants> {}

function LiquidGlassBadge({
  className,
  variant,
  size,
  children,
  ...props
}: LiquidGlassBadgeProps) {
  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden",
          liquidBadgeVariants({ variant, size }),
          className
        )}
        {...props}
      >
        {/* Glass shadow layer */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.1)]" />
        
        {/* Blur/distortion layer */}
        <div 
          className="absolute inset-0 rounded-full bg-white/5 dark:bg-white/10 backdrop-blur-md"
          style={{ filter: "url(#liquid-glass-filter)" }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-1">
          {children}
        </span>
      </div>

      <GlassFilter />
    </>
  )
}

export { LiquidGlassBadge, liquidBadgeVariants }

"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidButtonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-white",
        primary: "bg-transparent hover:scale-105 duration-300 transition text-primary",
        secondary: "bg-transparent hover:scale-105 duration-300 transition text-secondary",
        destructive: "bg-transparent hover:scale-105 duration-300 transition text-red-400",
        success: "bg-transparent hover:scale-105 duration-300 transition text-emerald-400",
      },
      size: {
        sm: "h-8 text-xs gap-1.5 px-4",
        default: "h-10 px-5 py-2",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
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
    <svg className="hidden absolute" aria-hidden="true">
      <defs>
        <filter id="liquidGlassButton">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" seed="2" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feDisplacementMap in="blur" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" result="displacement" />
          <feGaussianBlur in="displacement" stdDeviation="1" result="softDisplacement" />
          <feMerge>
            <feMergeNode in="softDisplacement" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean
}

function LiquidGlassButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidGlassButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <>
      <Comp
        className={cn(
          "relative",
          liquidButtonVariants({ variant, size, className })
        )}
        {...props}
      >
        {/* Outer glass shadow layer */}
        <span 
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `
              inset 2px 2px 4px rgba(255, 255, 255, 0.15),
              inset -2px -2px 4px rgba(0, 0, 0, 0.25),
              inset 0 0 20px rgba(0, 255, 136, 0.1),
              0 4px 16px rgba(0, 0, 0, 0.4),
              0 2px 4px rgba(0, 0, 0, 0.3)
            `,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.1) 100%)'
          }}
        />
        
        {/* Blur/distortion backdrop layer */}
        <span 
          className="absolute inset-0 rounded-full backdrop-blur-xl"
          style={{
            filter: 'url(#liquidGlassButton)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 font-semibold uppercase tracking-wider">
          {children}
        </span>
      </Comp>
      <GlassFilter />
    </>
  )
}

interface LiquidGlassLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof liquidButtonVariants> {}

function LiquidGlassLink({
  className,
  variant,
  size,
  children,
  ...props
}: LiquidGlassLinkProps) {
  return (
    <>
      <a
        className={cn(
          "relative",
          liquidButtonVariants({ variant, size, className })
        )}
        {...props}
      >
        {/* Outer glass shadow layer */}
        <span 
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `
              inset 2px 2px 4px rgba(255, 255, 255, 0.15),
              inset -2px -2px 4px rgba(0, 0, 0, 0.25),
              inset 0 0 20px rgba(0, 255, 136, 0.1),
              0 4px 16px rgba(0, 0, 0, 0.4),
              0 2px 4px rgba(0, 0, 0, 0.3)
            `,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.1) 100%)'
          }}
        />
        
        {/* Blur/distortion backdrop layer */}
        <span 
          className="absolute inset-0 rounded-full backdrop-blur-xl"
          style={{
            filter: 'url(#liquidGlassButton)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 font-semibold uppercase tracking-wider">
          {children}
        </span>
      </a>
      <GlassFilter />
    </>
  )
}

export { LiquidGlassButton, LiquidGlassLink, liquidButtonVariants }

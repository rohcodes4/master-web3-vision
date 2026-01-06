"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CircleState {
  id: number
  x: number
  y: number
  color: string
  fadeState: "in" | "out" | null
}

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, href, target, rel, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<CircleState[]>([])
    const lastAddedRef = React.useRef(0)

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0
      const xPos = x / buttonWidth
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${
        xPos * 100
      }%)`

      setCircles((prev) => [
        ...prev,
        { id: Date.now(), x, y, color, fadeState: null },
      ])
    }, [])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent) => {
        if (!isListening) return
        
        const currentTime = Date.now()
        if (currentTime - lastAddedRef.current > 100) {
          lastAddedRef.current = currentTime
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          createCircle(x, y)
        }
      },
      [isListening, createCircle]
    )

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true)
    }, [])

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false)
    }, [])

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "in" } : c
              )
            )
          }, 0)

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "out" } : c
              )
            )
          }, 1000)

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id))
          }, 2200)
        }
      })
    }, [circles])

    const buttonContent = (
      <>
        {/* Neon top border */}
        <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        
        {circles.map(({ id, x, y, color, fadeState }) => (
          <div
            key={id}
            className={cn(
              "pointer-events-none absolute h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1200ms]",
              fadeState === "in" && "opacity-100 scale-100",
              fadeState === "out" && "opacity-0 scale-150",
              !fadeState && "opacity-0 scale-50"
            )}
            style={{
              left: x,
              top: y,
              background: color,
            }}
          />
        ))}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        
        {/* Neon bottom border */}
        <span className="absolute group-hover:opacity-50 opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
      </>
    )

    const commonClasses = cn(
      "group hover-button relative overflow-hidden rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-white transition-all duration-300",
      "bg-muted/10 hover:bg-muted/20 hover:shadow-lg hover:shadow-primary/10",
      "border border-muted/30",
      className
    )

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={commonClasses}
          onPointerMove={handlePointerMove as any}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          style={{
            ["--circle-start" as string]: "hsl(var(--primary) / 0.3)",
            ["--circle-end" as string]: "hsl(var(--primary) / 0.6)",
          }}
        >
          {buttonContent}
        </a>
      )
    }

    return (
      <button
        ref={buttonRef}
        className={commonClasses}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          ["--circle-start" as string]: "hsl(var(--primary) / 0.3)",
          ["--circle-end" as string]: "hsl(var(--primary) / 0.6)",
        }}
        {...props}
      >
        {buttonContent}
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }

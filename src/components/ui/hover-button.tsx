import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

interface Circle {
  id: number
  x: number
  y: number
  color: string
  fadeState: "in" | "out" | null
}

const useHoverEffect = () => {
  const containerRef = React.useRef<HTMLElement>(null)
  const [isListening, setIsListening] = React.useState(false)
  const [circles, setCircles] = React.useState<Circle[]>([])
  const lastAddedRef = React.useRef(0)

  const createCircle = React.useCallback((x: number, y: number) => {
    const buttonWidth = containerRef.current?.offsetWidth || 0
    const xPos = x / buttonWidth
    const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100}%)`

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

  return {
    containerRef,
    circles,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  }
}

const CircleEffects = ({ circles }: { circles: Circle[] }) => (
  <>
    {circles.map(({ id, x, y, color, fadeState }) => (
      <div
        key={id}
        className={cn(
          "pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000",
          fadeState === "in" && "opacity-100 scale-100",
          fadeState === "out" && "opacity-0 scale-150",
          !fadeState && "opacity-0 scale-50"
        )}
        style={{
          left: x,
          top: y,
          background: color,
          boxShadow: `0 0 20px 8px hsl(var(--primary) / 0.4)`,
        }}
      />
    ))}
  </>
)

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    const {
      containerRef,
      circles,
      handlePointerMove,
      handlePointerEnter,
      handlePointerLeave,
    } = useHoverEffect()

    return (
      <button
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          "hover-button relative isolate overflow-hidden rounded-full px-6 py-3 md:px-8 md:py-4 font-medium text-sm md:text-base uppercase tracking-wider transition-all duration-300",
          variant === "primary" && "hover-button-primary bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]",
          variant === "secondary" && "hover-button-secondary border border-primary/30 bg-background/50 text-foreground hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <CircleEffects circles={circles} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

const HoverLink = React.forwardRef<HTMLAnchorElement, HoverLinkProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    const {
      containerRef,
      circles,
      handlePointerMove,
      handlePointerEnter,
      handlePointerLeave,
    } = useHoverEffect()

    return (
      <a
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          "hover-button relative isolate overflow-hidden rounded-full px-6 py-3 md:px-8 md:py-4 font-medium text-sm md:text-base uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center",
          variant === "primary" && "hover-button-primary bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]",
          variant === "secondary" && "hover-button-secondary border border-primary/30 bg-background/50 text-foreground hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <CircleEffects circles={circles} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    )
  }
)

HoverLink.displayName = "HoverLink"

export { HoverButton, HoverLink }

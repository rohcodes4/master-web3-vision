"use client"

import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

type AnimatedBadgeProps = {
  text?: string
  color?: string
  href?: string
  icon?: React.ReactNode
}

function hexToRgba(hexColor: string, alpha: number): string {
  const hex = hexColor.replace("#", "")
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return hexColor
}

export const AnimatedBadge = ({
  text = "Technology",
  color = "#22d3ee",
  href,
  icon,
}: AnimatedBadgeProps) => {
  const content = (
    <motion.div
      className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.05, borderColor: hexToRgba(color, 0.5) }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        boxShadow: `0 0 20px ${hexToRgba(color, 0.1)}`,
      }}
    >
      {/* Animated light trail SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id={`grad-${text}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={hexToRgba(color, 0)} />
            <stop offset="50%" stopColor={hexToRgba(color, 1)} />
            <stop offset="100%" stopColor={hexToRgba(color, 0)} />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="9999"
          ry="9999"
          fill="none"
          stroke={hexToRgba(color, 0.1)}
          strokeWidth="1"
        />
        <rect
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="9999"
          ry="9999"
          fill="none"
          stroke={`url(#grad-${text})`}
          strokeWidth="2"
          style={{
            offsetPath: `rect(0 0 100% 100% round 9999px)`,
            animation: "multiline-animation-path 3s linear infinite",
          }}
        />
      </svg>

      {/* Pulsing dot indicator */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: hexToRgba(color, 0.4) }}
        />
        <div
          className="relative w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Divider */}
      <div
        className="h-4 w-px"
        style={{ backgroundColor: hexToRgba(color, 0.3) }}
      />

      {/* Icon (optional) */}
      {icon && (
        <span className="text-white/70" style={{ color: hexToRgba(color, 0.8) }}>
          {icon}
        </span>
      )}

      {/* Text */}
      <span className="text-sm font-medium text-white/90 whitespace-nowrap">{text}</span>

      {/* Arrow */}
      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" style={{ color: hexToRgba(color, 0.6) }} />
    </motion.div>
  )

  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
      <style>{`
        @keyframes multiline-animation-path {
          0% { offset-distance: 0%; }
          50% { offset-distance: 100%; }
          100% { offset-distance: 100%; }
        }
      `}</style>
    </>
  )
}

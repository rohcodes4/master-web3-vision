"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"

interface CosmicCardProps {
  image: string
  className?: string
  theme?: {
    primaryColor?: string
    secondaryColor?: string
    glowColor?: string
  }
  height?: string | number
  width?: string | number
}

const CosmicCard: React.FC<CosmicCardProps> = ({
  image,
  className = "",
  theme = {
    primaryColor: "#A855F7",
    secondaryColor: "#EC4899",
    glowColor: "rgba(168, 85, 247, 0.6)",
  },
  height = "320px",
  width = "100%",
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const rotationRef = useRef({ x: 10, y: 15, z: 3 })
  const rotationSpeedRef = useRef({ x: 0.15, y: 0.2, z: 0.03 })

  const animate = () => {
    if (!cardRef.current || isHovered) return

    rotationRef.current.x += rotationSpeedRef.current.x
    rotationRef.current.y += rotationSpeedRef.current.y
    rotationRef.current.z += rotationSpeedRef.current.z

    if (Math.abs(rotationRef.current.x) > 10) rotationSpeedRef.current.x *= -1
    if (Math.abs(rotationRef.current.y) > 10) rotationSpeedRef.current.y *= -1
    if (Math.abs(rotationRef.current.z) > 3) rotationSpeedRef.current.z *= -1

    cardRef.current.style.transform = `
      rotateX(${rotationRef.current.x}deg) 
      rotateY(${rotationRef.current.y}deg) 
      rotateZ(${rotationRef.current.z}deg)
    `

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const angleX = ((e.clientY - centerY) / (rect.height / 2)) * 25
      const angleY = (-(e.clientX - centerX) / (rect.width / 2)) * 25

      if (card) {
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) rotateZ(${Math.min(Math.abs(angleX) + Math.abs(angleY), 10) / 5}deg) scale(1.05)`
      }
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
      cancelAnimationFrame(animationRef.current)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      if (card) {
        card.style.transform = `rotateX(${rotationRef.current.x}deg) rotateY(${rotationRef.current.y}deg) rotateZ(${rotationRef.current.z}deg) scale(1)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationRef.current)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className={`perspective-2000 ${className}`}
      style={{ width, height }}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transition-all duration-300 ease-out cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden"
          style={{
            boxShadow: isHovered
              ? `0 0 60px ${theme.glowColor}, 0 0 120px ${theme.glowColor}`
              : `0 0 30px ${theme.glowColor}`,
          }}
        >
          {/* Project Image */}
          <img
            src={image}
            alt="Art project"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay for depth */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}20 0%, transparent 50%, ${theme.secondaryColor}20 100%)`,
              opacity: isHovered ? 0.8 : 0.4,
            }}
          />

          {/* Animated nebula overlay */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at ${isHovered ? "30% 30%" : "70% 70%"}, ${theme.primaryColor}40 0%, transparent 50%), 
                           radial-gradient(ellipse at ${isHovered ? "70% 70%" : "30% 30%"}, ${theme.secondaryColor}40 0%, transparent 50%)`,
            }}
          />

          {/* Aurora effect */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-700"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${theme.primaryColor}30 30%, ${theme.secondaryColor}30 70%, transparent 100%)`,
              opacity: isHovered ? 0.5 : 0,
            }}
          />

          {/* Holographic shine */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 animate-holographicShift"
            style={{
              background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
              backgroundSize: "200% 200%",
              opacity: isHovered ? 0.6 : 0,
            }}
          />

          {/* Star field */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500" style={{ opacity: isHovered ? 1 : 0 }}>
            <div className="stars-small" />
            <div className="stars-medium" />
            <div className="stars-twinkle" />
          </div>

          {/* Border glow on hover */}
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
            style={{
              border: `2px solid ${theme.primaryColor}`,
              boxShadow: `inset 0 0 20px ${theme.primaryColor}40`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes holographicShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        
        .stars-small {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 40px 70px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 50px 160px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0));
          background-size: 200px 200px;
          opacity: 0.3;
        }
        
        .stars-medium {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(1.5px 1.5px at 150px 150px, white, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 220px 220px, white, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 80px 250px, white, rgba(0,0,0,0));
          background-size: 300px 300px;
          opacity: 0.3;
        }

        .stars-twinkle {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(2px 2px at 50px 50px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 150px 150px, rgba(255,255,255,0.8), rgba(0,0,0,0));
          background-size: 200px 200px;
          animation: twinkle 3s ease-in-out infinite alternate;
        }

        @keyframes twinkle {
          0% { opacity: 0.1; }
          100% { opacity: 0.5; }
        }
        
        .animate-holographicShift {
          animation: holographicShift 4s ease infinite;
        }
        
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </div>
  )
}

export default CosmicCard

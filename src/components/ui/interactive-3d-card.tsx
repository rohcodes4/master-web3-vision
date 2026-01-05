'use client'
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
interface Interactive3DCardProps {
  title: string;
  subtitle?: string;
  description: string;
  splineScene: string;
  ctaText?: string;
  ctaHref?: string;
  reversed?: boolean;
  className?: string;
  spotlightColor?: string;
}
export function Interactive3DCard({
  title,
  subtitle,
  description,
  splineScene,
  ctaText,
  ctaHref,
  reversed = false,
  className,
  spotlightColor = "hsl(153, 100%, 50%)"
}: Interactive3DCardProps) {
  return (
    <div className={cn("w-full", className)}>
      <Spotlight fill={spotlightColor} size={400} />

      <div className={cn(
        "glass-card rounded-3xl min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row overflow-hidden",
        reversed && "md:flex-row-reverse"
      )}>
        {/* Content side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          {subtitle && (
            <span className="text-primary text-xs uppercase tracking-[0.15em] mb-4">
              {subtitle}
            </span>
          )}
          <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
          {ctaText && ctaHref && (

              href={ctaHref}
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
        {/* 3D Scene side */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden p-2 md:p-0">
          <SplineScene scene={splineScene} className="w-full h-full max-h-none object-contain scale-[1.2] md:scale-100" />
          {/* Gradient overlay for seamless blend */}
          <div className={cn(
            "absolute inset-0 pointer-events-none",
            reversed 
              ? "bg-gradient-to-l from-transparent via-transparent to-card/50" 
              : "bg-gradient-to-r from-transparent via-transparent to-card/50"
          )} />
        </div>
      </div>
    </div>
  );
}

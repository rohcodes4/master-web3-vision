import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: progress >= 100 ? 'none' : 'auto'
      }}
    >
      {/* Animated Logo */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-2 border-primary rotate-45 animate-spin-slow" />
        <div className="absolute inset-2 border-2 border-secondary -rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Brand Name */}
      <h1 className="font-syne text-2xl font-bold text-foreground tracking-widest mb-8">
        MASTER
      </h1>

      {/* Loading Text */}
      <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4 animate-pulse">
        Initializing
      </p>

      {/* Progress Bar */}
      <div className="w-48 h-px bg-muted overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;

import { ArrowRight, Briefcase } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

const HeroSection = () => {
  const stats = [
    { value: '150+', label: 'PROJECTS SHIPPED' },
    { value: '$2B+', label: 'TVL SECURED' },
    { value: '50+', label: 'CHAIN INTEGRATIONS' },
    { value: '0', label: 'SECURITY BREACHES' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 pt-32 pb-16">
      <div className="text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full mb-12 animate-in">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-sm uppercase tracking-[0.12em] text-foreground/70">
            Stake Your Vision
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold leading-[0.92] mb-12">
          <span className="block text-[clamp(2.5rem,10vw,7rem)] animate-in">
            WE BUILD THE
          </span>
          <span
            className="block text-[clamp(2.5rem,10vw,7rem)] gradient-text glitch animate-in animate-delay-100"
            data-text="FUTURE"
          >
            FUTURE
          </span>
          <span className="block text-[clamp(2.5rem,10vw,7rem)] animate-in animate-delay-200">
            OF WEB3
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-in animate-delay-300">
          <GradientButton href="#contact">
            START YOUR PROJECT
            <ArrowRight className="w-4 h-4" />
          </GradientButton>
          <GradientButton href="#portfolio" variant="outline">
            VIEW OUR WORK
            <Briefcase className="w-4 h-4" />
          </GradientButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-in animate-delay-500">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-syne font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.1em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hidden md:flex">
        <span className="text-xs tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;

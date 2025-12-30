import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { value: '150+', label: 'PROJECTS SHIPPED' },
    { value: '$2B+', label: 'TVL SECURED' },
    { value: '50+', label: 'CHAIN INTEGRATIONS' },
    { value: '0', label: 'SECURITY BREACHES' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 pt-24">
      <div className="text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full mb-8 animate-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs uppercase tracking-[0.15em] text-foreground/70">
            Accepting New Projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold leading-[0.95] mb-8">
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

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-in animate-delay-300">
          Elite blockchain development for protocols that demand excellence. 
          From smart contracts to full-stack dApps, we ship products that scale.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in animate-delay-400">
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            START YOUR PROJECT
          </a>
          <a href="#portfolio" className="btn-secondary w-full sm:w-auto">
            VIEW OUR WORK
          </a>
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

import { useEffect, useRef } from 'react';
import { Mail, Send } from 'lucide-react';
import { LiquidGlassLink } from '@/components/ui/liquid-glass-button';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Pulsing Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-8 reveal">
            Ready to Build<br />
            <span className="gradient-text">Something Great?</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal" style={{ transitionDelay: '100ms' }}>
            <LiquidGlassLink href="https://t.me/Cwpto" size="lg" variant="primary" target="_blank" rel="noopener noreferrer">
              TELEGRAM
              <Send className="w-4 h-4" />
            </LiquidGlassLink>
            <LiquidGlassLink href="mailto:mastercwpto@gmail.com" size="lg" variant="default">
              mastercwpto@gmail.com
              <Mail className="w-4 h-4" />
            </LiquidGlassLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

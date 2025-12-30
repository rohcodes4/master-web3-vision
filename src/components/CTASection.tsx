import { useEffect, useRef } from 'react';

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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Pulsing Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6 reveal">
            Ready to Build<br />
            <span className="gradient-text">Something Great?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            Let's discuss how we can help bring your Web3 vision to life. 
            From concept to launch, we're with you every step of the way.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
            <a href="mailto:hello@master.dev" className="btn-primary w-full sm:w-auto">
              SCHEDULE A CALL
            </a>
            <a
              href="mailto:hello@master.dev"
              className="btn-secondary w-full sm:w-auto"
            >
              hello@master.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

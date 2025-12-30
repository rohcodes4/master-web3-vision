import { useEffect, useRef } from 'react';

const ProcessSection = () => {
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

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deep dive into your vision, requirements, and market positioning. We align on goals, timelines, and success metrics.',
    },
    {
      number: '02',
      title: 'Architecture',
      description: 'Technical design and system architecture. Smart contract specifications, security considerations, and scalability planning.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile sprints with weekly demos. Continuous integration, rigorous testing, and iterative refinement.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Security audits, testnet deployment, and mainnet launch. Post-launch monitoring and ongoing support.',
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag mb-6 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            HOW WE WORK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            From Vision to<br />Deployment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology refined over hundreds of successful Web3 projects.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="text-center reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-8">
                  <div className="absolute inset-0 border-2 border-glass-border rounded-full" />
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-pulse-glow" />
                  <span className="font-syne text-3xl md:text-4xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-syne text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

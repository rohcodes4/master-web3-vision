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
      description: 'Deep dive into your vision and market positioning. We align on goals and success metrics.',
    },
    {
      number: '02',
      title: 'Architecture',
      description: 'Technical design and system architecture. Security considerations and scalability planning.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile sprints with weekly demos. Continuous integration and iterative refinement.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Security audits, testnet deployment, and mainnet launch with ongoing support.',
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            HOW WE WORK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            From Vision to<br />Deployment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A proven methodology refined over hundreds of successful projects.
          </p>
        </div>

        <div className="relative">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="text-center reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Number Circle with solid background */}
                <div className="relative inline-flex items-center justify-center w-[100px] h-[100px] mb-10">
                  {/* Outer glow shadow */}
                  <div className="absolute inset-[-20px] rounded-full bg-primary/20 blur-xl" />
                  {/* Third ring (outermost) */}
                  <div className="absolute inset-[-16px] border border-primary/10 rounded-full" />
                  {/* Second ring */}
                  <div className="absolute inset-[-8px] border border-primary/20 rounded-full" />
                  {/* Solid background circle */}
                  <div className="absolute inset-0 bg-background rounded-full" />
                  {/* Main border */}
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-full" />
                  {/* Inner glow effect */}
                  <div className="absolute inset-2 border border-primary/20 rounded-full animate-pulse-glow" />
                  {/* Number */}
                  <span className="relative font-syne text-3xl md:text-4xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-syne text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
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

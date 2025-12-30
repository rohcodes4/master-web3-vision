import { useEffect, useRef } from 'react';

const TechStackSection = () => {
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

  const technologies = [
    'SOLIDITY',
    'RUST',
    'MOVE',
    'VYPER',
    'REACT',
    'NEXT.JS',
    'TYPESCRIPT',
    'HARDHAT',
    'FOUNDRY',
    'THE GRAPH',
    'CHAINLINK',
    'IPFS',
    'AWS',
    'DOCKER',
  ];

  return (
    <section ref={sectionRef} className="py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            TECH STACK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold">
            Technologies We Master
          </h2>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-4 reveal max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="tech-badge"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

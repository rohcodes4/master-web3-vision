import { useEffect, useRef } from 'react';
import { FileCode2, Landmark, Image, Layout, ShieldCheck, Compass } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: FileCode2,
      title: 'Smart Contract Development',
      description: 'Battle-tested, gas-optimized smart contracts built with security-first methodology.',
      features: ['Solidity & Rust Development', 'Formal Verification', 'Gas Optimization', 'Upgrade Patterns'],
    },
    {
      icon: Landmark,
      title: 'DeFi Protocol Design',
      description: 'Complex financial primitives engineered for maximum capital efficiency.',
      features: ['AMM & DEX Development', 'Lending Protocols', 'Yield Aggregators', 'Tokenomics Design'],
    },
    {
      icon: Image,
      title: 'NFT & Marketplace',
      description: 'Full-stack NFT solutions from minting contracts to marketplace infrastructure.',
      features: ['ERC-721/1155 Contracts', 'Generative Art Engines', 'Marketplace Development', 'Royalty Systems'],
    },
    {
      icon: Layout,
      title: 'dApp Development',
      description: 'Seamless Web3 experiences with intuitive interfaces and robust backends.',
      features: ['React & Next.js Frontends', 'Wallet Integrations', 'Subgraph Development', 'Cross-chain Solutions'],
    },
    {
      icon: ShieldCheck,
      title: 'Security Audits',
      description: 'Comprehensive security reviews to protect your protocol and users.',
      features: ['Code Audits', 'Penetration Testing', 'Economic Modeling', 'Incident Response'],
    },
    {
      icon: Compass,
      title: 'Blockchain Consulting',
      description: 'Strategic guidance to navigate the evolving Web3 landscape.',
      features: ['Architecture Design', 'Chain Selection', 'Token Strategy', 'Go-to-Market Planning'],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            WHAT WE DO
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            End-to-End Web3<br />Development Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From ideation to deployment, we handle every aspect of your blockchain project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 border border-glass-border rounded-xl flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                <service.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="font-syne text-xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="text-primary text-xs">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

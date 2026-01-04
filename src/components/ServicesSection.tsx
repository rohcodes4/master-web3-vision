import { useEffect, useRef } from 'react';
import { FileCode2, Landmark, Image, Layout, ShieldCheck, Compass } from 'lucide-react';
import { AnimatedWaveBackground } from './ui/animated-wave-background';
import { Web3ServiceCard } from './ui/web3-service-card';

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
      features: ['Solidity & Rust Development', 'Formal Verification', 'Gas Optimization', 'Upgrade Patterns'],
    },
    {
      icon: Landmark,
      title: 'DeFi Protocol Design',
      features: ['AMM & DEX Development', 'Lending Protocols', 'Yield Aggregators', 'Tokenomics Design'],
    },
    {
      icon: Layout,
      title: 'dApp Development',
      features: ['React & Next.js Frontends', 'Wallet Integrations', 'Subgraph Development', 'Cross-chain Solutions'],
    },
    {
      icon: ShieldCheck,
      title: 'Security Audits',
      features: ['Code Audits', 'Penetration Testing', 'Economic Modeling', 'Incident Response'],
    },
    {
      icon: Compass,
      title: 'Blockchain Consulting',
      features: ['Architecture Design', 'Chain Selection', 'Token Strategy', 'Go-to-Market Planning'],
    },
    {
      icon: Image,
      title: 'NFT & Marketplace',
      features: ['ERC-721/1155 Contracts', 'Generative Art Engines', 'Marketplace Development', 'Royalty Systems'],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-8 md:py-16 overflow-hidden">
      {/* Animated Wave Background - hidden on mobile */}
      <div className="hidden md:block">
        <AnimatedWaveBackground />
      </div>
      
      {/* Simple dark background for mobile */}
      <div className="absolute inset-0 bg-background md:hidden" />
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            WHAT WE DO
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            End-to-End Web3<br />Development Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <Web3ServiceCard
                icon={service.icon}
                title={service.title}
                features={service.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

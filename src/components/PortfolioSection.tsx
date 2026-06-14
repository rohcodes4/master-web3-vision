import { useEffect, useRef } from 'react';
import portfolioNexusswap from '@/assets/portfolio-nexusswap.jpg';
import portfolioMetagallery from '@/assets/portfolio-metagallery.jpg';
import portfolioVaultfi from '@/assets/portfolio-vaultfi.jpg';
import portfolioCryptoagency from '@/assets/portfolio-cryptoagency.jpg';
import portfolioSniperbot from '@/assets/portfolio-sniperbot.jpg';
import portfolioLeveragebot from '@/assets/portfolio-leveragebot.jpg';

import web2Healthybinge from '@/assets/portfolio-web2-healthybinge.jpg';
import web2Pigeon from '@/assets/portfolio-web2-pigeon.jpg';
import web2Rampx from '@/assets/portfolio-web2-rampx.jpg';
import web2Nourishmantra from '@/assets/portfolio-web2-nourishmantra.jpg';
import web2Thehealthspanco from '@/assets/portfolio-web2-thehealthspanco.jpg';
import web2Herbaria from '@/assets/portfolio-web2-herbaria.jpg';
import web2Nuuk from '@/assets/portfolio-web2-nuuk.jpg';
import web2Myinteriorcoach from '@/assets/portfolio-web2-myinteriorcoach.jpg';
import web2Myridefinance from '@/assets/portfolio-web2-myridefinance.jpg';

interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const CardWrapper = project.url ? 'a' : 'div';
  const linkProps = project.url
    ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      className="relative reveal group block"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glowing border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-50" />

      {/* Card content */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-background">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-xs tracking-[0.12em] text-primary mb-2">
            {project.category}
          </span>
          <h3 className="font-syne text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[0.65rem] tracking-wider border border-glass-border rounded-full text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.url && (
            <div className="mt-3 flex items-center gap-1 text-xs text-primary/80 tracking-wider uppercase">
              <span>Visit Site</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

const PortfolioSection = () => {
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

  const web2Projects: Project[] = [
    {
      category: 'HEALTH & FOOD TECH',
      title: 'HealthyBinge',
      description: 'A health-focused food discovery platform helping users find nutritious meals and build better eating habits.',
      tags: ['WEB2 DEVELOPMENT', 'HEALTH TECH', 'FOOD'],
      image: web2Healthybinge,
      url: 'https://www.healthybinge.co.in/',
    },
    {
      category: 'MESSAGING PLATFORM',
      title: 'Pigeon',
      description: 'A modern chat and messaging platform built for seamless real-time communication.',
      tags: ['WEB2 DEVELOPMENT', 'MESSAGING', 'SAAS'],
      image: web2Pigeon,
      url: 'https://www.pigeon.chat/',
    },
    {
      category: 'FINTECH',
      title: 'RampX',
      description: 'A fintech application simplifying ramp and payment flows for modern businesses.',
      tags: ['WEB2 DEVELOPMENT', 'FINTECH', 'PAYMENTS'],
      image: web2Rampx,
      url: 'https://rampx.app/',
    },
    {
      category: 'HEALTH & WELLNESS',
      title: 'NourishMantra',
      description: 'A wellness and nutrition brand delivering holistic health guidance and curated products.',
      tags: ['WEB2 DEVELOPMENT', 'WELLNESS', 'E-COMMERCE'],
      image: web2Nourishmantra,
      url: 'https://nourishmantra.com/',
    },
    {
      category: 'HEALTH & WELLNESS',
      title: 'The Health Span Co.',
      description: 'A health-span focused brand offering science-backed products and lifestyle solutions for longevity.',
      tags: ['WEB2 DEVELOPMENT', 'WELLNESS', 'LONGEVITY'],
      image: web2Thehealthspanco,
      url: 'https://thehealthspanco.com/',
    },
    {
      category: 'E-COMMERCE / BOTANICALS',
      title: 'Herbaria',
      description: 'A premium botanical and herbal products brand bringing nature-inspired wellness to everyday life.',
      tags: ['WEB2 DEVELOPMENT', 'E-COMMERCE', 'BOTANICALS'],
      image: web2Herbaria,
      url: 'https://herbaria.co.in/',
    },
    {
      category: 'LIFESTYLE & COMMERCE',
      title: 'Nuuk',
      description: 'A lifestyle commerce platform offering curated products for modern, design-conscious consumers.',
      tags: ['WEB2 DEVELOPMENT', 'LIFESTYLE', 'E-COMMERCE'],
      image: web2Nuuk,
      url: 'https://nuuk.in/',
    },
    {
      category: 'INTERIOR DESIGN',
      title: 'My Interior Coach',
      description: 'An online interior design consultancy connecting clients with expert coaches for personalised home transformations.',
      tags: ['WEB2 DEVELOPMENT', 'INTERIOR DESIGN', 'CONSULTANCY'],
      image: web2Myinteriorcoach,
      url: 'https://myinteriorcoach.com/',
    },
    {
      category: 'FINTECH / MOBILITY',
      title: 'MyRide Finance',
      description: 'A mobility-focused fintech platform offering flexible vehicle financing solutions.',
      tags: ['WEB2 DEVELOPMENT', 'FINTECH', 'MOBILITY'],
      image: web2Myridefinance,
      url: 'https://www.myride.finance/',
    },
  ];

  const web3Projects: Project[] = [
    {
      category: 'WEB3 AGENCY',
      title: 'CryptoVision Agency',
      description: 'Full-service crypto marketing and development agency. Branding, community building, smart contract audits, and go-to-market strategies for Web3 projects.',
      tags: ['MARKETING', 'COMMUNITY', 'DEVELOPMENT', 'CONSULTING'],
      image: portfolioCryptoagency,
    },
    {
      category: 'TRADING / LEVERAGE',
      title: 'LeverageMax Bot',
      description: 'Automated crypto leverage trading bot with advanced risk management, liquidation protection, and multi-exchange support. Maximizing gains while minimizing risks.',
      tags: ['PYTHON', 'CCXT', 'TELEGRAM API', 'WEBSOCKETS'],
      image: portfolioLeveragebot,
    },
    {
      category: 'DEFI PROTOCOL',
      title: 'NexusSwap DEX',
      description: 'Next-gen concentrated liquidity DEX with cross-chain swaps. $500M+ in cumulative trading volume.',
      tags: ['SOLIDITY', 'REACT', 'SUBGRAPH'],
      image: portfolioNexusswap,
    },
    {
      category: 'NFT MARKETPLACE',
      title: 'Metaverse Gallery',
      description: 'Immersive 3D NFT marketplace with virtual exhibitions. 100K+ artworks traded.',
      tags: ['THREE.JS', 'ERC-721', 'IPFS'],
      image: portfolioMetagallery,
    },
    {
      category: 'DEFI / TRADING INFRASTRUCTURE',
      title: 'SniperBot Pro',
      description: 'High-frequency meme coin trading bot with sub-second execution, anti-rug detection, and automated profit-taking. Built for degens who refuse to miss the next 1000x.',
      tags: ['SOLIDITY', 'RUST', 'TELEGRAM API', 'DEX INTEGRATION'],
      image: portfolioSniperbot,
    },
    {
      category: 'LENDING PROTOCOL',
      title: 'VaultFi',
      description: 'Institutional-grade lending protocol with isolated risk pools. $800M TVL at peak.',
      tags: ['SOLIDITY', 'CHAINLINK', 'NEXT.JS'],
      image: portfolioVaultfi,
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Main Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            OUR WORK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            Projects That Define<br />the Future
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A curated selection of Web2 and Web3 products we've helped bring to life.
          </p>
        </div>

        {/* Web2 Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-syne text-lg font-bold tracking-[0.08em] text-foreground/80 uppercase">Featured Projects</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {web2Projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="reveal mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Web3 Projects */}
        <div>
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-syne text-lg font-bold tracking-[0.08em] text-foreground/80 uppercase">Web3 Projects</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {web3Projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import { useEffect, useRef } from 'react';
import portfolioNexusswap from '@/assets/portfolio-nexusswap.jpg';
import portfolioMetagallery from '@/assets/portfolio-metagallery.jpg';
import portfolioVaultfi from '@/assets/portfolio-vaultfi.jpg';
import portfolioCryptoagency from '@/assets/portfolio-cryptoagency.jpg';
import portfolioSniperbot from '@/assets/portfolio-sniperbot.jpg';
import portfolioLeveragebot from '@/assets/portfolio-leveragebot.jpg';

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

  const projects = [
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
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            OUR WORK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            Projects That Define<br />the Future
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of groundbreaking Web3 products we've helped bring to life.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glowing border effect - same as active filter tags */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-50" />
              
              {/* Card content */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-background">
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

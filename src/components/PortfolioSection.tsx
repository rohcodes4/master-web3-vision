import { useEffect, useRef, useState, useMemo } from 'react';
import { AnimatedGlowingSearch } from '@/components/ui/animated-glowing-search';
import { GlowingFilterTags } from '@/components/ui/glowing-filter-tags';
import portfolioNexusswap from '@/assets/portfolio-nexusswap.jpg';
import portfolioMetagallery from '@/assets/portfolio-metagallery.jpg';
import portfolioVaultfi from '@/assets/portfolio-vaultfi.jpg';
import portfolioChainquest from '@/assets/portfolio-chainquest.jpg';
import portfolioSniperbot from '@/assets/portfolio-sniperbot.jpg';
import portfolioOraclebet from '@/assets/portfolio-oraclebet.jpg';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filterTags = [
    { id: 'all', label: 'All Projects' },
    { id: 'defi', label: 'DeFi' },
    { id: 'nft', label: 'NFT' },
    { id: 'trading', label: 'Trading' },
    { id: 'agency', label: 'Agency' },
  ];

  const projects = [
    {
      category: 'DEFI PROTOCOL',
      title: 'NexusSwap DEX',
      description: 'Next-gen concentrated liquidity DEX with cross-chain swaps. $500M+ in cumulative trading volume.',
      tags: ['SOLIDITY', 'REACT', 'SUBGRAPH'],
      image: portfolioNexusswap,
      filterCategory: 'defi',
    },
    {
      category: 'NFT MARKETPLACE',
      title: 'Metaverse Gallery',
      description: 'Immersive 3D NFT marketplace with virtual exhibitions. 100K+ artworks traded.',
      tags: ['THREE.JS', 'ERC-721', 'IPFS'],
      image: portfolioMetagallery,
      filterCategory: 'nft',
    },
    {
      category: 'LENDING PROTOCOL',
      title: 'VaultFi',
      description: 'Institutional-grade lending protocol with isolated risk pools. $800M TVL at peak.',
      tags: ['SOLIDITY', 'CHAINLINK', 'NEXT.JS'],
      image: portfolioVaultfi,
      filterCategory: 'defi',
    },
    {
      category: 'TRADING / LEVERAGE',
      title: 'LeverageMax Bot',
      description: 'Automated crypto leverage trading bot with advanced risk management, liquidation protection, and multi-exchange support. Maximizing gains while minimizing risks.',
      tags: ['PYTHON', 'CCXT', 'TELEGRAM API', 'WEBSOCKETS'],
      image: portfolioChainquest,
      filterCategory: 'trading',
    },
    {
      category: 'DEFI / TRADING INFRASTRUCTURE',
      title: 'SniperBot Pro',
      description: 'High-frequency meme coin trading bot with sub-second execution, anti-rug detection, and automated profit-taking. Built for degens who refuse to miss the next 1000x.',
      tags: ['SOLIDITY', 'RUST', 'TELEGRAM API', 'DEX INTEGRATION'],
      image: portfolioSniperbot,
      filterCategory: 'trading',
    },
    {
      category: 'WEB3 AGENCY',
      title: 'CryptoVision Agency',
      description: 'Full-service crypto marketing and development agency. Branding, community building, smart contract audits, and go-to-market strategies for Web3 projects.',
      tags: ['MARKETING', 'COMMUNITY', 'DEVELOPMENT', 'CONSULTING'],
      image: portfolioOraclebet,
      filterCategory: 'agency',
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = activeFilter === 'all' || project.filterCategory === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 md:py-40">
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
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            A selection of groundbreaking Web3 products we've helped bring to life.
          </p>

          {/* Animated Glowing Search Bar */}
          <div className="mb-8">
            <AnimatedGlowingSearch
              placeholder="Search projects..."
              value={searchQuery}
              onChange={setSearchQuery}
              onFilterClick={() => console.log('Filter clicked')}
            />
          </div>

          {/* Filter Tags */}
          <GlowingFilterTags
            tags={filterTags}
            activeTag={activeFilter}
            onTagClick={setActiveFilter}
          />
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="portfolio-overlay md:opacity-0 md:translate-y-4">
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
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

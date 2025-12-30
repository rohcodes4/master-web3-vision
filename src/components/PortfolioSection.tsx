import { useEffect, useRef } from 'react';

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
      category: 'DEFI PROTOCOL',
      title: 'NexusSwap DEX',
      description: 'Next-gen concentrated liquidity DEX with cross-chain swaps. $500M+ in cumulative trading volume.',
      tags: ['SOLIDITY', 'REACT', 'SUBGRAPH'],
      gradient: 'from-primary/20 to-secondary/20',
    },
    {
      category: 'NFT MARKETPLACE',
      title: 'Metaverse Gallery',
      description: 'Immersive 3D NFT marketplace with virtual exhibitions. 100K+ artworks traded.',
      tags: ['THREE.JS', 'ERC-721', 'IPFS'],
      gradient: 'from-secondary/20 to-accent/20',
    },
    {
      category: 'LENDING PROTOCOL',
      title: 'VaultFi',
      description: 'Institutional-grade lending protocol with isolated risk pools. $800M TVL at peak.',
      tags: ['SOLIDITY', 'CHAINLINK', 'NEXT.JS'],
      gradient: 'from-accent/20 to-primary/20',
    },
    {
      category: 'GAMING',
      title: 'ChainQuest RPG',
      description: 'On-chain gaming with play-to-earn mechanics and composable NFT assets. 50K+ daily active players.',
      tags: ['UNITY', 'ERC-1155', 'POLYGON'],
      gradient: 'from-primary/20 to-accent/20',
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 bg-surface/50">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag mb-6 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            OUR WORK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6">
            Projects That Define<br />the Future
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of groundbreaking Web3 products we've helped bring to life.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Browser Mockup */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                <div className="absolute inset-4 glass-card rounded-lg overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  {/* Content Lines */}
                  <div className="p-6 space-y-3">
                    <div className="h-2 bg-foreground/10 rounded w-3/4" />
                    <div className="h-2 bg-foreground/10 rounded w-1/2" />
                    <div className="h-2 bg-foreground/10 rounded w-5/6" />
                    <div className="h-8 mt-6" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-foreground/5 rounded" />
                      <div className="h-16 bg-foreground/5 rounded" />
                      <div className="h-16 bg-foreground/5 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="portfolio-overlay md:opacity-0 md:translate-y-4">
                <span className="text-xs tracking-[0.15em] text-primary mb-2">
                  {project.category}
                </span>
                <h3 className="font-syne text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[0.65rem] tracking-wider border border-glass-border text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
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

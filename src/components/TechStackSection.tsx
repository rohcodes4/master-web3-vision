import { useEffect, useRef } from 'react';
import { AnimatedBadge } from './ui/animated-badge';
import { 
  Blocks, Code2, Database, Globe, Lock, Coins, 
  Wallet, BarChart3, Layers, Zap, Shield, Network 
} from 'lucide-react';

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
    { text: "Solidity", color: "#627EEA", icon: <Code2 className="w-4 h-4" /> },
    { text: "Ethereum", color: "#627EEA", icon: <Blocks className="w-4 h-4" /> },
    { text: "React / Next.js", color: "#61DAFB", icon: <Globe className="w-4 h-4" /> },
    { text: "Web3.js / Ethers", color: "#F6851B", icon: <Wallet className="w-4 h-4" /> },
    { text: "Smart Contracts", color: "#22d3ee", icon: <Lock className="w-4 h-4" /> },
    { text: "DeFi Protocols", color: "#8B5CF6", icon: <Coins className="w-4 h-4" /> },
    { text: "NFT Standards", color: "#EC4899", icon: <Layers className="w-4 h-4" /> },
    { text: "Layer 2 Solutions", color: "#10B981", icon: <Zap className="w-4 h-4" /> },
    { text: "IPFS / Arweave", color: "#65C2CB", icon: <Database className="w-4 h-4" /> },
    { text: "Cross-Chain Bridges", color: "#F59E0B", icon: <Network className="w-4 h-4" /> },
    { text: "Wallet Integration", color: "#3B82F6", icon: <Wallet className="w-4 h-4" /> },
    { text: "Security Audits", color: "#EF4444", icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            TECH STACK
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">
            Technologies We{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Cutting-edge blockchain and Web3 technologies powering the next generation of decentralized applications
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 reveal max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.text}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AnimatedBadge
                text={tech.text}
                color={tech.color}
                icon={tech.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

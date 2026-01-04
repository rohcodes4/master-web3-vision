import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LiquidGlassLink } from '@/components/ui/liquid-glass-button';
import masterLogo from '@/assets/master-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'PROCESS', href: '#process' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-glass-border'
            : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={masterLogo} 
              alt="Master Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-syne text-xl font-bold tracking-widest">MASTER</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.85rem] tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <LiquidGlassLink href="#contact" size="default" variant="primary">
              LET'S TALK
              <MessageCircle className="w-4 h-4" />
            </LiquidGlassLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-syne font-bold tracking-wider text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <LiquidGlassLink
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            size="lg"
            variant="primary"
            className="mt-4"
          >
            LET'S TALK
            <MessageCircle className="w-4 h-4" />
          </LiquidGlassLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;

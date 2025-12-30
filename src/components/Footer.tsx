import { Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'Smart Contracts', href: '#services' },
      { label: 'DeFi Development', href: '#services' },
      { label: 'NFT Solutions', href: '#services' },
      { label: 'Security Audits', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Case Studies', href: '#portfolio' },
      { label: 'Documentation', href: '#' },
      { label: 'Open Source', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="border-t border-glass-border py-16">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border border-primary rotate-45" />
                <div className="absolute inset-1 border border-primary/50 rotate-45" />
              </div>
              <span className="font-syne text-xl font-bold tracking-widest">MASTER</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Elite blockchain development for protocols that demand excellence.
            </p>
            <a
              href="mailto:hello@master.dev"
              className="text-sm text-primary hover:underline"
            >
              hello@master.dev
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-bold text-sm tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-bold text-sm tracking-wider mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-syne font-bold text-sm tracking-wider mb-6">RESOURCES</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-glass-border">
          <p className="text-sm text-muted-foreground">
            © 2024 MASTER. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

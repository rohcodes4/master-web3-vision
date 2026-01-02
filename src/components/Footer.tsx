import { Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="border-t border-glass-border py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 MASTER. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 border border-glass-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
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

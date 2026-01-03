import { useEffect, useRef } from 'react';
import { GradientCard } from './ui/gradient-card';
import { Star, Quote, Users } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      icon: <Star className="w-5 h-5 text-purple-400" />,
      title: "Exceptional Web3 Development",
      description: "Their team delivered our DeFi platform ahead of schedule. The smart contract security and UI/UX exceeded our expectations. Truly world-class crypto development.",
      linkText: "View Case Study",
    },
    {
      icon: <Quote className="w-5 h-5 text-cyan-400" />,
      title: "Game-Changing NFT Platform",
      description: "We partnered with them for our NFT marketplace launch. The results? 500% increase in trading volume and seamless cross-chain integration.",
      linkText: "Read Full Story",
    },
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      title: "Enterprise Blockchain Solutions",
      description: "From tokenomics design to full-stack development, they transformed our vision into reality. Their expertise in crypto is unmatched.",
      linkText: "Explore Project",
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            TESTIMONIALS
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Trusted by leading Web3 projects worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center reveal">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GradientCard
                icon={testimonial.icon}
                title={testimonial.title}
                description={testimonial.description}
                linkText={testimonial.linkText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

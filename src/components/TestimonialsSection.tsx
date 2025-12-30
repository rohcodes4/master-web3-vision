import { useEffect, useRef } from 'react';

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
      initials: 'AK',
      name: 'Alex Kim',
      title: 'CEO, NexusSwap',
      quote: 'Master delivered our DEX ahead of schedule with zero security issues. Their deep understanding of DeFi primitives saved us months of R&D. Absolutely world-class team.',
    },
    {
      initials: 'SR',
      name: 'Sarah Rodriguez',
      title: 'Founder, MetaGallery',
      quote: "We've worked with many blockchain devs, but Master is on another level. They don't just code—they challenge assumptions and make the product better.",
    },
    {
      initials: 'JW',
      name: 'James Wilson',
      title: 'CTO, VaultFi',
      quote: "Their security-first approach gave our investors confidence. The audit came back clean, and we launched without a hitch. Can't recommend them enough.",
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-surface/50">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag mb-6 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            TESTIMONIALS
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Mark */}
              <div className="text-6xl font-syne text-primary/30 leading-none mb-4">
                "
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="font-syne font-bold text-sm text-primary-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-syne font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
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

export default TestimonialsSection;

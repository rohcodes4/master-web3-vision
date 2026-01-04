import React from 'react';
import { Star, Sparkles, Palette, Film } from 'lucide-react';

interface TestimonialCard {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
}

const testimonials: TestimonialCard[] = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    company: 'Pixar Animation',
    testimonial: 'Their animation work is absolutely breathtaking. The attention to detail and creative vision transformed our project beyond expectations. A true game-changer for our brand.',
    gradientFrom: '#A855F7',
    gradientTo: '#EC4899',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    name: 'Marcus Webb',
    role: 'CEO',
    company: 'ArtStation',
    testimonial: 'Exceptional artistry and professionalism. They delivered stunning 3D visuals that captivated our audience and drove engagement through the roof. Highly recommend!',
    gradientFrom: '#06B6D4',
    gradientTo: '#8B5CF6',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Production',
    company: 'Netflix Animation',
    testimonial: 'Working with this team was a dream. Their motion design expertise and artistic sensibility brought our characters to life in ways we never imagined possible.',
    gradientFrom: '#10B981',
    gradientTo: '#3B82F6',
    icon: <Film className="w-5 h-5" />,
  },
];

export default function SkewCards() {
  return (
    <section id="testimonials" className="relative py-8 md:py-12 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Trusted by world-class creative studios and brands worldwide
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-[340px] h-[400px] cursor-pointer"
            >
              {/* Skewed gradient panels */}
              <div
                className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:skew-y-0"
                style={{
                  background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  transform: 'skewY(-6deg)',
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:skew-y-0"
                style={{
                  background: `linear-gradient(135deg, ${item.gradientTo}, ${item.gradientFrom})`,
                  transform: 'skewY(6deg) translateY(10px)',
                  opacity: 0.4,
                }}
              />

              {/* Animated floating blurs */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl animate-float"
                  style={{ backgroundColor: item.gradientFrom + '60' }}
                />
                <div
                  className="absolute bottom-4 left-4 w-20 h-20 rounded-full blur-2xl animate-float-delayed"
                  style={{ backgroundColor: item.gradientTo + '60' }}
                />
              </div>

              {/* Content Card */}
              <div className="absolute inset-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col transition-all duration-500 group-hover:translate-x-2 group-hover:bg-black/90">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <svg className="w-8 h-8 text-white/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.testimonial}
                  </p>
                </div>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-white/50 text-sm">
                    {item.role} at{' '}
                    <span
                      className="font-medium"
                      style={{
                        background: `linear-gradient(90deg, ${item.gradientFrom}, ${item.gradientTo})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {item.company}
                    </span>
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-float { 
          animation: float 3s ease-in-out infinite; 
        }
        .animate-float-delayed { 
          animation: float-delayed 4s ease-in-out infinite; 
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

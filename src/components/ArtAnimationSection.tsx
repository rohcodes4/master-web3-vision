import React from 'react';
import { motion } from 'framer-motion';
import CosmicCard from '@/components/ui/cosmic-card';

import art1 from '@/assets/art-1.jpg';
import art2 from '@/assets/art-2.jpg';
import art3 from '@/assets/art-3.jpg';
import art4 from '@/assets/art-4.jpg';
import art5 from '@/assets/art-5.jpg';
import art6 from '@/assets/art-6.jpg';

const projects = [
  {
    image: art1,
    theme: { primaryColor: '#F59E0B', secondaryColor: '#EF4444', glowColor: 'rgba(245, 158, 11, 0.5)' },
  },
  {
    image: art2,
    theme: { primaryColor: '#8B5CF6', secondaryColor: '#06B6D4', glowColor: 'rgba(139, 92, 246, 0.5)' },
  },
  {
    image: art3,
    theme: { primaryColor: '#06B6D4', secondaryColor: '#8B5CF6', glowColor: 'rgba(6, 182, 212, 0.5)' },
  },
  {
    image: art4,
    theme: { primaryColor: '#EC4899', secondaryColor: '#F59E0B', glowColor: 'rgba(236, 72, 153, 0.5)' },
  },
  {
    image: art5,
    theme: { primaryColor: '#A855F7', secondaryColor: '#EC4899', glowColor: 'rgba(168, 85, 247, 0.5)' },
  },
  {
    image: art6,
    theme: { primaryColor: '#EF4444', secondaryColor: '#F59E0B', glowColor: 'rgba(239, 68, 68, 0.5)' },
  },
];

export default function ArtAnimationSection() {
  return (
    <section className="relative py-8 md:py-12 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">
            Art &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Animation
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore our stunning visual creations and motion masterpieces
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CosmicCard image={project.image} theme={project.theme} height="320px" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

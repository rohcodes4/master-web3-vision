import React, { useEffect, useRef } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Sparkles, Palette, Video, Wand2, Layers, Camera } from "lucide-react";

const artProjects = [
  {
    title: "Motion Graphics",
    description: "Stunning animated visuals for brands",
    icon: Video,
    color: "from-purple-500 to-pink-500",
    stats: { projects: "50+", satisfaction: "99%" },
  },
  {
    title: "3D Animation",
    description: "Immersive 3D experiences & renders",
    icon: Layers,
    color: "from-cyan-500 to-blue-500",
    stats: { projects: "30+", satisfaction: "100%" },
  },
  {
    title: "Visual Effects",
    description: "Cinematic VFX for video production",
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
    stats: { projects: "40+", satisfaction: "98%" },
  },
  {
    title: "Digital Art",
    description: "Custom illustrations & digital paintings",
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
    stats: { projects: "100+", satisfaction: "99%" },
  },
  {
    title: "Product Visualization",
    description: "Photorealistic product renders",
    icon: Camera,
    color: "from-rose-500 to-red-500",
    stats: { projects: "60+", satisfaction: "100%" },
  },
  {
    title: "Interactive Experiences",
    description: "Engaging animated web experiences",
    icon: Wand2,
    color: "from-indigo-500 to-violet-500",
    stats: { projects: "25+", satisfaction: "99%" },
  },
];

export function ArtAnimationSection() {
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

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-tag mb-8 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            CREATIVE SERVICES
          </span>
          <h2 className="font-syne text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6">
            Art & Animation
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Bringing creativity to life through stunning visuals, motion graphics, and immersive animations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20 place-items-center reveal">
          {artProjects.map((project, index) => (
            <div key={index} className="h-[25rem] w-full flex items-center justify-center">
              <PinContainer title={project.title} href="#">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-5`} />
                  
                  {/* Title */}
                  <h3 className="max-w-xs font-syne font-bold text-xl text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-6">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mt-auto">
                    <div className="flex flex-col">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.stats.projects}
                      </span>
                      <span className="text-xs text-slate-500">Projects</span>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.stats.satisfaction}
                      </span>
                      <span className="text-xs text-slate-500">Satisfaction</span>
                    </div>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 mt-4 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                      ))}
                    </div>
                    View Work →
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

export default ArtAnimationSection;

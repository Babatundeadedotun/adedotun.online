import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/lib/data';
import { 
  Code2, 
  Server, 
  Shield, 
  Wrench,
  Database,
  Globe,
  Terminal,
  GitBranch,
  Layers,
  FileCode,
  Cpu,
  Lock,
  Network,
  Router,
  Wifi,
  BookOpen,
  Eye
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  // Networking
  cisco: Network,
  router: Router,
  'packet-tracer': BookOpen,
  gns3: Wifi,
  'eve-ng': Network,
  // Security
  'network-security': Shield,
  wireshark: Eye,
  // Frontend
  react: Code2,
  javascript: FileCode,
  html5: Globe,
  css3: Layers,
  typescript: Code2,
  tailwind: Layers,
  // Backend
  nodejs: Server,
  express: Server,
  php: FileCode,
  python: Terminal,
  mongodb: Database,
  postgresql: Database,
  // Security
  linux: Terminal,
  kali: Lock,
  nmap: Shield,
  cctv: Eye,
  // Tools
  git: GitBranch,
  github: Code2,
  vscode: Code2,
  docker: Cpu,
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      
      categories?.forEach((category, catIndex) => {
        const cards = category.querySelectorAll('.skill-card');
        
        // Category entrance
        gsap.fromTo(
          category,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: category,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Cards stagger
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: category,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            delay: catIndex * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { id: 'networking', label: 'Networking & Routing', icon: Network },
    { id: 'security', label: 'Network Security', icon: Shield },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-4 block">
            // My Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-platinum mb-4">
            Technical <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-platinum/60 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on development and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={categoriesRef} className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category.id);
            const CategoryIcon = category.icon;
            
            return (
              <div key={category.id} className="skill-category">
                <div className="glass-card p-6 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <CategoryIcon size={24} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-platinum">
                      {category.label}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {categorySkills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      
                      return (
                        <div
                          key={skill.name}
                          className="skill-card group relative flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-gold/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 cursor-default"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                            <SkillIcon size={20} className="text-gold/70 group-hover:text-gold transition-colors" />
                          </div>
                          <span className="text-xs text-center text-platinum/60 group-hover:text-platinum transition-colors">
                            {skill.name}
                          </span>
                          
                          {/* Hover glow */}
                          <div className="absolute inset-0 rounded-lg bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            {['Network Engineering', 'Network Security', 'CCNA', 'MERN Stack'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

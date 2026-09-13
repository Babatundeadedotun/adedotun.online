import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/lib/data';
import { Briefcase, GraduationCap, Award, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  'encrypt-capital-new': Building2,
  'encrypt-capital': Building2,
  'freelance': Briefcase,
  'education-msc': GraduationCap,
  'education-beng': GraduationCap,
  'cisco': Award,
};

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate timeline items
      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      if (items) {
        items.forEach((item, index) => {
          const isLeft = index % 2 === 0;
          
          gsap.fromTo(
            item,
            { 
              opacity: 0, 
              x: isLeft ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Animate the dot
          const dot = item.querySelector('.timeline-dot');
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
              delay: 0.2,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-4 block">
            // Chronology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-platinum mb-4">
            My <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-platinum/60 max-w-2xl mx-auto">
            A timeline of my professional growth and learning experiences
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div 
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-gold via-gold/50 to-gold/20 origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.id] || Briefcase;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={exp.id}
                  className={`timeline-item relative flex items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-card p-5 hover:border-gold/40 transition-colors">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-gold" />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <h3 className="text-lg font-heading font-semibold text-platinum">
                            {exp.title}
                          </h3>
                          <p className="text-gold text-sm">{exp.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-platinum/60 text-sm mb-2">
                        {exp.description}
                      </p>
                      
                      <span className={`inline-block text-xs text-platinum/40 font-mono ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="timeline-dot absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6">
                    <div className="w-full h-full rounded-full bg-gold border-4 border-void shadow-gold" />
                    <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

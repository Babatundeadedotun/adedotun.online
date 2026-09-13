import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassCard } from '@/components/GlassCard';
import { personalInfo } from '@/lib/data';
import { MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.info-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const infoCards = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Briefcase, label: 'Company', value: personalInfo.company },
    { icon: GraduationCap, label: 'Study', value: 'Network Security' },
    { icon: Award, label: 'Focus', value: 'CCNA & Network Engineering' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-4 block">
            // About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-platinum">
            Who I <span className="text-gradient-gold">Am</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative mx-auto lg:mx-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold/30">
                <img
                  src="/images/portrait.PNG"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-gold/20 rounded-full animate-pulse-gold" />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-platinum mb-4">
                Network Engineer & <span className="text-gold">Network Security</span> Specialist
              </h3>
              
              <div className="space-y-4 text-platinum/80 leading-relaxed">
                <p>
                  I am a Nigeria-based Network Engineer and Security specialist with a strong foundation 
                  in enterprise networking, cybersecurity infrastructure, and full-stack development. My 
                  career trajectory is focused on becoming an elite network and security engineer, building 
                  resilient, secure digital systems from infrastructure to application layers.
                </p>
                <p>
                  Currently pursuing CCNA certification (completed ITN, advancing through SRWE phase) and 
                  my MSc in Cybersecurity at the University of Sunderland with specialization in Network 
                  Security. My experience at <span className="text-gold font-medium">{personalInfo.company}</span> as 
                  Portfolio Manager and Head of Data and Security HODS has honed my problem-solving, fund 
                  management, and infrastructure security expertise. I bring practical enterprise perspective 
                  to every project.
                </p>
                <p>
                  My technical foundation spans Cisco networking, routing and switching, network security 
                  principles, secure software development, and full-stack application architecture. I'm building 
                  DARPRO as a professional technology brand focused on bridging the gap between innovative 
                  development and robust network security practices at enterprise scale.
                </p>
              </div>
            </GlassCard>

            {/* Info Cards */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-4 mt-6">
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className="info-card glass-card p-4 flex items-center gap-3 hover:border-gold/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <card.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-platinum/50 uppercase tracking-wider">
                      {card.label}
                    </div>
                    <div className="text-sm font-medium text-platinum">
                      {card.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

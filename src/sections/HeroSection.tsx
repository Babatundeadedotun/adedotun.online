import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Code, Shield } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([nameRef.current, subtitleRef.current, taglineRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(decorRef.current, { opacity: 0, scale: 0.8 });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(decorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5')
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      // Continuous floating animation for decorations
      gsap.to('.float-element', {
        y: -15,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        {/* Code icon */}
        <div className="float-element absolute top-1/4 left-[10%] text-gold/20">
          <Code size={48} strokeWidth={1} />
        </div>
        
        {/* Shield icon */}
        <div className="float-element absolute top-1/3 right-[10%] text-gold/20 animation-delay-300">
          <Shield size={56} strokeWidth={1} />
        </div>
        
        {/* Small dots */}
        <div className="float-element absolute bottom-1/4 left-[15%] w-3 h-3 bg-gold/30 rounded-full animation-delay-200" />
        <div className="float-element absolute top-1/2 right-[20%] w-2 h-2 bg-gold/40 rounded-full animation-delay-500" />
        <div className="float-element absolute bottom-1/3 right-[15%] w-4 h-4 border border-gold/20 rounded-full animation-delay-400" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto mt-20">
        {/* Name */}
        <h1
          ref={nameRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-platinum mb-4 tracking-tight"
        >
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i}>
              {i === 1 ? (
                <span className="text-gradient-gold">{word}</span>
              ) : (
                word
              )}
              {i < personalInfo.name.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-gold font-medium mb-2"
        >
          {personalInfo.title}
        </p>
        
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base text-platinum/60 mb-6"
        >
          {personalInfo.subtitle}
        </p>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-base sm:text-lg md:text-xl text-platinum/80 max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToProjects}
            className="btn-gold flex items-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowDown 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-y-1" 
            />
          </button>
          <button
            onClick={handleScrollToContact}
            className="btn-outline-gold"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-heading font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-platinum/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}

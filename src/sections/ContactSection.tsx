import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '@/lib/data';
import { GlassCard } from '@/components/GlassCard';
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_hpltwii',
      'template_9grkdgm',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'R9I6_wbXbzC3uMdqE'
    );

    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });

  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. Please try again.');
  }

  setIsSubmitting(false);
};

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 1500));
    
  //   toast.success('Message sent successfully! I will get back to you soon.');
  //   setFormData({ name: '', email: '', message: '' });
  //   setIsSubmitting(false);
  // };

  const contactLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'Connect with me',
      href: personalInfo.linkedin,
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'View my code',
      href: personalInfo.github,
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      value: '@iamadedotun',
      href: personalInfo.instagram,
    },
    { 
      icon: Youtube, 
      label: 'YouTube', 
      value: 'Watch content',
      href: personalInfo.youtube,
    },
    { 
      icon: MessageCircle, 
      label: 'Threads', 
      value: '@iamadedotun',
      href: personalInfo.threads,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-4 block">
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-platinum mb-4">
            Establish <span className="text-gradient-gold">Connection</span>
          </h2>
          <p className="text-platinum/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div ref={contentRef} className="lg:col-span-2 space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-xl font-heading font-semibold text-platinum mb-4">
                Let&apos;s Talk
              </h3>
              <p className="text-platinum/60 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              {/* Contact Links */}
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-gold/10 hover:border-gold/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <link.icon size={18} className="text-gold" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs text-platinum/50 uppercase tracking-wider">
                        {link.label}
                      </div>
                      <div className="text-sm text-platinum group-hover:text-gold transition-colors">
                        {link.value}
                      </div>
                    </div>
                    <ArrowUpRight 
                      size={16} 
                      className="text-platinum/30 group-hover:text-gold transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* Location */}
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <div className="text-xs text-platinum/50 uppercase tracking-wider">
                  Location
                </div>
                <div className="text-sm text-platinum">
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="text-xl font-heading font-semibold text-platinum mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm text-platinum/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-platinum placeholder:text-platinum/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-platinum/60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-platinum placeholder:text-platinum/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-platinum/60 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-platinum placeholder:text-platinum/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

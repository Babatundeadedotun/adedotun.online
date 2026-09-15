import { personalInfo } from '@/lib/data';
import { navItems } from '@/lib/data';
import { Heart, ArrowUp } from 'lucide-react';

export function FooterSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 section-padding border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-void font-bold font-heading text-sm">AB</span>
              </div>
            </div>
            <p className="text-sm text-platinum/60">
              {personalInfo.title}
            </p>
            <p className="text-xs text-platinum/40">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-platinum/60 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-platinum/60 hover:text-gold transition-colors group"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-platinum/40">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-gold fill-gold" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

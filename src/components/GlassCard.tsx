import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/5 backdrop-blur-xl border border-gold/20 rounded-xl',
        hover && 'transition-all duration-300 hover:bg-white/10 hover:border-gold/40 hover:shadow-gold',
        className
      )}
    >
      {children}
    </div>
  );
}

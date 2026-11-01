import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export function GoldenGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { normalizedX, normalizedY } = useMousePosition();

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${normalizedY * 3}deg) 
        rotateY(${normalizedX * 3}deg)
      `;
    }
  }, [normalizedX, normalizedY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void to-void-light" />
      
      {/* Golden Grid */}
      <div 
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Horizontal lines */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
            backgroundSize: '100% 40px',
          }}
        />
        
        {/* Vertical lines */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 100%',
          }}
        />
        
        {/* Perspective grid floor */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
          style={{
            background: 'linear-gradient(to top, rgba(212, 175, 55, 0.2) 0%, transparent 100%)',
            transform: 'rotateX(60deg)',
            transformOrigin: 'bottom center',
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 5, 0.8) 100%)',
        }}
      />
    </div>
  );
}

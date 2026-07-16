'use client';

import { useEffect, useState } from 'react';
import { assetUrl } from '@/lib/asset-url';

const SPARKLES = [
  { id: 0, top: 15, left: 10, delay: 0, duration: 3.5, size: 6 },
  { id: 1, top: 28, left: 82, delay: 0.6, duration: 4.2, size: 4 },
  { id: 2, top: 65, left: 45, delay: 1.2, duration: 5.0, size: 5 },
  { id: 3, top: 38, left: 68, delay: 1.8, duration: 3.8, size: 3 },
  { id: 4, top: 78, left: 20, delay: 2.4, duration: 4.6, size: 5 },
  { id: 5, top: 52, left: 88, delay: 3.0, duration: 3.2, size: 4 },
  { id: 6, top: 18, left: 50, delay: 3.6, duration: 5.4, size: 3 },
  { id: 7, top: 70, left: 75, delay: 4.2, duration: 4.0, size: 6 },
  { id: 8, top: 45, left: 28, delay: 4.8, duration: 3.6, size: 4 },
  { id: 9, top: 85, left: 55, delay: 5.4, duration: 4.8, size: 3 },
];

function CelticKnotDivider() {
  return (
    <svg
      viewBox="0 0 200 20"
      className="w-48 md:w-64 h-5 mx-auto text-secondary/50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M0 10 Q25 0 50 10 Q75 20 100 10 Q125 0 150 10 Q175 20 200 10" />
      <path d="M0 10 Q25 20 50 10 Q75 0 100 10 Q125 20 150 10 Q175 0 200 10" />
      <circle cx="100" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${assetUrl('/images/hero-bg-pr.jpg')}')`,
        }}
      />
      <div className="absolute inset-0 bg-[hsl(153,60%,10%)]/70" />

      {/* Floating sparkles — deterministic positions to avoid hydration mismatch */}
      <div className="absolute inset-0 pointer-events-none">
        {SPARKLES.map((s) => (
          <div
            key={s.id}
            className="absolute w-1 h-1 rounded-full bg-secondary animate-shimmer"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Arco y flecha */}
        <div className="mb-6">
          <svg
            viewBox="0 0 100 80"
            className="w-16 h-12 mx-auto text-secondary mb-6 animate-float"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M20 10 Q50 40 20 70" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="70" strokeWidth="1" />
            <line x1="20" y1="40" x2="85" y2="40" strokeWidth="1.5" />
            <polygon
              points="85,35 95,40 85,45"
              fill="currentColor"
              stroke="none"
            />
            <line x1="22" y1="38" x2="15" y2="32" strokeWidth="1" />
            <line x1="22" y1="42" x2="15" y2="48" strokeWidth="1" />
          </svg>
        </div>

        <p className="font-body text-secondary/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          Celebrando mis
        </p>

        <h1 className="text-8xl md:text-[10rem] font-serif font-bold text-secondary leading-none mb-2">
          15
        </h1>
        <h2 className="text-4xl md:text-6xl font-serif font-light italic text-secondary/90 mb-2">
          {'Años'}
        </h2>

        {/* Ornamental line */}
        <div className="my-6">
          <CelticKnotDivider />
        </div>

        <p className="text-2xl md:text-4xl font-serif font-semibold text-secondary tracking-wide mb-4">
          Camila
        </p>

        <p className="font-body text-secondary/70 text-xl md:text-xl max-w-md mx-auto leading-relaxed">
          {
            'Dios ha sido mi guía, mi luz y el creador de cada una de mis sonrisas. Como en un cuento de hadas, hoy empiezo a escribir un nuevo capítulo en mi vida y llegó el momento de celebrar mis Quince años. Quiero que seas parte de esta noche tan mágica y especial para mí y mi familia'
          }
        </p>

        {/* Scroll indicator */}
        <div className="mt-12 animate-float">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 mx-auto text-secondary/60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

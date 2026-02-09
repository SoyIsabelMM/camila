'use client';

import { useEffect, useState } from 'react';

const SPARKLES = [
  { id: 0, top: 12, left: 8, delay: 0, duration: 2.5 },
  { id: 1, top: 25, left: 85, delay: 0.4, duration: 3.2 },
  { id: 2, top: 68, left: 42, delay: 0.8, duration: 4.1 },
  { id: 3, top: 35, left: 62, delay: 1.2, duration: 2.8 },
  { id: 4, top: 80, left: 18, delay: 1.6, duration: 3.6 },
  { id: 5, top: 50, left: 90, delay: 2.0, duration: 2.3 },
  { id: 6, top: 15, left: 55, delay: 2.4, duration: 4.4 },
  { id: 7, top: 72, left: 72, delay: 2.8, duration: 3.0 },
  { id: 8, top: 42, left: 25, delay: 3.2, duration: 3.8 },
  { id: 9, top: 88, left: 50, delay: 3.6, duration: 2.6 },
  { id: 10, top: 20, left: 35, delay: 4.0, duration: 4.0 },
  { id: 11, top: 58, left: 10, delay: 4.4, duration: 3.4 },
];

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
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
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
        {/* Crown ornament */}
        <div className="mb-6">
          <svg
            viewBox="0 0 120 60"
            className="w-24 h-12 mx-auto text-secondary"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M60 5 L75 25 L90 10 L85 35 L95 30 L80 50 L40 50 L25 30 L35 35 L30 10 L45 25 Z" />
            <circle cx="60" cy="2" r="2" />
            <circle cx="45" cy="20" r="1.5" />
            <circle cx="75" cy="20" r="1.5" />
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
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 md:w-24 bg-secondary/40" />
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-secondary animate-float"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8zm0 2c1 0 3 1.5 3 3s-2 3-3 4c-1-1-3-1.5-3-4s2-3 3-3z" />
          </svg>
          <div className="h-px w-16 md:w-24 bg-secondary/40" />
        </div>

        <p className="text-2xl md:text-4xl font-serif font-semibold text-secondary tracking-wide mb-4">
          Valentina
        </p>

        <p className="font-body text-secondary/70 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {
            'Con la gracia de Dios y la bendicion de mis padres, te invito a celebrar conmigo este dia tan especial'
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

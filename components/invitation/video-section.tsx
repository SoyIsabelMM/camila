'use client';

import { useEffect, useRef, useState } from 'react';

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
            Un Momento
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-4">
            Especial
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-secondary/40" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="h-px w-20 bg-secondary/40" />
          </div>
        </div>

        {/* Video Frame Container - max-w-sm centers and scales the 9:16 aspect ratio */}
        <div
          ref={ref}
          className={`max-w-sm mx-auto relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Ornate frame border */}
          <div className="relative p-3 md:p-5 bg-primary/5 rounded-2xl shadow-md">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 z-20 pointer-events-none">
              <svg
                viewBox="0 0 60 60"
                className="w-full h-full text-secondary/60"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0 Q30 0 30 30 Q0 30 0 0 Z" opacity="0.3" />
                <path d="M5 5 Q25 5 25 25 Q5 25 5 5 Z" opacity="0.2" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 -scale-x-100 z-20 pointer-events-none">
              <svg
                viewBox="0 0 60 60"
                className="w-full h-full text-secondary/60"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0 Q30 0 30 30 Q0 30 0 0 Z" opacity="0.3" />
                <path d="M5 5 Q25 5 25 25 Q5 25 5 5 Z" opacity="0.2" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 -scale-y-100 z-20 pointer-events-none">
              <svg
                viewBox="0 0 60 60"
                className="w-full h-full text-secondary/60"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0 Q30 0 30 30 Q0 30 0 0 Z" opacity="0.3" />
                <path d="M5 5 Q25 5 25 25 Q5 25 5 5 Z" opacity="0.2" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 scale-x-[-1] scale-y-[-1] z-20 pointer-events-none">
              <svg
                viewBox="0 0 60 60"
                className="w-full h-full text-secondary/60"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0 Q30 0 30 30 Q0 30 0 0 Z" opacity="0.3" />
                <path d="M5 5 Q25 5 25 25 Q5 25 5 5 Z" opacity="0.2" />
              </svg>
            </div>

            {/* Inner border */}
            <div className="border-2 border-secondary/30 rounded-xl overflow-hidden relative z-10">
              {/* Proporción 9:16 vertical */}
              <div className="relative aspect-9/16 bg-primary/10">
                <video
                  src="/videos/video-camila-cumple.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="none" // 🚀 Clave para retrasar la descarga de los 8MB hasta que se necesite
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  Tu navegador no soporta la reproducción de este video.
                </video>
              </div>
            </div>
          </div>

          {/* Caption below the video */}
          <p className="text-center font-body text-sm text-muted-foreground mt-4 italic">
            {'Un vistazo a este hermoso camino hacia mis 15 años'}
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

export function ParentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
            Con el amor de
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-4">
            Mis Padres
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-secondary/40" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="h-px w-20 bg-secondary/40" />
          </div>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            {
              'Con inmenso amor y orgullo, invitamos a familiares y amigos a compartir este momento tan especial en la vida de nuestra hija.'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Father */}
            <div className="p-6 rounded-xl bg-card border border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary/20 p-1 flex items-center justify-center overflow-hidden">
                {/* Imagen de la madre */}
                <img
                  src="/images/imagen-2.png"
                  alt="Digmaira Mujica"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em] mb-1">
                Padre
              </p>
              <p className="text-xl font-serif font-semibold text-primary">
                {'Antonio Bravo'}
              </p>
            </div>

            {/* Mother */}
            <div className="p-6 rounded-xl bg-card border border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary/20 p-1 flex items-center justify-center overflow-hidden">
                {/* Imagen de la madre */}
                <img
                  src="/images/imagen-1.png"
                  alt="Digmaira Mujica"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em] mb-1">
                Madre
              </p>
              <p className="text-xl font-serif font-semibold text-primary">
                {'Digmaira Mujica'}
              </p>
            </div>
          </div>

          {/* Godparents */}
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-secondary/15">
            <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Padrinos
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <p className="text-lg font-serif font-semibold text-primary">
                  {'Jacqueline Virguez'}
                </p>
                <p className="text-lg font-serif font-semibold text-primary">
                  {'Juan Carlos Falcón'}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-lg font-serif font-semibold text-primary">
                  {'Argelia Angulo'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

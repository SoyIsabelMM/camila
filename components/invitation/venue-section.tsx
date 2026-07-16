'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { assetUrl } from '@/lib/asset-url';

export function VenueSection() {
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
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
            {'Te Esperamos En'}
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-4">
            El Lugar
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-secondary/40" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="h-px w-20 bg-secondary/40" />
          </div>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Venue image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[1.333]">
            <Image
              src={assetUrl('/images/atlantico-madeira.jpeg')}
              alt="Salón Atlántico - Lugar del evento"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          {/* Venue details */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">
              {'Salón Atlántico'}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {
                'Un espacio elegante y mágico, perfecto para celebrar esta noche tan especial. Rodeado de jardínes y fuentes, el salón nos recibirá con su encanto único.'
              }
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-accent shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-body text-sm text-foreground">
                  Av. Terepaima, sector Las Tunas, Agua Viva, Cabudare
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-accent shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="font-body text-sm text-foreground">
                  +58 0424-5440503{' '}
                </span>
              </div>
            </div>

            {/* Dress code */}
            <div className="inline-flex items-center mb-4 gap-2 px-6 py-3 bg-primary/10 rounded-lg border border-primary/20 ">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
              </svg>
              <span className="font-body text-l text-primary">
                Código de Vestimenta:
              </span>
              <span className="font-body text-l text-primary font-bold">
                Coctel, Sugerimos evitar el uso del color Verde{' '}
              </span>
            </div>
            {/*Confirmation*/}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-lg border border-primary/20">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
              </svg>
              <span className="font-body text-l text-primary">
                Confirmación:
              </span>
              <span className="font-body text-l text-primary font-bold">
                Agradecemos confirmar asistencia antes del Sábado 01 de Agosto
              </span>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border-2 border-secondary/20">
          <iframe
            title="Ubicacion del Salón "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.918763414773!2d-69.30226242491015!3d10.023562490083037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8760b01fda1f4d%3A0x48b4d1ba12ca6548!2sClub%20madeira!5e0!3m2!1ses-419!2scl!4v1784154225779!5m2!1ses-419!2scl"
            className="w-full h-64 md:h-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

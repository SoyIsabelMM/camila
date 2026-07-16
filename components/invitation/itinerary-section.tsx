'use client';

import { useEffect, useRef, useState } from 'react';

const itinerary = [
  {
    time: '7:30 PM',
    title: 'Recepción de Invitados',
    description: 'Bienvenida con coctel y musica en vivo',
  },
  {
    time: '8:00 PM',
    title: 'Ingreso al salón',
    description: 'Ingreso al salón de eventos para la ceremonia y cena',
  },
  {
    time: '9:00 PM',
    title: 'Primer Vals',
    description: 'El primer baile de Camila con su padre Antonio Bravo',
  },
  {
    time: '9:30 PM',
    title: 'Brindis y Cena',
    description: 'Cena de gala con platillos selectos',
  },
  {
    time: '10:30 PM',
    title: 'Fiesta y Baile',
    description: 'Noche de música, baile y diversión para todos',
  },
  {
    time: '03:00 AM',
    title: 'Despedida',
    description: 'Agradecimiento y cierre de una noche mágica',
  },
];

function TimelineItem({
  item,
  index,
  isLeft,
}: {
  item: (typeof itinerary)[0];
  index: number;
  isLeft: boolean;
}) {
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
    <div
      ref={ref}
      className={`flex items-center gap-4 md:gap-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left content (desktop) */}
      <div
        className={`hidden md:block flex-1 ${isLeft ? 'text-right' : 'opacity-0'}`}
      >
        {isLeft && (
          <>
            <p className="font-serif text-lg font-semibold text-primary">
              {item.title}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {item.description}
            </p>
          </>
        )}
      </div>

      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
          <span className="text-xs font-body font-bold text-primary-foreground">
            {item.time.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Right content (desktop) / Only content (mobile) */}
      <div
        className={`flex-1 ${!isLeft ? '' : 'hidden md:block md:opacity-0'}`}
      >
        {!isLeft && (
          <>
            <p className="font-serif text-lg font-semibold text-primary">
              {item.title}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {item.description}
            </p>
          </>
        )}
      </div>

      {/* Mobile content */}
      {isLeft && (
        <div className="flex-1 md:hidden">
          <p className="font-serif text-lg font-semibold text-primary">
            {item.title}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      )}
    </div>
  );
}

export function ItinerarySection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
            Programa de
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-4">
            La Noche
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-secondary/40" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="h-px w-20 bg-secondary/40" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-secondary/30 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {itinerary.map((item, i) => (
              <TimelineItem
                key={item.time}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

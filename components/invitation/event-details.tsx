'use client';

import React from 'react';

import { useEffect, useRef, useState } from 'react';

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 text-secondary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 text-secondary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 text-secondary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function DetailCard({
  icon,
  title,
  line1,
  line2,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-6 md:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {title}
      </h4>
      <p className="text-xl md:text-2xl font-serif font-semibold text-primary">
        {line1}
      </p>
      <p className="font-body text-sm text-muted-foreground mt-1">{line2}</p>
    </div>
  );
}

export function EventDetails() {
  const googleCalendarUrl = new URL(
    'https://calendar.google.com/calendar/render',
  );
  googleCalendarUrl.searchParams.set('action', 'TEMPLATE');
  googleCalendarUrl.searchParams.set(
    'text',
    '15 Años de Camila - Fiesta Princesa Merida',
  );
  googleCalendarUrl.searchParams.set(
    'dates',
    '20260815T200000/20260816T030000',
  );
  googleCalendarUrl.searchParams.set(
    'details',
    '¡Te esperamos para celebrar juntos!\n\n' +
      '👑 Celebración de los 15 Años de Camila.\n' +
      '🏹 Tema: Princesa Mérida.\n' +
      '👗 Dress code: Semi-formal (por favor, abstenerse de usar colores verde esmeralda y dorado).\n\n' +
      '📅 Agradecemos confirmar asistencia antes del Sábado 01 de Agosto.',
  );
  googleCalendarUrl.searchParams.set(
    'location',
    'Centro Atlántico Madeira Club, Salón Atlántico, Av. Terepaima, sector Las Tunas, Agua Viva, Cabudare',
  );
  googleCalendarUrl.searchParams.set('remind', '1440');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
            {'Detalles del'}
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-4">
            Evento
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-secondary/40" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="h-px w-20 bg-secondary/40" />
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          <DetailCard
            icon={<CalendarIcon />}
            title="Fecha"
            line1="15 de Agosto, 2026"
            line2="Sabado"
            delay={0}
          />
          <DetailCard
            icon={<ClockIcon />}
            title="Hora"
            line1="8:00 PM"
            line2="Recepcion a las 5:30 PM"
            delay={200}
          />
          <DetailCard
            icon={<MapPinIcon />}
            title="Lugar"
            line1={'Centro Atlántico Madeira Club, Salón Atlántico'}
            line2="Av. Terepaima, sector Las Tunas, Agua Viva, Cabudare"
            delay={400}
          />
        </div>

        {/* Google Calendar button */}
        <div className="text-center">
          <a
            href={googleCalendarUrl.toString()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.15em] rounded-lg hover:bg-primary/90 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="12" y1="14" x2="12" y2="18" />
              <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
            Agregar a Google Calendar
          </a>
        </div>
      </div>
    </section>
  );
}

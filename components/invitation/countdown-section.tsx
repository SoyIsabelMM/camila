'use client';

import { useEffect, useState } from 'react';

const EVENT_DATE = new Date('2026-08-15T18:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg border-2 border-secondary/30 bg-primary/10 flex items-center justify-center mb-2">
        <span className="text-3xl md:text-5xl font-serif font-bold text-primary">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof getTimeLeft
  > | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mostrar placeholder mientras hidrata
  const displayTime = timeLeft ?? {
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  };
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Ornamental header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-secondary/60" />
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-secondary"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 12c0-2 2-4 4-4h1l5 8 5-8h1c2 0 4 2 4 4v2c0 1-1 2-2 2H4c-1 0-2-1-2-2v-2z" />
          </svg>
          <div className="h-px w-12 bg-secondary/60" />
        </div>

        <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
          Faltan
        </h3>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-12">
          {'Para el Gran Día'}
        </h2>

        <div className="flex justify-center gap-4 md:gap-8">
          <CountdownUnit value={displayTime.dias} label="Dias" />
          <CountdownUnit value={displayTime.horas} label="Horas" />
          <CountdownUnit value={displayTime.minutos} label="Min" />
          <CountdownUnit value={displayTime.segundos} label="Seg" />
        </div>
      </div>
    </section>
  );
}

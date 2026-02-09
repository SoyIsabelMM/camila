'use client';

import React from 'react';

import { useState, useRef, useCallback } from 'react';

/**
 * Pantalla de bienvenida que requiere interaccion del usuario para
 * desbloquear el autoplay de audio en navegadores modernos.
 * Al hacer clic se inicia la musica y se revela la invitacion.
 */
export function EntranceSplash({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [fading, setFading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = useCallback(() => {
    // Inicia la musica con la interaccion del usuario
    if (!audioRef.current) {
      const audio = new Audio('/music/background.mp3');
      audio.loop = true;
      audio.volume = 0.4;
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {
      // Si el navegador aun bloquea, al menos mostramos la invitacion
    });

    setFading(true);
    setTimeout(() => setEntered(true), 800);
  }, []);

  if (entered) {
    return (
      <>
        <MusicController audioRef={audioRef} />
        {children}
      </>
    );
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[hsl(153,60%,10%)] transition-opacity duration-700 ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[hsl(153,60%,28%)]/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[hsl(45,75%,55%)]/8 blur-3xl" />
        </div>

        <div className="relative text-center px-6">
          {/* Corona */}
          <svg
            viewBox="0 0 120 60"
            className="w-20 h-10 mx-auto text-secondary mb-6 animate-float"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M60 5 L75 25 L90 10 L85 35 L95 30 L80 50 L40 50 L25 30 L35 35 L30 10 L45 25 Z" />
            <circle cx="60" cy="2" r="2" />
            <circle cx="45" cy="20" r="1.5" />
            <circle cx="75" cy="20" r="1.5" />
          </svg>

          <p className="font-body text-secondary/60 text-xs tracking-[0.4em] uppercase mb-3">
            Estas invitado a los
          </p>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-secondary leading-none mb-2">
            15
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic text-secondary/80 mb-8">
            {'Años de Camila '}
          </p>

          {/* Boton de entrada */}
          <button
            onClick={handleEnter}
            type="button"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary/40 rounded-full text-secondary font-body text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:border-secondary hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/50"
          >
            <span>Abrir Invitacion</span>
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <p className="font-body text-secondary/40 text-xs mt-6">
            {'Toca para abrir'}
          </p>
        </div>
      </div>
    </>
  );
}

/**
 * Boton flotante para controlar la musica (pausar / reanudar).
 */
function MusicController({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [audioRef]);

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={isPlaying ? 'Pausar musica' : 'Reproducir musica'}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary/50"
    >
      {isPlaying ? (
        /* Icono de altavoz con ondas */
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon
            points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            fill="currentColor"
          />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        /* Icono de altavoz silenciado */
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon
            points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            fill="currentColor"
          />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}

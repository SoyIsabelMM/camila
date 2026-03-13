'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { assetUrl } from '@/lib/asset-url';

const photos = [
  {
    year: '2011',
    age: 'Recien nacida',
    src: assetUrl('/images/baby.jpg'),
    caption: 'El dia que llego la luz a nuestras vidas',
  },
  {
    year: '2014',
    age: '3 años',
    src: assetUrl('/images/toddler.jpg'),
    caption: 'Primeros pasos, primeras aventuras',
  },
  {
    year: '2017',
    age: '6 años',
    src: assetUrl('/images/childhood.jpg'),
    caption: 'Siempre curiosa, siempre valiente',
  },
  {
    year: '2020',
    age: '9 años',
    src: assetUrl('/images/preteen.jpg'),
    caption: 'Creciendo con fuerza y determinacion',
  },
  {
    year: '2023',
    age: '12 años',
    src: assetUrl('/images/teen.jpg'),
    caption: 'Una joven con suenos grandes',
  },
  {
    year: '2026',
    age: '15 años',
    src: assetUrl('/images/cami.png'),
    caption: 'Lista para escribir su propia historia',
  },
];

function PhotoItem({
  photo,
  index,
}: {
  photo: (typeof photos)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 === 0;

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
    <div
      ref={ref}
      className={`relative flex items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Desktop layout: alternating sides */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:items-center w-full">
        {/* Left side */}
        <div className={isLeft ? '' : 'order-1'}>
          {isLeft ? (
            <div className="flex flex-col items-end text-right">
              <div
                className="relative w-full max-w-xs ml-auto rounded-xl overflow-hidden border-2 border-secondary/20"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={photo.src || assetUrl('/placeholder.svg')}
                  alt={`Valentina a los ${photo.age}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <p className="font-body text-sm text-muted-foreground mt-2 italic">
                {photo.caption}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-end text-right pr-4">
              <span className="text-4xl font-serif font-bold text-primary/20">
                {photo.year}
              </span>
              <span className="font-body text-sm text-secondary font-bold uppercase tracking-wider">
                {photo.age}
              </span>
            </div>
          )}
        </div>

        {/* Center timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary border-4 border-card flex items-center justify-center z-10 shadow-md">
            <span className="text-xs font-body font-bold text-primary-foreground">
              {photo.year.slice(-2)}
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className={isLeft ? '' : '-order-1'}>
          {!isLeft ? (
            <div className="flex flex-col items-start text-left">
              <div
                className="relative w-full max-w-xs mr-auto rounded-xl overflow-hidden border-2 border-secondary/20"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={photo.src || assetUrl('/placeholder.svg')}
                  alt={`Valentina a los ${photo.age}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <p className="font-body text-sm text-muted-foreground mt-2 italic">
                {photo.caption}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start text-left pl-4">
              <span className="text-4xl font-serif font-bold text-primary/20">
                {photo.year}
              </span>
              <span className="font-body text-sm text-secondary font-bold uppercase tracking-wider">
                {photo.age}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 items-start w-full">
        {/* Timeline dot */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary border-4 border-card flex items-center justify-center z-10 shadow-md">
            <span className="text-[10px] font-body font-bold text-primary-foreground">
              {photo.year.slice(-2)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-2">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-serif font-bold text-primary/30">
              {photo.year}
            </span>
            <span className="font-body text-xs text-secondary font-bold uppercase tracking-wider">
              {photo.age}
            </span>
          </div>
          <div
            className="relative w-full rounded-xl overflow-hidden border-2 border-secondary/20"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={photo.src || assetUrl('/placeholder.svg')}
              alt={`Valentina a los ${photo.age}`}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="font-body text-sm text-muted-foreground mt-2 italic">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PhotoTimeline() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h3 className="text-lg md:text-xl font-body text-muted-foreground uppercase tracking-[0.25em] mb-2">
            Mi Camino
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary mb-4">
            A Traves del Tiempo
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-secondary/40" />
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div className="h-px w-20 bg-secondary/40" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-secondary/25 -translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {photos.map((photo, i) => (
              <PhotoItem key={photo.year} photo={photo} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

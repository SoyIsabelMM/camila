export function FooterSection() {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg-pr.jpg')" }}
      />
      <div className="absolute inset-0 bg-[hsl(153,60%,10%)]/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Crown */}
        <div className="mb-6">
          <svg
            viewBox="0 0 120 60"
            className="w-20 h-10 mx-auto text-secondary"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M60 5 L75 25 L90 10 L85 35 L95 30 L80 50 L40 50 L25 30 L35 35 L30 10 L45 25 Z" />
          </svg>
        </div>

        <p className="text-secondary/70 font-body text-sm uppercase tracking-[0.3em] mb-3">
          Nos vemos el
        </p>
        <p className="text-3xl md:text-5xl font-serif font-semibold text-secondary mb-2">
          15 de Agosto, 2026
        </p>
        <p className="text-secondary/80 font-body text-base mb-8">
          {'Tu presencia es el mejor regalo'}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-secondary/30" />
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-secondary/60"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" />
          </svg>
          <div className="h-px w-16 bg-secondary/30" />
        </div>

        <p className="font-serif text-2xl md:text-3xl italic text-secondary/90 mb-6">
          {
            '"Nuestro destino vive en nuestro interior. Solo tienes que ser lo suficiente valiente para verlo."'
          }
        </p>
        <p className="font-body text-sm text-secondary/50">
          {'- La Princesa Merida'}
        </p>

        <div className="mt-12 pt-8 border-t border-secondary/20">
          <p className="font-body text-xs text-secondary/40 uppercase tracking-[0.2em]">
            {'Con amor, la familia Bravo Mujica'}
          </p>
        </div>
      </div>
    </footer>
  );
}

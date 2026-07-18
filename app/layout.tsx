import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';

import './global.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Mis XV - Camila Bravo Mujica',
  description:
    'Estas cordialmente invitado a celebrar mis XV años. Un evento mágico inspirado en la Princesa Merida.',
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👑</text></svg>`,
  },
};

export const viewport: Viewport = {
  themeColor: '#1a5c3a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Roboto, Lexend } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const lexend = Lexend({
  variable: '--font-lex',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tools.aqutte.co.ke'),
  title: 'DevKit - Essential utilities for developers',
  description:
    'Essential developer utilities with ready-to-use code examples. Boost your development productivity with professional-grade tools for common dev tasks.',
  openGraph: {
    title: 'DevKit - Essential utilities for developers',
    description:
      'Essential developer utilities with ready-to-use code examples. Boost your development productivity with professional-grade tools for common dev tasks.',
    type: 'website',
    url: 'https://tools.aqutte.co.ke',
    siteName: 'DevKit',
    images: '/images/og.webp',
  },
};

export const viewport: Viewport = {
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body
        className={`${roboto.variable} ${lexend.variable} antialiased overflow-x-hidden flex`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

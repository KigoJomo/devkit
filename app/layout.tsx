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
  title: 'Random Tools',
  description: 'A collection of random tools and utilities',
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

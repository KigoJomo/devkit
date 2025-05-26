import type { Metadata } from "next";
import { Roboto, Lexend } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const lexend = Lexend({
  variable: '--font-lex',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Random Tools",
  description: "A collection of random tools and utilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

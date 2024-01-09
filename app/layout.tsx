import React from 'react';
import '../styles/globals.css';
import Generator from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${sans.variable} font-sans`}>
      <body className="bg-white">
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

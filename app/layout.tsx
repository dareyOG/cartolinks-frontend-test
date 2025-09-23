import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { ThemeContextProvider } from './context/ThemeContext';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Cartolinks Solutions Ltd',
  description:
    'Frontend Test for Cartolinks Solutions Ltd developed by Oludire Damilare with Next.js App Router and Tailwind CSS using TypeScript, hosted on Vercel. This project showcases a responsive design, dark mode support, and optimized performance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ThemeContextProvider>
          <Header />
          <main className="px-6 flex flex-col gap-y-10">{children}</main>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

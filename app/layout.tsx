import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Footer from '@/components/footer';

import './globals.css';
import Header from '@/components/header';

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
    // <ThemeProvider>
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main className="px-6 flex flex-col gap-y-10">{children}</main>
        <Footer />
      </body>
    </html>
    // </ThemeProvider>
  );
}

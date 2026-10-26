import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SwasthyaVeda | Elite Virtual Ayurvedic Medicine & Lifestyle Reversal',
  description: 'Premium virtual Ayurvedic consultations specializing in cardiac wellness, diabetes reversal, and chronic lifestyle disease management through non-invasive medicine.',
  keywords: ['Ayurveda', 'Online Doctor Consultation', 'Virtual Cardiac Care', 'Diabetes Reversal', 'Holistic Telehealth', 'Prakriti Assessment'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#FBF8F2] text-[#2A3418] antialiased flex flex-col min-h-screen selection:bg-[#B8892D]/20 selection:text-[#2A3418]">
        <Header />
        <main className="flex-1 pt-24 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

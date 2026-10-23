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
  title: 'Swasthyaveda | Online Ayurvedic Healing & Virtual Consultations',
  description: 'Premium online Ayurvedic care by an elite holistic doctor. Virtual Cardiac Care, Diabetes Reversal, Diet & Nutrition, Weight Management, and Tele-therapy.',
  keywords: ['Ayurveda', 'Online Consultation', 'Virtual Cardiac Care', 'Diabetes Reversal', 'Holistic Health', 'Tele-therapy'],
  authors: [{ name: 'Swasthyaveda' }],
  openGraph: {
    title: 'Swasthyaveda | Ancient Healing, Modern Accessibility',
    description: 'Elite Ayurvedic healing delivered through virtual care.',
    url: 'https://swasthyaveda.example.com',
    siteName: 'Swasthyaveda',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
        width: 1920,
        height: 1080,
        alt: 'Swasthyaveda Online Healing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-clinical-cream text-earthy-olive antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
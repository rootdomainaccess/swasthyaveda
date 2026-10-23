import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-earthy-olive text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <Link href="/" className="text-xl font-bold text-clinical-cream no-underline">Swasthyaveda</Link>
          </div>
          <p className="text-sm opacity-90">
            Premium online Ayurvedic care delivered virtually.
          </p>
        </div>
        <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4">
          <Link href="/about" className="text-sm text-white hover:text-clinical-cream transition-colors">About</Link>
          <Link href="/services" className="text-sm text-white hover:text-clinical-cream transition-colors">Services</Link>
          <Link href="/process" className="text-sm text-white hover:text-clinical-cream transition-colors">How It Works</Link>
          <Link href="/contact" className="text-sm text-white hover:text-clinical-cream transition-colors">Contact</Link>
        </div>
        <div className="mt-6 sm:mt-0 text-sm opacity-80">
          © {new Date().getFullYear()} Swasthyaveda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-clinical-cream shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-earthy-olive no-underline hover:text-golden-bronze transition-colors">
              Swasthyaveda
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-earthy-olive hover:text-golden-bronze transition-colors">Home</Link>
            <Link href="/about" className="text-earthy-olive hover:text-golden-bronze transition-colors">About</Link>
            <Link href="/services" className="text-earthy-olive hover:text-golden-bronze transition-colors">Services</Link>
            <Link href="/process" className="text-earthy-olive hover:text-golden-bronze transition-colors">How It Works</Link>
            <Link href="/contact" className="text-earthy-olive hover:text-golden-bronze transition-colors">Contact</Link>
          </div>
          <div className="md:flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-earthy-olive hover:text-golden-bronze transition-colors focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
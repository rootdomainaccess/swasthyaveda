'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Clinical Services', href: '/services' },
    { name: 'Care Protocol', href: '/process' },
    { name: 'About the Practice', href: '/about' },
    { name: 'Consultation', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#B8892D]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#B8892D]/40 flex items-center justify-center bg-[#F5EFE3] group-hover:border-[#B8892D] transition-colors shadow-sm">
              <svg className="w-6 h-6 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
                <path d="M12 22V10" />
                <path d="M12 14c-2-2-4-2-6 0" />
                <path d="M12 16c2-2 4-2 6 0" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#2A3418] group-hover:text-[#B8892D] transition-colors">
                Swasthya<span className="text-[#B8892D]">Veda</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#6B7B4B] font-medium hidden sm:block">
                Virtual Ayurvedic Medicine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#B8892D] font-semibold'
                      : 'text-[#2A3418]/80 hover:text-[#B8892D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8892D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#2A3418] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2A3418] hover:text-[#B8892D] hover:bg-[#F5EFE3] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F2] border-b border-[#B8892D]/20 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#2A3418] hover:bg-[#F5EFE3] hover:text-[#B8892D] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#2A3418] transition-colors shadow-md"
            >
              Book Online Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

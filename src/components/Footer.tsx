import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#232B14] text-[#E8E1CE] pt-16 pb-12 border-t border-[#B8892D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#B8892D]/60 flex items-center justify-center bg-white/5">
                <svg className="w-5 h-5 text-[#D4A74B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
                  <path d="M12 22V10" />
                </svg>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                Swasthya<span className="text-[#D4A74B]">Veda</span>
              </span>
            </div>
            <p className="text-sm text-[#C4BFA9] leading-relaxed">
              Elite virtual Ayurvedic medicine delivering science-backed reversal protocols for chronic lifestyle and metabolic disorders worldwide.
            </p>
            <div className="pt-2 text-xs text-[#D4A74B] font-medium tracking-widest uppercase">
              ✦ Certified Ayurvedic Clinical Practice
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#C4BFA9] hover:text-[#D4A74B] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#C4BFA9] hover:text-[#D4A74B] transition-colors">About the Doctor</Link>
              </li>
              <li>
                <Link href="/services" className="text-[#C4BFA9] hover:text-[#D4A74B] transition-colors">Clinical Services</Link>
              </li>
              <li>
                <Link href="/process" className="text-[#C4BFA9] hover:text-[#D4A74B] transition-colors">Care Protocol</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#C4BFA9] hover:text-[#D4A74B] transition-colors">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Clinical Specialties */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Focus Areas</h4>
            <ul className="space-y-2.5 text-sm text-[#C4BFA9]">
              <li className="flex items-center gap-2">
                <span className="text-[#D4A74B] text-xs">◆</span>
                <span>Virtual Cardiac Wellness</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4A74B] text-xs">◆</span>
                <span>Type-2 Diabetes Reversal</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4A74B] text-xs">◆</span>
                <span>Hypertension & Vascular Health</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4A74B] text-xs">◆</span>
                <span>Personalized Dinacharya & Diet</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4A74B] text-xs">◆</span>
                <span>Botanical E-Prescriptions</span>
              </li>
            </ul>
          </div>

          {/* Virtual Care Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Consultation Hours</h4>
            <p className="text-sm text-[#C4BFA9]">
              Online appointments available via secure video consultation:
            </p>
            <div className="text-xs space-y-1.5 text-[#E8E1CE] bg-white/5 p-3 rounded-lg border border-white/10">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="text-[#D4A74B]">09:00 AM – 07:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-[#D4A74B]">10:00 AM – 04:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Virtual Emergencies Only</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block w-full text-center py-2.5 px-4 rounded-lg bg-[#B8892D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A74B] transition-colors"
            >
              Request Tele-Appointment
            </Link>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-[#A19A84] space-y-3">
          <p className="leading-relaxed">
            <strong className="text-[#D4A74B]">Medical & Telehealth Disclaimer:</strong> SwasthyaVeda provides personalized Ayurvedic consultations, dietary coaching, and lifestyle reversal guidance for chronic conditions. Virtual consultations are not intended to replace emergency medical care or hospital triage. If you are experiencing acute medical emergencies, please visit your nearest hospital emergency department.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-white/5 gap-2 text-xs">
            <p>© {new Date().getFullYear()} SwasthyaVeda. All rights reserved.</p>
            <p className="text-[#C4BFA9]">Crafted for Holistic Medical Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function AboutPage() {
  const clinicalPillars = [
    {
      title: 'Precision Diagnosis, Not Generic Formulas',
      text: 'Every human body possesses a unique constitutional blueprint (Prakriti). We never prescribe off-the-shelf generalized supplements. Every botanical formula and dietary adjustment is custom-titrated to your metabolic state.',
    },
    {
      title: 'Lab-Monitored Biological Outcomes',
      text: 'While our medicines originate from centuries of revered Ayurvedic compendia, our success is measured by modern pathology: fasting blood glucose, HbA1c, lipid sub-fractions, blood pressure, and renal panels.',
    },
    {
      title: '100% Non-Invasive Reversal Philosophy',
      text: 'Chronic metabolic disorders are biological adaptations to lifestyle stressors. By removing systemic inflammation and clearing cellular toxins (Ama), the body naturally resets without surgical or aggressive pharmaceutical measures.',
    },
    {
      title: 'Global Telemedicine Accessibility',
      text: 'Elite Ayurvedic expertise should not be limited by geography. Patients across the globe access private, encrypted video consultations and certified botanical medicines from their homes.',
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Header Banner */}
      <section className="bg-[#F5EFE3] py-16 sm:py-20 border-b border-[#B8892D]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
            About SwasthyaVeda
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2A3418]">
            The Intersection of Classical Ayurveda and Modern Clinical Science
          </h1>
          <p className="text-base sm:text-lg text-[#3E4B24]/85 leading-relaxed font-light">
            Founded on the conviction that chronic lifestyle diseases require root-cause healing rather than lifelong dependency on synthetic symptom blockers.
          </p>
        </div>
      </section>

      {/* Main Narrative & Doctor Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#B8892D]/30 shadow-2xl bg-[#F5EFE3]">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                alt="Ayurvedic Doctor & Telehealth Physician"
                className="w-full h-96 sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A3418] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#B8892D]/30 shadow-lg text-center">
                <div className="font-heading text-lg font-bold text-[#2A3418]">Chief Clinical Physician</div>
                <div className="text-xs text-[#B8892D] font-medium tracking-wider uppercase">B.A.M.S, M.D. (Ayurveda) • 15+ Years Clinical Practice</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#2A3418]">
            <div className="inline-block px-3 py-1 rounded-full bg-[#B8892D]/15 text-[#B8892D] text-xs font-semibold uppercase tracking-wider">
              Clinical Legacy & Purpose
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#2A3418] leading-tight">
              Compassionate, Evidence-Grounded Ayurvedic Healing
            </h2>

            <p className="text-base sm:text-lg text-[#3E4B24]/85 leading-relaxed font-light">
              At SwasthyaVeda, we view disease not as an enemy to be suppressed with aggressive chemicals, but as an expression of biological disharmony within your unique physiology. Modern lifestyles disrupt circadian rhythms, overload digestive metabolism (Agni), and trigger systemic vascular inflammation.
            </p>

            <p className="text-base text-[#3E4B24]/80 leading-relaxed font-light">
              With over fifteen years of specialized clinical experience treating hypertension, cardiac arrhythmias, stubborn obesity, and advanced type-2 diabetes, our practice bridges the ancient diagnostic depth of <em>Charaka Samhita</em> and <em>Sushruta Samhita</em> with modern laboratory biomarker tracking.
            </p>

            <div className="p-6 rounded-2xl bg-[#F5EFE3] border border-[#B8892D]/20 space-y-2">
              <div className="font-heading text-base font-bold text-[#2A3418]">
                Our Clinical Commitment to Every Patient:
              </div>
              <p className="text-sm text-[#3E4B24]/85 leading-relaxed">
                You will never be rushed through an assembly-line appointment. We take time to listen, review every page of your past medical history, and remain by your side through bi-weekly check-ins until your health is fully restored.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#2A3418] transition-colors shadow-md"
              >
                Schedule Private Video Consultation
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Core Clinical Pillars */}
      <section className="bg-[#F5EFE3] py-20 border-y border-[#B8892D]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
              The SwasthyaVeda Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A3418] font-heading">
              Our 4 Clinical Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#B8892D]/20 shadow-sm space-y-3"
              >
                <div className="text-xs font-bold text-[#B8892D] uppercase tracking-widest">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#2A3418]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#3E4B24]/80 leading-relaxed font-light">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

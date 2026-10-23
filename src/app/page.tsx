import Link from 'next/link';

export default function HomePage() {
  const specialties = [
    {
      title: 'Virtual Cardiac & Vascular Wellness',
      tag: 'Cardio-Metabolic',
      description: 'Holistic clinical management for hypertension, arterial elasticity, lipid profiles, and cardiovascular strain using clinically researched herbs and stress regulation.',
      icon: (
        <svg className="w-8 h-8 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          <path d="M12 12v3m-2-1.5h4" />
        </svg>
      ),
    },
    {
      title: 'Type-2 Diabetes & Metabolic Reversal',
      tag: 'Endocrinology',
      description: 'Personalized herbal formulations, glucose stabilizing nutrition plans, and biological clock resets targeting insulin sensitivity and HbA1c reduction without invasive drugs.',
      icon: (
        <svg className="w-8 h-8 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: 'Precision Ayurvedic Nutrition & Gut Care',
      tag: 'Gastroenterology',
      description: 'Restoring the gut microbiome (Agni) and eliminating metabolic toxins (Ama) through customized Prakriti-based nutritional protocols delivered digitally.',
      icon: (
        <svg className="w-8 h-8 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0 1 9-9Z" />
          <path d="M8 12c1.5-2 4-2 5 0s3.5 2 5 0" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Metabolic Weight Management',
      tag: 'Cellular Vitality',
      description: 'Non-invasive, sustainable body recomposition addressing underlying thyroid, leptin resistance, and endocrine imbalances rather than crash starvation diets.',
      icon: (
        <svg className="w-8 h-8 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
        </svg>
      ),
    },
    {
      title: 'Neuro-Psychological Stress & Tele-Therapy',
      tag: 'Mental Health',
      description: 'Targeted herbal neuro-tonics (Medhya Rasayana), guided Pranayama breathwork, and deep restorative sleep architectures for chronic cortisol overload and anxiety.',
      icon: (
        <svg className="w-8 h-8 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
    {
      title: 'Authentic Botanical E-Prescriptions',
      tag: 'Pharmacognosy',
      description: 'Digital issuance of high-potency, heavy-metal tested botanical prescriptions, delivered to your door with precise dosage guidelines and lifestyle timing.',
      icon: (
        <svg className="w-8 h-8 text-[#B8892D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
  ];

  const protocolSteps = [
    {
      num: '01',
      title: 'Digital Biomarker & Prakriti Assessment',
      text: 'Submit your clinical medical reports, existing medications, lifestyle history, and constitutional questionnaire through our encrypted intake portal.',
    },
    {
      num: '02',
      title: 'Comprehensive 45-Min Video Consultation',
      text: 'A face-to-face virtual consultation analyzing your pulse symptoms, tongue diagnostic photos, chronobiology, and root-cause metabolic factors.',
    },
    {
      num: '03',
      title: 'Bespoke Therapeutic Roadmap',
      text: 'Receive a personalized botanical medicine protocol, daily biological routine (Dinacharya), and clinical meal chart crafted specifically for your biochemistry.',
    },
    {
      num: '04',
      title: 'Bi-Weekly Tele-Monitoring & Review',
      text: 'Consistent check-ins via private messaging and video reviews to titrate herbal dosages and track verifiable reductions in symptoms and lab markers.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8892D]/10 border border-[#B8892D]/30 text-[#B8892D] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#B8892D] animate-ping" />
                Virtual Clinical Consultations Worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A3418] leading-[1.15] tracking-tight">
                Ancient Ayurvedic Wisdom. <br />
                <span className="text-[#B8892D] italic font-normal">Modern Clinical Mastery.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#3E4B24]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Elite virtual Ayurvedic medicine reversing chronic lifestyle diseases—hypertension, type-2 diabetes, cardiovascular fatigue, and metabolic burnout—through gentle, non-invasive, evidence-based care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase bg-[#B8892D] text-white hover:bg-[#2A3418] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Book Virtual Consult</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase border-2 border-[#3E4B24] text-[#3E4B24] hover:bg-[#3E4B24] hover:text-[#FBF8F2] transition-all duration-300"
                >
                  Explore Specialties
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#B8892D]/20 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#2A3418]">15+</div>
                  <div className="text-xs text-[#6B7B4B] font-medium uppercase tracking-wider">Years Clinical Practice</div>
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#2A3418]">10k+</div>
                  <div className="text-xs text-[#6B7B4B] font-medium uppercase tracking-wider">Virtual Consults</div>
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#2A3418]">100%</div>
                  <div className="text-xs text-[#6B7B4B] font-medium uppercase tracking-wider">Non-Invasive Medicine</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#B8892D]/20 to-[#3E4B24]/10 blur-xl opacity-70" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#B8892D]/30 shadow-2xl bg-[#F5EFE3]">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80"
                    alt="Holistic Ayurvedic Wellness & Virtual Care"
                    className="w-full h-96 sm:h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A3418] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Testimonial Pill */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#B8892D]/30 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#B8892D]/20 flex items-center justify-center text-[#B8892D] font-bold">
                        ✦
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#2A3418] uppercase tracking-wider">
                          Certified Holistic Clinical Care
                        </div>
                        <div className="text-xs text-[#6B7B4B]">
                          Virtual video consultations across India & globally
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Philosophy Strip */}
      <section className="bg-[#F5EFE3] py-20 border-y border-[#B8892D]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
            Our Core Clinical Tenet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3418] leading-tight font-heading">
            Treating The Root Cause, Not Silencing The Symptoms
          </h2>
          <p className="text-base sm:text-lg text-[#3E4B24]/85 leading-relaxed max-w-3xl mx-auto">
            Traditional medicine often manages chronic symptoms with lifetime pharmaceuticals that carry side effects. At SwasthyaVeda, our clinical practice targets the metabolic origin—rebalancing biological fires (Agni), clearing micro-vascular obstructions, and restoring endocrine harmony so your body heals itself.
          </p>
        </div>
      </section>

      {/* Clinical Specialties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
            Specialized Care Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2A3418] font-heading">
            Clinical Focus Areas
          </h2>
          <p className="text-[#3E4B24]/80 text-sm sm:text-base">
            Every clinical protocol is tailored individually following a comprehensive video assessment and medical review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#B8892D]/20 shadow-sm hover:shadow-xl hover:border-[#B8892D]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-[#F5EFE3] group-hover:bg-[#B8892D]/15 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#F5EFE3] text-[#6B7B4B]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#2A3418] group-hover:text-[#B8892D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3E4B24]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-wider text-[#B8892D] group-hover:text-[#2A3418] flex items-center gap-1.5 transition-colors"
                >
                  Consult on this condition
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3E4B24] text-white hover:bg-[#B8892D] transition-colors shadow-md"
          >
            Explore Complete Clinical Service Directory
          </Link>
        </div>
      </section>

      {/* 4-Step Care Protocol */}
      <section className="bg-[#F5EFE3] py-20 border-y border-[#B8892D]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
              The Patient Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A3418] font-heading">
              How Virtual Healing Works
            </h2>
            <p className="text-[#3E4B24]/80 text-sm sm:text-base">
              A structured, empathetic medical consultation experience from the comfort and privacy of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protocolSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#B8892D]/20 shadow-sm relative space-y-4"
              >
                <div className="font-heading text-4xl font-bold text-[#B8892D]/40">
                  {step.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A3418]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3E4B24]/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#2A3418] to-[#3E4B24] text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl border border-[#B8892D]/30">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#D4A74B] font-semibold">
              Begin Your Reversal Journey Today
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Ready to reverse chronic illness with elite Ayurvedic medicine?
            </h2>
            <p className="text-base text-[#E8E1CE]/85 leading-relaxed font-light">
              Appointments are strictly one-on-one, confidential, and conducted through high-definition encrypted video. Reserve your slot with our chief clinical physician.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-white hover:text-[#2A3418] transition-all duration-300 shadow-xl"
              >
                Schedule Video Consultation
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Learn What To Expect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

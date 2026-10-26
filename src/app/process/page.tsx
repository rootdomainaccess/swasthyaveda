import Link from 'next/link';

export default function ProcessPage() {
  const steps = [
    {
      step: '01',
      title: 'Digital Intake & Lab History Submission',
      badge: 'Step 1: Preparation',
      description: 'Upon booking, you receive access to our secure medical portal. Complete a detailed health assessment covering your symptoms, diet, sleep cycles, and upload recent blood tests (HbA1c, CBC, Lipid Profile, Liver/Kidney Function).',
      tip: 'What to prepare: Past lab reports within the last 6 months and a current list of all allopathic or OTC medications.',
    },
    {
      step: '02',
      title: 'One-on-One Video Consultation (45–60 Mins)',
      badge: 'Step 2: Deep Assessment',
      description: 'Meet face-to-face with our Chief Physician via encrypted, private video conference. We conduct traditional Ayurvedic observation (Darshana, Prashna) alongside modern clinical symptom mapping to determine your root Dosha imbalance.',
      tip: 'Environment: Sit in a well-lit, quiet room so the doctor can observe subtle skin, lip, and tongue features.',
    },
    {
      step: '03',
      title: 'Personalized Clinical Roadmap & E-Prescription',
      badge: 'Step 3: Therapeutic Protocol',
      description: 'Within 24 hours of your consult, you receive your complete personalized Health Dossier. This includes customized herbal prescriptions, daily circadian schedule (Dinacharya), therapeutic dietary guidelines, and breathing exercises.',
      tip: 'Medicines: Certified heavy-metal tested botanical formulations can be ordered directly to your doorstep.',
    },
    {
      step: '04',
      title: 'Continuous Telehealth Monitoring & Biomarker Reviews',
      badge: 'Step 4: Sustained Recovery',
      description: 'Healing chronic lifestyle diseases takes consistent care. We track your daily biomarkers via secure WhatsApp/messaging and schedule bi-weekly video reviews to adjust botanical strengths as your lab markers normalize.',
      tip: 'Outcome: Measurable reductions in blood pressure, fasting glucose, systemic inflammation, and excess visceral weight.',
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Header Banner */}
      <section className="bg-[#F5EFE3] py-16 sm:py-20 border-b border-[#B8892D]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
            Patient Care Protocol
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2A3418]">
            How Virtual Consultations Work
          </h1>
          <p className="text-base sm:text-lg text-[#3E4B24]/85 leading-relaxed font-light">
            A seamless, medically rigorous tele-health journey engineered to give you the highest quality Ayurvedic healthcare wherever you live.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[#B8892D]/25 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-start relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F5EFE3] border border-[#B8892D]/40 flex items-center justify-center font-heading text-2xl font-bold text-[#B8892D] shrink-0">
                {item.step}
              </div>

              <div className="space-y-4 flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-[#B8892D]/10 text-[#B8892D] text-xs font-semibold uppercase tracking-wider">
                  {item.badge}
                </div>
                <h2 className="text-2xl font-bold font-heading text-[#2A3418]">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-[#3E4B24]/85 leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="p-4 rounded-xl bg-[#FBF8F2] border border-[#B8892D]/15 text-xs text-[#2A3418]/85">
                  <strong className="text-[#B8892D]">Clinical Tip:</strong> {item.tip}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <h3 className="font-heading text-2xl font-bold text-[#2A3418]">
            Begin Your Personalized Consultation Today
          </h3>
          <p className="text-sm text-[#3E4B24]/80 max-w-lg mx-auto">
            Our appointment calendar fills quickly due to the individualized nature of our medical care.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#2A3418] transition-colors shadow-lg"
            >
              Reserve Your Consultation Slot
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

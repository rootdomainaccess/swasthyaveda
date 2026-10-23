import Link from 'next/link';

export default function ServicesPage() {
  const clinicalServices = [
    {
      title: 'Virtual Cardiac & Hypertension Care',
      badge: 'Comprehensive Cardiovascular Protocol',
      duration: '45-Min Video + 6-Week Follow-up',
      description: 'Specialized non-invasive protocol addressing essential hypertension, arterial stiffness, cholesterol anomalies, and cardiovascular fatigue. We incorporate clinical herbs like Arjuna and Sarpagandha alongside autonomic nervous system regulation.',
      includes: [
        'Detailed review of ECG, lipid profile & cardiac history',
        'Herbal botanical e-prescription tailored to BP patterns',
        'Vascular breathing protocols (Pranayama) to downregulate sympathetic tone',
        'Dietary sodium & potassium balancing guidelines',
      ],
      idealFor: 'Individuals with Stage 1-2 hypertension, family history of heart disease, or stress-induced palpitations.',
    },
    {
      title: 'Type-2 Diabetes & Metabolic Syndrome Reversal',
      badge: 'Endocrine & Glycemic Reset',
      duration: '60-Min Intake + 12-Week Protocol',
      description: 'Root-cause reversal protocol targeted at clearing hepatic and pancreatic visceral fat, enhancing peripheral insulin sensitivity, and tapering down pharmaceutical dependence under clinical supervision.',
      includes: [
        'Complete analysis of HbA1c, fasting insulin & lipid biomarkers',
        'Personalized botanical regimen (Vijaysar, Jamun, Gurmar complexes)',
        'Circadian chronobiology meal timing to flatten glucose spikes',
        'Bi-weekly glucose monitoring check-in schedule',
      ],
      idealFor: 'Pre-diabetes, newly diagnosed or established Type-2 diabetes looking to halt disease progression.',
    },
    {
      title: 'Ayurvedic Gastroenterology & Gut Microbiome',
      badge: 'Agni Deepana & Ama Pachana',
      duration: '45-Min Video Consultation',
      description: 'Healing chronic digestive ailments including Irritable Bowel Syndrome (IBS), acid reflux, chronic constipation, SIBO, and leaky gut through classical bio-cleansing herbs and micro-flora restoration.',
      includes: [
        'Analysis of digestive capacity (Manda, Tikshna, or Vishama Agni)',
        'Targeted herbal digestive bitters and mucosal soothers',
        'Elimination of inflammatory and incompatible foods (Viruddha Ahara)',
        'Personalized gut repair nutritional roadmap',
      ],
      idealFor: 'Patients dealing with chronic bloating, food sensitivities, acid reflux, or sluggish metabolism.',
    },
    {
      title: 'Sustainable Metabolic Weight Recomposition',
      badge: 'Medo Dhatu Shodhana',
      duration: '45-Min Intake + 8-Week Coaching',
      description: 'A scientifically monitored Ayurvedic weight reduction protocol focusing on leptin resistance, thyroid optimization, and sluggish fat tissue metabolism without unsustainable extreme fasting.',
      includes: [
        'Endocrine and thyroid function medical review',
        'Customized lipolytic Ayurvedic herbs (Guggulu & Triphala formulations)',
        'Prakriti-specific metabolic boosting meal frameworks',
        'Weekly digital progress tracking and lifestyle adjustments',
      ],
      idealFor: 'Individuals struggling with stubborn abdominal adiposity, post-pregnancy weight retention, or metabolic plateaus.',
    },
    {
      title: 'Neuro-Psychological Stress, Insomnia & Burnout',
      badge: 'Manovaha Srotas & Sleep Architecture',
      duration: '45-Min Tele-Therapy',
      description: 'Clinical Ayurvedic management for chronic cortisol elevation, restless mind, insomnia, panic tendencies, and executive burnout. Restoring circadian rhythm and mental tranquility.',
      includes: [
        'Evaluation of nervous exhaustion and sleep cycles',
        'Adaptogenic neuro-nutritive botanical plan (Ashwagandha, Brahmi, Shankhpushpi)',
        'Evening Dinacharya relaxation routine and Marma self-care',
        'Guided somatic de-escalation practices',
      ],
      idealFor: 'Professionals experiencing chronic work stress, high anxiety, sleep latency, or adrenal fatigue.',
    },
    {
      title: 'Comprehensive Prakriti Diagnostic & Preventive Care',
      badge: 'Constitutional Blueprint',
      duration: '45-Min Video Assessment',
      description: 'An exhaustive constitutional evaluation (Vata, Pitta, Kapha) providing you with a lifelong operating manual for your body to prevent lifestyle illnesses before they ever manifest.',
      includes: [
        'Complete Prakriti (genetic constitution) & Vikriti (current imbalance) assessment',
        'Detailed 15-page personalized lifestyle & wellness dossier',
        'Preventative seasonal regimen (Ritucharya)',
        'Custom list of beneficial vs aggravating foods and activities',
      ],
      idealFor: 'Anyone seeking optimal preventive longevity and bespoke personalized healthcare guidance.',
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Header Banner */}
      <section className="bg-[#F5EFE3] py-16 sm:py-20 border-b border-[#B8892D]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#B8892D] font-semibold">
            Specialized Telehealth Practice
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2A3418]">
            Clinical Virtual Services
          </h1>
          <p className="text-base sm:text-lg text-[#3E4B24]/85 leading-relaxed font-light">
            Every clinical program is led directly by our Chief Ayurvedic Physician through high-definition encrypted video consultations, comprehensive lab test analyses, and precision herbal prescriptions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {clinicalServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[#B8892D]/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#B8892D]/15 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B8892D] bg-[#F5EFE3] px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                  <span className="text-xs font-medium text-[#6B7B4B]">
                    ⏱ {service.duration}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-[#2A3418]">
                  {service.title}
                </h2>

                <p className="text-sm text-[#3E4B24]/85 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2A3418]">
                    What Is Included:
                  </div>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#3E4B24]/80 flex items-start gap-2.5">
                        <span className="text-[#B8892D] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#B8892D]/15 text-xs text-[#2A3418]/80">
                  <strong className="text-[#B8892D]">Clinically Indicated For:</strong> {service.idealFor}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#2A3418] transition-colors shadow-md"
                >
                  Book Consultation For This Program
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A3418] text-[#E8E1CE] p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Not sure which clinical protocol fits your condition?
          </h3>
          <p className="text-sm text-[#C4BFA9] max-w-2xl mx-auto">
            Schedule an initial comprehensive diagnostic session. Our chief physician will review your case history and design a customized roadmap tailored precisely to your biomarkers.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#D4A74B] transition-colors shadow-lg"
            >
              Book General Clinical Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

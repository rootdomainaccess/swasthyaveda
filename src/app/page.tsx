import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 bg-clinical-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ancient Healing,<br/>
              <span className="text-golden-bronze">Modern Accessibility</span>
            </h1>
            <p className="text-lg sm:text-xl text-earthy-olive/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Elite Ayurvedic care delivered virtually. Reversing chronic lifestyle diseases with non-invasive, holistic medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="inline-block bg-golden-bronze text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-earthy-olive transition-colors duration-300">
                Book Online Consultation
              </Link>
              <Link href="/services" className="inline-block border-2 border-earthy-olive text-earthy-olive px-8 py-4 rounded-lg font-semibold text-lg hover:bg-earthy-olive hover:text-white transition-colors duration-300">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
              alt="Online healing session"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Empathetic Healing Through Ayurveda
          </h2>
          <p className="text-lg text-earthy-olive/80 max-w-3xl mx-auto leading-relaxed">
            At Swasthyaveda, we believe that true wellness is deeply personal. Our elite Ayurvedic doctor specializes in non-invasive, holistic approaches to reversing chronic lifestyle diseases. Through virtual consultations, we bring centuries of healing wisdom to your fingertips, ensuring you receive the care, empathy, and expertise you deserve — all from the comfort of your home.
          </p>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-16 bg-clinical-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Virtual Care Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Virtual Cardiac Care</h3>
              <p className="text-earthy-olive/70 text-sm mb-4">
                Online guidance for heart health, hypertension management, and non-invasive holistic care.
              </p>
              <Link href="/services" className="text-golden-bronze hover:underline">Learn More →</Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-xl font-bold mb-3">Diabetes Reversal</h3>
              <p className="text-earthy-olive/70 text-sm mb-4">
                One-on-one virtual consultations for blood sugar management through diet and Ayurveda.
              </p>
              <Link href="/services" className="text-golden-bronze hover:underline">Learn More →</Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-xl font-bold mb-3">Diet & Nutrition</h3>
              <p className="text-earthy-olive/70 text-sm mb-4">
                Personalized meal plans and lifestyle modifications delivered digitally.
              </p>
              <Link href="/services" className="text-golden-bronze hover:underline">Learn More →</Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-earthy-olive text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-golden-bronze transition-colors duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
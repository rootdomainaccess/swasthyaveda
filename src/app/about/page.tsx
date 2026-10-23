import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 bg-clinical-cream text-earthy-olive">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Swasthyaveda</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Image
            src="https://images.unsplash.com/photo-1597223211105-8f407271e6dc?auto=format&fit=crop&w=1000&q=80"
            alt="Ayurvedic practitioner"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto"
          />
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              At Swasthyaveda, the focus is on compassionate, science‑backed Ayurveda and the power of gentle, holistic change. The guiding principle is that true health arises from the harmony of body, mind, and environment—delivered without invasive procedures, entirely through virtual coaching and education.
            </p>
            <p className="text-lg leading-relaxed">
              The practice thrives on the belief that lifestyle changes—diet, movement, breathing, and mindset—can reverse chronic conditions such as hypertension, diabetes, obesity, and stress. Each interaction is tailored to individual needs, drawing on over a century of Ayurvedic knowledge filtered through modern research, while ensuring the highest standards of empathy and patient‑centric care.
            </p>
            <p className="text-lg leading-relaxed">The journey starts with a complete virtual assessment, followed by personalized guidance that fits seamlessly into your daily life. Through regular video consultations, secure messaging, and curated resources, patients gain a roadmap to sustainable healing and renewed vitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
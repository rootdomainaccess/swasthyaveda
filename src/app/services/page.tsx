import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Virtual Cardiac Care Counseling',
    icon: 'heart-pulse',
    description: 'Online guidance for heart health, hypertension management, and non-invasive holistic care.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca9f6956f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Digital Diabetes Reversal Programs',
    icon: 'apple-alt',
    description: 'One‑on‑one virtual consultations for blood sugar management through diet and Ayurveda.',
    image: 'https://images.unsplash.com/photo-1583081758603-7fe276ef8045?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Online Ayurvedic Diet & Nutrition Planning',
    icon: 'nutrition',
    description: 'Personalized meal plans and lifestyle modifications delivered digitally.',
    image: 'https://images.unsplash.com/photo-1516684661377-99cb21ca278f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Virtual Weight Management & Obesity Care',
    icon: 'weight-hanging',
    description: 'Sustainable, holistic weight‑loss coaching and tracking.',
    image: 'https://images.unsplash.com/photo-1535017664230-523c6565055b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Stress Management & Tele‑therapy',
    icon: 'medal-hanging',
    description: 'Yoga, meditation, and lifestyle correction counseling via video call.',
    image: 'https://images.unsplash.com/photo-1501498664008-6577218f9212?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'E‑Prescriptions for Ayurvedic Botanicals',
    icon: 'leaf',
    description: 'Recommending deeply researched herbs and natural supplements following an online diagnosis.',
    image: 'https://images.unsplash.com/photo-1595935327168-b8ad2ff6e1b2?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <section className="py-16 bg-clinical-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Online Care Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image src={s.image} alt={s.title} fill className="object-cover"/>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/services" className="text-golden-bronze text-4xl">🔊</Link>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold mb-2">{s.title}</h2>
                <p className="text-sm text-earthy-olive/70 flex-grow">{s.description}</p>
                <Link href="/services" className="mt-4 text-golden-bronze hover:underline">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

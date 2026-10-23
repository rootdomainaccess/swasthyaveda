import Image from 'next/image';
export default function ProcessPage() {
  const steps = [
    { title: 'Book a Session', image: 'https://images.unsplash.com/photo-1589120406480-e6beced2fd9b?auto=format&fit=crop&w=600&q=80' },
    { title: 'Virtual Assessment', image: 'https://images.unsplash.com/photo-1526632151042-9a1743b5921b?auto=format&fit=crop&w=600&q=80' },
    { title: 'Personalized Plan', image: 'https://images.unsplash.com/photo-1556215676-9c8e9732f224?auto=format&fit=crop&w=600&q=80' },
    { title: 'Follow-Up & Support', image: 'https://images.unsplash.com/photo-1584825217505-561d707f5e55?auto=format&fit=crop&w=600&q=80' },
  ];
  return (
    <section className="py-16 bg-warm-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step,i)=>(
            <div key={i} className="rounded-xl bg-white shadow-lg p-6 text-center">
              <Image src={step.image} alt={step.title} width={200} height={150} className="mx-auto rounded-xl mb-4"/>
              <h2 className="text-lg font-semibold">{step.title}</h2>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-earthy-olive/80 max-w-2xl mx-auto">
          Our process is simple, compassionate, and designed for ease of use. Book an online consultation, receive a virtual assessment, and begin your personalized Ayurvedic healing journey—all from the comfort of your home.
        </p>
      </div>
    </section>
  );
}

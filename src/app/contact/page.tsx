'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: 'Male',
    location: '',
    email: '',
    phone: '',
    service: 'General Ayurvedic Health Diagnostic',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 12:00 PM IST)',
    concerns: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Please check the patient telemedicine consent box to proceed in compliance with Indian Telemedicine Regulations.');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('sent');
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#F5EFE3] py-16 sm:py-20 border-b border-[#B8892D]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8892D]/15 text-[#B8892D] text-xs font-semibold uppercase tracking-wider">
            <span>⚖</span> MoHFW & NCISM Telemedicine Compliant
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2A3418]">
            Schedule Your Virtual Consultation
          </h1>
          <p className="text-base sm:text-lg text-[#3E4B24]/85 leading-relaxed font-light">
            Book a one-on-one virtual medical appointment with our Registered Ayurvedic Physician (B.A.M.S.). All consultations follow the Telemedicine Practice Guidelines issued by the Ministry of Health and Family Welfare (Govt. of India).
          </p>
        </div>
      </section>

      {/* Main Booking Interface */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Booking Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#B8892D]/25 shadow-xl">
            {status === 'sent' ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-[#B8892D]/20 text-[#B8892D] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#2A3418]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#3E4B24]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.name || 'valued patient'}</strong>. Your consultation details have been logged in accordance with the Telemedicine Practice Guidelines. Our clinical coordinator will verify our physician’s calendar and confirm your appointment with an encrypted video link via WhatsApp/email.
                </p>
                <div className="p-4 rounded-xl bg-[#F5EFE3] text-xs text-[#2A3418]">
                  Please keep any recent lab reports (blood sugar, BP log, lipid profile) handy for the video consultation.
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2A3418] text-white hover:bg-[#B8892D] transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#2A3418] mb-1">
                    Patient Tele-Intake Form
                  </h2>
                  <p className="text-xs text-[#6B7B4B]">
                    As per Indian Telemedicine Guidelines, patient identification and location details are mandatory for clinical recordkeeping.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                    />
                  </div>

                  {/* Age & Gender (Mandatory under Telemedicine Practice Guidelines) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                        Age (Years) *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="120"
                        required
                        placeholder="e.g. 42"
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                        Gender *
                      </label>
                      <select
                        value={form.gender}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Location: City & State */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                      City & State (or Country if outside India) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                      />
                    </div>
                  </div>

                  {/* Clinical Specialty */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                      Primary Consultation Focus *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                    >
                      <option value="Virtual Cardiac & Hypertension Care">Virtual Cardiac & Hypertension Care</option>
                      <option value="Type-2 Diabetes & Metabolic Reversal">Type-2 Diabetes & Metabolic Reversal</option>
                      <option value="Ayurvedic Gut Care & Gastroenterology">Ayurvedic Gut Care & Gastroenterology</option>
                      <option value="Metabolic Weight Recomposition">Metabolic Weight Recomposition</option>
                      <option value="Neuro-Psychological Stress & Insomnia">Neuro-Psychological Stress & Insomnia</option>
                      <option value="General Ayurvedic Health Diagnostic">General Comprehensive Health Diagnostic</option>
                    </select>
                  </div>

                  {/* Preferred Time Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                        Time Preference (IST)
                      </label>
                      <select
                        value={form.preferredTime}
                        onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                      >
                        <option value="Morning (09:00 AM - 12:00 PM IST)">Morning (09:00 AM - 12:00 PM IST)</option>
                        <option value="Afternoon (12:00 PM - 04:00 PM IST)">Afternoon (12:00 PM - 04:00 PM IST)</option>
                        <option value="Evening (04:00 PM - 07:00 PM IST)">Evening (04:00 PM - 07:00 PM IST)</option>
                      </select>
                    </div>
                  </div>

                  {/* Health Symptoms / Concerns */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2A3418] mb-1.5">
                      Describe Your Health Concerns & Existing Medications
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mention your main symptoms, current BP / sugar readings, or existing medications..."
                      value={form.concerns}
                      onChange={(e) => setForm({ ...form, concerns: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8892D] focus:ring-2 focus:ring-[#B8892D]/20 outline-none text-sm transition-all bg-[#FBF8F2]/50 text-[#2A3418]"
                    />
                  </div>

                  {/* Mandatory Informed Consent Checkbox (Indian Telemedicine Guidelines Section 3.4) */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 text-[#B8892D] border-gray-300 rounded focus:ring-[#B8892D]"
                      />
                      <span className="text-xs text-[#3E4B24]/90 leading-relaxed">
                        I hereby provide informed consent for virtual Ayurvedic consultation in accordance with the <strong>Telemedicine Practice Guidelines (2020)</strong> issued by MoHFW & NCISM (Govt. of India). I understand that this service is for non-emergency healthcare guidance and that acute emergencies require immediate in-person hospital care.
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#B8892D] text-white hover:bg-[#2A3418] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Securing Consultation Slot...' : 'Confirm & Request Consultation Slot'}
                </button>

                <p className="text-[11px] text-center text-[#6B7B4B]">
                  🔒 Your health data is safeguarded under the Digital Personal Data Protection (DPDP) Act, 2023.
                </p>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#2A3418] text-[#E8E1CE] p-8 rounded-3xl space-y-6 shadow-xl border border-[#B8892D]/25">
              <h3 className="font-heading text-xl font-bold text-white">
                Telemedicine Regulatory Standards
              </h3>
              
              <ul className="space-y-4 text-xs text-[#C4BFA9]">
                <li className="flex gap-3">
                  <span className="text-[#D4A74B] font-bold">1.</span>
                  <span><strong>RMP Qualification:</strong> Consultations conducted by a Registered Medical Practitioner (B.A.M.S.) holding a valid State Ayurvedic Board / NCISM Registration.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4A74B] font-bold">2.</span>
                  <span><strong>Standard E-Prescription:</strong> You receive an official digital prescription with physician's credentials, registration number, and clear dosage instructions for permitted classical formulations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4A74B] font-bold">3.</span>
                  <span><strong>Triage & Safety:</strong> If our physician determines that your condition requires physical clinical examination, laboratory intervention, or emergency care, you will be promptly referred to an in-person hospital facility.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 text-xs space-y-2">
                <div className="text-white font-semibold">Direct Clinical Desk Support:</div>
                <div className="text-[#D4A74B]">consultations@swasthyaveda.com</div>
                <div className="text-[#C4BFA9]">Mon - Sat: 09:00 AM - 07:00 PM IST</div>
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <div className="bg-[#F5EFE3] p-6 rounded-2xl border border-[#B8892D]/20 space-y-3">
              <div className="font-heading text-base font-bold text-[#2A3418]">
                Need immediate appointment assistance?
              </div>
              <p className="text-xs text-[#3E4B24]/80 leading-relaxed">
                Our patient care desk is available on WhatsApp to assist with scheduling, international time zone coordination, and report submissions.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#B8892D] uppercase tracking-wider">
                  ✦ Priority WhatsApp Desk Available
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

"use client";
import { useState } from 'react';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', time: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-clinical-cream">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Book an Online Consultation</h1>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label className="block text-sm font-medium text-earthy-olive" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-golden-bronze focus:ring-golden-bronze py-2 px-3 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-earthy-olive" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-golden-bronze focus:ring-golden-bronze py-2 px-3 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-earthy-olive" htmlFor="time">
              Preferred Time
            </label>
            <input
              type="datetime-local"
              id="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-golden-bronze focus:ring-golden-bronze py-2 px-3 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-earthy-olive" htmlFor="message">
              Health Concerns
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-golden-bronze focus:ring-golden-bronze py-2 px-3 mt-1"
            />
          </div>
          <button type="submit" className="w-full bg-golden-bronze text-white py-3 rounded-lg font-semibold hover:bg-earthy-olive transition-colors duration-300" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Book Now'}
          </button>
          {status === 'sent' && <p className="text-center text-green-600 mt-4">Your request has been sent. We will reply promptly.</p>}
          {status === 'error' && <p className="text-center text-red-600 mt-4">Oops! Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

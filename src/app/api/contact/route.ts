import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, preferredTime, concerns } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    console.log('New SwasthyaVeda Consultation Request:', {
      name,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      concerns,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: 'Consultation request received successfully.',
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error processing consultation.' }, { status: 500 });
  }
}

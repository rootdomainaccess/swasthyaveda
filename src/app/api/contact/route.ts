import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, time, message } = body;

    if (!name || !email || !time || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // In production, send an email or persist to database.
    // For now, log and return success.
    console.log('New consultation request:', { name, email, time, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
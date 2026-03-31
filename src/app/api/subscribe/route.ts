import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // If Google Script URL is configured, forward to Google Sheets
    if (GOOGLE_SCRIPT_URL) {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });

      if (!res.ok) {
        console.error('Google Script error:', await res.text());
        return NextResponse.json(
          { error: 'Subscription service temporarily unavailable.' },
          { status: 502 }
        );
      }
    } else {
      // Fallback: just log it (will appear in Vercel function logs)
      console.log(`[SUBSCRIBE] ${email} at ${new Date().toISOString()}`);
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

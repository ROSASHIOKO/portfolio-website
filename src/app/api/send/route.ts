import { NextResponse } from 'next/server';
import { sendMail } from '@/utils/mail';

export async function POST(req: Request) {
  const body = await req.json();
  const { to, subject, text } = body;

  try {
    await sendMail(to, subject, text);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

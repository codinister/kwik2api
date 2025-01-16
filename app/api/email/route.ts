import Emails from '@/components/Emails';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const {
    comp_name,
    user_name,
    user_phone,
    user_email,
    url,
    type,
    comp_location,
  } = await req.json();

  const sendemail = new Resend(process.env.RESEND_API_KEY);

  const mail = await sendemail.emails.send({
    from: 'sales@kwik2pos.com',
    to: 'codinister@gmail.com',
    subject: 'Text email',
    react: Emails({
      comp_name,
      user_name,
      user_phone,
      user_email,
      url,
      type,
      comp_location,
    }),
  });

  if (mail) {
    return NextResponse.json({ success: true, message: 'Email sent' });
  } else {
    return NextResponse.json({ success: true, message: 'An error occured' });
  }
}

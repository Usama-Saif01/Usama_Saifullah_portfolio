import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, botcheck } = await request.json();

    // 🛡️ CYBERSECURITY HONEYPOT: If a bot fills the hidden field, return success but drop the email.
    if (botcheck) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Configure the SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct the email
    const mailOptions = {
      from: process.env.EMAIL_USER,       // Authenticated sender
      to: process.env.EMAIL_USER,         // Send it to yourself
      replyTo: email,                     // Allows you to hit "Reply" and email the user directly
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
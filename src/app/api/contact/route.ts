import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Admin email
    await resend.emails.send({
      from: "Lucksan Design Studio <onboarding@resend.dev>", // or your domain
      to: process.env.ADMIN_EMAIL!,
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    // Auto-reply
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting us. We'll reply soon.</p>
      `,
    });

    return NextResponse.json({ message: "Message sent!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

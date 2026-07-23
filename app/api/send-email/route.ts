import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { validatePuzzleAnswer } from '@/lib/puzzle'
import { intarvasEmailTemplate } from '@/lib/email-template'
import { appendNewContactToSheet } from '@/lib/googleSheet'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 2525,
  secure: false, // TLS via STARTTLS
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      fullName,
      email,
      phone,
      subject,
      service,
      industry,
      message,
      puzzleQuestion,
      puzzleAnswer,
    } = body

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Full name, email and message are required.' },
        { status: 400 }
      )
    }

    if (!puzzleQuestion || puzzleAnswer === undefined) {
      return NextResponse.json(
        { success: false, message: 'Security question is required.' },
        { status: 400 }
      )
    }

    const isPuzzleValid = validatePuzzleAnswer(puzzleQuestion, puzzleAnswer)
    if (!isPuzzleValid) {
      return NextResponse.json(
        { success: false, message: 'Security answer was incorrect. Please try again.' },
        { status: 400 }
      )
    }

    const info = await transporter.sendMail({
      from: `"IntarvAS Contact Form" <${process.env.MAIL_FROM}>`,
      to: `${process.env.MAIL_TO}`,
      replyTo: email,
      subject: subject
        ? `[IntarvAS Website] ${subject}`
        : `[IntarvAS Website] New message from ${fullName}`,
      html: intarvasEmailTemplate({
        fullName,
        email,
        phone,
        subject,
        industry,
        service,
        message,
      }),
    })

    console.log('Email sent:', info.messageId)
    await appendNewContactToSheet({fullname: fullName, email, phone, subject, service, message, industry})

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId,
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Server error:', message)
    return NextResponse.json(
      { success: false, message: 'Internal server error: ' + message },
      { status: 500 }
    )
  }
}
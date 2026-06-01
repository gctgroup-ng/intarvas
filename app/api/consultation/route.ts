import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { intarvasConsultationTemplate } from '@/lib/consultation-template'

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 2525,
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, phone, email, companyId, companyName, employees, reasons, comments } = body

        if (!name || !phone || !email || !employees) {
        return NextResponse.json(
            { success: false, message: 'Name, phone, email, and employee count are required.' },
            { status: 400 }
        )
        }

        const emailRegex = /\S+@\S+\.\S+/
        if (!emailRegex.test(email)) {
        return NextResponse.json(
            { success: false, message: 'Invalid email address.' },
            { status: 400 }
        )
        }

        const info = await transporter.sendMail({
        from: `"IntarvAS Consultation Form" <${process.env.MAIL_FROM}>`,
        to: `${process.env.MAIL_TO}`,
        replyTo: email,
        subject: `[IntarvAS Website] New Consultation Request from ${name}`,
        html: intarvasConsultationTemplate({
            name,
            email,
            phone,
            companyName,
            companyId,
            employees,
            reasons,
            comments,
        }),
        })

        console.log('Consultation email sent:', info.messageId)

        return NextResponse.json({
        success: true,
        message: 'Consultation request sent successfully!',
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
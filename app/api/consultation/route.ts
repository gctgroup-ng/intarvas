import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Tadpj79T_27eSiFhauRax21Qpv3wVmTgL");

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, phone, email, companyId, companyName, employees, reasons, comments,} = body;

        if (!name || !phone || !email || !employees) {
            return NextResponse.json(
                { success: false, message: "Name, phone, email, and employee count are required." },
                { status: 400 }
            );
        }

        const emailRegex = /\S+@\S+\.\S+/;  
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email address." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "support@intarvas.com",
            replyTo: email,
            subject: `New Consultation Request from ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; max-width: 600px;">
                <h2 style="color: #4a2d7f;">New Consultation Request</h2>

                <h3 style="margin-bottom: 4px; color: #333;">Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;" />

                <h3 style="margin-bottom: 4px; color: #333;">Company Details</h3>
                ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ""}
                ${companyId ? `<p><strong>Website:</strong> ${companyId}</p>` : ""}
                <p><strong>Employees using Cloud PBX:</strong> ${employees}</p>

                ${
                    reasons && reasons.length > 0
                    ? `
                <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;" />
                <h3 style="margin-bottom: 4px; color: #333;">Reasons for Cloud PBX</h3>
                <ul style="padding-left: 20px;">
                    ${reasons.map((r: string) => `<li>${r}</li>`).join("")}
                </ul>`
                    : ""
                }

                ${
                    comments
                    ? `
                <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;" />
                <h3 style="margin-bottom: 4px; color: #333;">Additional Comments</h3>
                <p>${comments.replaceAll("\n", "<br>")}</p>`
                    : ""
                }

                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
                <p style="color: #666; font-size: 12px;">
                    This request was submitted via the IntarvAS consultation form.<br />
                    Reply directly to this email to respond to ${name}.
                </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Consultation request sent successfully!",
            data,
        });
    } catch (err: any) {
        console.error("Server error:", err);
        return NextResponse.json(
            { success: false, message: err.message || "Internal server error" },
            { status: 500 }
        );
    }
}
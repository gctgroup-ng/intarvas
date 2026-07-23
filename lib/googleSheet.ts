import { google } from "googleapis";

export async function appendNewContactToSheet(formData: { fullname: string; email: string; phone: string; service: string[]; subject: string; message: string, industry: string[]; }) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    //convert formdata.service from array to string
    const services = formData.service.join(", ");
    const industry = formData.industry.join(", ");
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.SHEET_ID

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:J",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                ["New", "",formData.fullname, formData.email, formData.phone, services, formData.subject, formData.message, new Date().toLocaleString(), industry, ],
            ],
        },
    });

    console.log("Row added successfully");
}
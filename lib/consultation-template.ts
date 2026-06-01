export interface ConsultationEmailProps {
  name: string
  email: string
  phone: string
  companyName?: string
  companyId?: string
  employees: string | number
  reasons?: string[]
  comments?: string
}

export function intarvasConsultationTemplate({
  name,
  email,
  phone,
  companyName,
  companyId,
  employees,
  reasons,
  comments,
}: ConsultationEmailProps): string {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const reasonsList =
    reasons && reasons.length > 0
      ? reasons
          .map(
            (r) =>
              `<span style="display:inline-block;background:#D0D0EB;color:#0A108F;font-size:12px;font-weight:600;padding:4px 12px;border-radius:20px;margin:2px 3px;">${r}</span>`
          )
          .join('')
      : null

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Consultation Request – IntarvAS</title>
</head>
<body style="margin:0;padding:0;background-color:#eef0f8;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0A108F;border-radius:16px 16px 0 0;padding:44px 48px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:#D0D0EB;">
                IntarvAS
              </p>
              <h1 style="margin:0 0 10px;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;">
                New Consultation Request
              </h1>
              <p style="margin:0;font-size:13px;color:rgba(208,208,235,0.75);">${date}</p>

              <!-- Decorative dots -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:6px;height:6px;border-radius:50%;background:rgba(208,208,235,0.3);"></td>
                        <td style="width:8px;"></td>
                        <td style="width:10px;height:10px;border-radius:50%;background:#D0D0EB;"></td>
                        <td style="width:8px;"></td>
                        <td style="width:6px;height:6px;border-radius:50%;background:rgba(208,208,235,0.3);"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Accent strip -->
          <tr>
            <td style="height:5px;background:linear-gradient(90deg,#0A108F 0%,#D0D0EB 50%,#0A108F 100%);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 48px;">

              <!-- Avatar + name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="
                          width:56px;height:56px;
                          border-radius:50%;
                          background:#0A108F;
                          text-align:center;
                          vertical-align:middle;
                          font-size:20px;font-weight:700;color:#ffffff;
                          line-height:56px;
                        ">${initials}</td>
                        <td style="padding-left:16px;vertical-align:middle;">
                          <p style="margin:0;font-size:19px;font-weight:700;color:#0A108F;">${name}</p>
                          <p style="margin:3px 0 0;font-size:13px;color:#888;">Submitted a consultation request</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Gradient divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="height:2px;background:linear-gradient(90deg,#0A108F,#D0D0EB,#eef0f8);border-radius:2px;"></td>
                </tr>
              </table>

              <!-- Contact Details Section Label -->
              ${sectionLabel('Contact Details')}

              ${field('Email Address', `<a href="mailto:${email}" style="color:#0A108F;text-decoration:none;font-weight:600;">${email}</a>`)}
              ${field('Phone Number', phone)}

              <!-- Company Details Section Label -->
              ${sectionLabel('Company Details')}

              ${companyName ? field('Company Name', companyName) : ''}
              ${companyId ? field('Website / Company ID', companyId) : ''}
              ${field('Employees Using Cloud PBX', String(employees))}

              <!-- Reasons (conditional) -->
              ${
                reasonsList
                  ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;">
                      Reasons for Cloud PBX
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="
                    background:#f5f5fb;
                    border-radius:8px;
                    border-left:3px solid #0A108F;
                    padding:14px 16px;
                  ">
                    ${reasonsList}
                  </td>
                </tr>
              </table>`
                  : ''
              }

              <!-- Comments (conditional) -->
              ${
                comments
                  ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;">
                      Additional Comments
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="
                    background:#f5f5fb;
                    border-left:4px solid #D0D0EB;
                    border-radius:0 8px 8px 0;
                    padding:18px 20px;
                  ">
                    <p style="margin:0;font-size:15px;color:#333;line-height:1.8">${comments.replaceAll('\n', '<br>')}</p>
                  </td>
                </tr>
              </table>`
                  : ''
              }

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              background:#0A108F;
              border-radius:0 0 16px 16px;
              padding:28px 48px;
              text-align:center;
            ">
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:40px;height:1px;background:rgba(208,208,235,0.3);"></td>
                        <td style="width:8px;"></td>
                        <td style="width:8px;height:8px;border-radius:50%;background:#D0D0EB;"></td>
                        <td style="width:8px;"></td>
                        <td style="width:40px;height:1px;background:rgba(208,208,235,0.3);"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#D0D0EB;letter-spacing:2px;text-transform:uppercase;">
                IntarvAS
              </p>
              <p style="margin:0;font-size:12px;color:rgba(208,208,235,0.55);line-height:1.7;">
                This email was sent automatically from the IntarvAS consultation form.<br/>
                © ${new Date().getFullYear()} IntarvAS. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`
}

function sectionLabel(label: string): string {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;margin-top:8px;">
    <tr>
      <td>
        <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#0A108F;">
          ${label}
        </p>
      </td>
    </tr>
    <tr>
      <td style="height:2px;background:linear-gradient(90deg,#0A108F,#D0D0EB,#eef0f8);border-radius:2px;margin-top:6px;"></td>
    </tr>
  </table>
  `
}

function field(label: string, value: string): string {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    <tr>
      <td style="padding-bottom:6px;">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;">
          ${label}
        </p>
      </td>
    </tr>
    <tr>
      <td style="
        background:#f5f5fb;
        border-radius:8px;
        border-left:3px solid #0A108F;
        padding:12px 16px;
        font-size:15px;
        color:#1a1a2e;
        font-weight:500;
      ">
        ${value}
      </td>
    </tr>
  </table>
  `
}
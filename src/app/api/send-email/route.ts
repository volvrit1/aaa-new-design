import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface EmailRequestBody {
  name: string;
  phone: string;
  email: string;
  service?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  const user = process.env.NEXT_PUBLIC_GMAIL_USER;
  const pass = process.env.NEXT_PUBLIC_GMAIL_PASS;

  try {
    const body: EmailRequestBody = await req.json();
    const { email, phone, name, service, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      secure: true,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // User Confirmation Email
    const userMailOptions = {
      from: user,
      to: email,
      subject: `Above All Agency | Your ${service} Service Request Has Been Received`,
      text: `Dear ${name},
      
Thank you for reaching out to Above All Agency. We have successfully received your request for ${
        service || "our services"
      }, and our team is reviewing your inquiry.

📌 **Service Requested:** ${service || "Not Specified"}
📌 **Your Contact Details:**  
   - **Email:** ${email}  
   - **Phone:** ${phone}  

🔹 **Next Steps:**  
One of our representatives will get in touch with you shortly to discuss further details. If you need urgent assistance, feel free to reply to this email.

We appreciate your interest in our services and look forward to assisting you.

Best regards,  
**Above All Agency Team**`,
    };

    // Admin Notification Email
    const adminMailOptions = {
      from: user,
      to: user,
      subject: `📩 [Above All Agency] New Inquiry Received | ${name} - ${
        service || "General Inquiry"
      }`,
      text: `Hello Team,

A new service inquiry has been received. Please review the details below:

📌 **Client Details:**  
   - **Name:** ${name}  
   - **Email:** ${email}  
   - **Phone:** ${phone}  

📌 **Requested Service:** ${service || "Not Specified"}  

📌 **Client Message:**  
"${message || "No additional message provided."}"

🚀 **Action Required:**  
Please follow up with the client as soon as possible to discuss their request.

Best regards,  
**Above All Agency Inquiry System**`,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `Error sending email: ${error.message}` },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      projectDetails,
      journey,
      product,
      features,
      timeline,
      quality,
      support,
      typedIdea
    } = await req.json();

    // 1. Validation
    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First Name and Email Address are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "hello@thumbstack.com";
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    const isEstimatorSubmission = !!(journey || product || (features && features.length > 0) || timeline || quality || support || typedIdea);

    // 2. Check if Resend API Key is provided
    if (!resendApiKey) {
      console.warn("WARNING: RESEND_API_KEY not set up in .env.local. Email simulation active.");
      console.log("Mock lead notification received:", {
        firstName,
        lastName,
        email,
        phone,
        projectDetails,
        estimator: isEstimatorSubmission ? {
          journey,
          product,
          features,
          timeline,
          quality,
          support,
          typedIdea
        } : null
      });

      return NextResponse.json({
        success: true,
        message: "Message received (Development Mode: Resend simulation active).",
      });
    }

    // 3. Initialize Resend
    const resend = new Resend(resendApiKey);

    // 4. Construct Stack Estimation HTML details if present
    let estimatorHtml = "";
    if (isEstimatorSubmission) {
      estimatorHtml = `
        <div style="margin-top: 25px; padding: 20px; border: 1px solid #4FC9AD; border-radius: 8px; background-color: #fcfefe;">
          <h3 style="color: #39B396; margin-top: 0; border-bottom: 1px solid #e0f5f0; padding-bottom: 8px; font-size: 16px;">Selected Stack Estimate Details:</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="background-color: #f8fbfb;">
              <td style="padding: 8px; font-weight: bold; width: 140px; border-bottom: 1px solid #eee;">Journey Type:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-transform: capitalize;">${journey || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Product Base:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-transform: capitalize;">${product || "N/A"}</td>
            </tr>
            <tr style="background-color: #f8fbfb;">
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Selected Features:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${features && features.length > 0 ? features.map((f: string) => f.replace("-", " ")).join(", ") : "None selected"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Timeline:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${timeline || "N/A"}</td>
            </tr>
            <tr style="background-color: #f8fbfb;">
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Quality Level:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${quality || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Support Strategy:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${support || "N/A"}</td>
            </tr>
            ${typedIdea ? `
            <tr style="background-color: #fdfaf6;">
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Custom Typed Idea:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-style: italic; color: #555;">"${typedIdea}"</td>
            </tr>` : ""}
          </table>
        </div>
      `;
    }

    // 5. Team Email (Lead Alert)
    const teamSubject = isEstimatorSubmission 
      ? `⚡ New Build-Your-Stack Lead: ${firstName} ${lastName || ""}`
      : `🔥 New Contact Form Submission: ${firstName} ${lastName || ""}`;

    const teamHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3145DD; padding-bottom: 15px;">
          <h1 style="color: #3145DD; margin: 0; font-size: 24px;">New Thumbstack Inquiry</h1>
          <p style="color: #666; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase;">Lead Notification System</p>
        </div>
        <div style="line-height: 1.6; color: #333;">
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName || "N/A"}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #3145DD; text-decoration: none;">${email}</a></p>
          <p><strong>Phone Number:</strong> ${phone || "N/A"}</p>
          
          ${estimatorHtml}

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-weight: bold; margin-bottom: 10px; color: #3145DD;">Project Details:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3145DD; border-radius: 4px; font-style: italic; white-space: pre-wrap;">
              ${projectDetails || "No project details provided."}
            </div>
          </div>
        </div>
      </div>
    `;

    // 6. Client Auto-Responder Template Email
    const clientHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); color: #333;">
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
          <h1 style="color: #3145DD; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.02em;">Thumbstack</h1>
          <p style="color: #777; margin: 5px 0 0 0; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">Digital Design & Development</p>
        </div>
        
        <div style="line-height: 1.7; font-size: 15px;">
          <p>Hi ${firstName},</p>
          
          <p>Thank you for reaching out to us! We have received your project details and our team is already reviewing your inquiry.</p>
          
          <p>Here at Thumbstack, we believe in building the remarkable, not the routine. We are excited about the possibility of collaborating to bring your digital vision to life.</p>
          
          <div style="background-color: #f6f8ff; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #3145DD; margin-top: 0; font-size: 16px;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px; color: #444;">
              <li style="margin-bottom: 10px;">A member of our product and strategy team will review your goals.</li>
              <li>We'll reach back out to you within 24-48 business hours to discuss ideas, clear up details, and map a clear path forward.</li>
            </ul>
          </div>
          
          <p>If you have any extra files, mockups, or details to share in the meantime, feel free to reply directly to this email!</p>
          
          <p style="margin-top: 35px; border-top: 1px solid #eee; padding-top: 20px;">
            Warm regards,<br />
            <strong>The Thumbstack Team</strong>
          </p>
        </div>
        
        <div style="margin-top: 40px; padding-top: 20px; font-size: 11px; color: #999; text-align: center; border-top: 1px solid #eee; line-height: 1.5;">
          © 2026 Thumbstack. All rights reserved. <br />
          Building remarkable digital products & platforms. <br />
          <a href="https://thumbstack.com" style="color: #3145DD; text-decoration: none;">thumbstack.com</a>
        </div>
      </div>
    `;

    // 7. Send both emails in parallel using Resend
    // Note: sandbox accounts on Resend can only send emails to the onboarding email address.
    const promises = [
      resend.emails.send({
        from: `Thumbstack Leads <${senderEmail}>`,
        to: receiverEmail,
        replyTo: email,
        subject: teamSubject,
        html: teamHtml,
      })
    ];

    // If Resend API Key is a live production key (non-sandbox / has verified domain), send client auto-response
    // (If sandbox, trying to send to the client's email will return a 403, so we check process.env.RESEND_IS_SANDBOX)
    if (process.env.RESEND_IS_SANDBOX !== "true") {
      promises.push(
        resend.emails.send({
          from: `Thumbstack Team <${senderEmail}>`,
          to: email,
          subject: "We've received your request! | Thumbstack",
          html: clientHtml,
        })
      );
    }

    await Promise.all(promises);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully using Resend.",
    });
  } catch (error: any) {
    console.error("Error sending contact email via Resend:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Failed to send message." },
      { status: 500 }
    );
  }
}

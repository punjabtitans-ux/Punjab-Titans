import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ success: false, message: "Email required" });
  }

  const otp = Math.floor(1000 + Math.random() * 9000); // 4 digit

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Punjab Titans" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Login Verification Code",
      html: `
        <h2>Your OTP Code</h2>
        <p>Your verification code is:</p>
        <h1>${otp}</h1>
        <p>This code is valid for 5 minutes.</p>
      `,
    });

    return Response.json({
      success: true,
      otp, // ⚠️ dev only (production me DB/store karo)
    });
  } catch (error) {
    return Response.json({ success: false, message: "Email failed" });
  }
}

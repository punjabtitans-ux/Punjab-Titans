import nodemailer from "nodemailer";

// ✅ Global OTP store (TEMP – dev ke liye)
globalThis.otpStore = globalThis.otpStore || {};

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({
        success: false,
        message: "Email required",
      });
    }

    // 🔐 4 digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // ⏱ 5 min expiry
    globalThis.otpStore[email] = {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    };

    console.log("OTP SAVED 👉", globalThis.otpStore);

    // 📧 Mail config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📤 Send mail
    await transporter.sendMail({
      from: `"Punjab Titans" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Login Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif">
          <h2>Punjab Titans Login Code</h2>
          <p>Your verification code is:</p>
          <h1 style="letter-spacing: 5px">${otp}</h1>
          <p>This code is valid for <b>5 minutes</b>.</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("EMAIL OTP ERROR ❌", error);

    return Response.json({
      success: false,
      message: "Email failed",
    });
  }
}

import { NextResponse } from "next/server";

// ✅ Global OTP store (same memory as send-email-otp)
globalThis.otpStore = globalThis.otpStore || {};

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "Email & OTP required" },
        { status: 400 }
      );
    }

    const record = globalThis.otpStore[email];

    if (!record) {
      return NextResponse.json(
        { success: false, message: "OTP not found" },
        { status: 400 }
      );
    }

    // ⏱ Expiry check
    if (Date.now() > record.expiresAt) {
      delete globalThis.otpStore[email];

      return NextResponse.json(
        { success: false, message: "OTP expired" },
        { status: 400 }
      );
    }

    // 🔐 OTP match check
    if (record.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // ✅ SUCCESS → cleanup
    delete globalThis.otpStore[email];

    return NextResponse.json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("VERIFY OTP ERROR ❌", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

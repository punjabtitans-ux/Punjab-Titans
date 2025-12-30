"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Login = () => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("input"); // input | otp
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const otpRefs = useRef([]);

  // 🔹 Mobile validation
  function handelCheckNumber(value) {
    if (value.length === 0) {
      setError("");
    } else if (value.length !== 10) {
      setError("Mobile Number Should Be 10 Digit");
    } else {
      setError("");
    }
  }

  // 🔹 SEND CODE (API FETCH)
  async function handleSendCode() {
    if (!number && !email) {
      setError("Please enter Mobile Number or Email");
      return;
    }

    if (number && email) {
      setError("Please enter only one: Mobile OR Email");
      return;
    }

    if (number && number.length !== 10) {
      setError("Mobile Number Should Be 10 Digit");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // 📧 EMAIL OTP
      if (email) {
        const res = await fetch("/api/send-email-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (!data.success) {
          setError(data.message || "Failed to send OTP");
          setLoading(false);
          return;
        }
      }

      // 📱 (future) mobile OTP yahin add hoga

      setStep("otp");
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  // 🔹 OTP auto-focus
  function handleOtpChange(value, index) {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  }

  // 🔹 VERIFY OTP (API FETCH)
  async function handleVerifyOtp() {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      setError("Please enter complete OTP");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          otp: enteredOtp,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError("Invalid OTP");
        setLoading(false);
        return;
      }

      console.log("LOGIN SUCCESS ✅");
      // 👉 yahin redirect / dashboard logic
    } catch (err) {
      setError("Verification failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-6 cus_container flex items-start gap-10">
      <div className="flex items-center gap-2 w-[10%]">
        <Image src={"/icons/home.svg"} alt="" width={1000} height={500} className="max-w-5" />
        <span className="text-[#E0C36D] text-lg"> / Login</span>
      </div>

      <div className="grid grid-cols-[2fr_3fr] w-[90%]">
        <div className="relative z-999 top-[-20.5%]">
          <Image
            src={"/images/contactus_flag.webp"}
            alt=""
            width={1000}
            height={500}
            className="max-w-[98%]"
          />
        </div>

        <div className="pt-32 ps-10">
          <div className="text-start">
            <h3 className="text-2xl font-semibold text-ternary">
              Welcome to The Punjab Titans
            </h3>
            <p className="text-[14px] text-secondary pt-2">
              To personalise your experience, please login.
            </p>
            <h4 className="text-base text-secondary pt-3">
              Verify your mobile number
            </h4>
          </div>

          <div className="pt-6 max-w-[650px]">
            {/* 🔹 INPUT STEP */}
            {step === "input" && (
              <>
                <div className="flex gap-2">
                  <div className="text-white text-[15px] flex items-center gap-2 px-4 py-3 border-2 border-[#BDBDBD] rounded-lg w-fit">
                    <Image src={"/icons/india.svg"} alt="ind" width={1000} height={500} className="max-w-6" />
                    +91
                  </div>

                  <div className="text-white text-[15px] flex items-center gap-2 px-4 py-3 border-2 border-[#BDBDBD] rounded-lg w-full max-w-[550px]">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={number}
                      className="w-full outline-none"
                      placeholder="Mobile Number"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length > 10) return;
                        setNumber(value);
                        handelCheckNumber(value);
                      }}
                    />
                  </div>
                </div>

                <div className="w-full pt-4">
                  <div className="text-white text-[15px] flex items-center gap-2 px-4 py-3 border-2 border-[#BDBDBD] rounded-lg w-full">
                    <input
                      type="email"
                      value={email}
                      className="w-full outline-none"
                      placeholder="Email ID"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {/* 🔹 OTP STEP */}
            {step === "otp" && (
              <div className="flex gap-4 pt-6">
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text"
                    maxLength={1}
                    className="w-14 h-14 text-center text-white border-2 border-[#BDBDBD] rounded-lg outline-none"
                    value={otp[i]}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                  />
                ))}
              </div>
            )}

            {error && <p className="text-red-700 text-sm pt-2">{error}</p>}

            <div className="pt-8">
              <button
                onClick={step === "input" ? handleSendCode : handleVerifyOtp}
                disabled={loading}
                className="px-18 py-3 text-sm text-white bg-primary rounded-sm cursor-pointer"
              >
                {loading
                  ? "PLEASE WAIT..."
                  : step === "input"
                  ? "SEND CODE"
                  : "VERIFY CODE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

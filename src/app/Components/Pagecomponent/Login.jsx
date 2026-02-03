"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("input"); // input | otp | success
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const otpRefs = useRef([]);

  // 🔹 Check session on load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setStep("success");
    }
  }, []);

  // 🔹 SEND CODE
  async function handleSendCode() {
    if (!firstName || !lastName || !email) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/send-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Failed to send OTP");
        return;
      }

      setStep("otp");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // 🔹 OTP auto jump
  function handleOtpChange(value, index) {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  }

  // 🔹 VERIFY OTP
  async function handleVerifyOtp() {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      setError("Please enter complete OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Invalid OTP");
        return;
      }

      // ✅ LOGIN SUCCESS → SESSION
      const userData = { firstName, lastName, email };
      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("user-login"));
      setUser(userData);
      setStep("success");
    } catch {
      setError("Verification failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-6 md:pb-6 cus_container flex flex-col lg:flex-row items-start  md:gap-10">
      <div className="flex items-center gap-2 lg:w-[10%]">
        <Image
          src={"/icons/home.svg"}
          alt=""
          width={1000}
          height={500}
          className="max-w-5"
        />
        <span className="text-[#E0C36D] text-lg"> / Login</span>
      </div>

      <div className="grid xl:grid-cols-[2fr_3fr] md:w-[90%]">
        <div className="hidden xl:block relative z-999 top-[-20.5%]">
          <Image
            src={"/images/contactus_flag.webp"}
            alt=""
            width={1000}
            height={500}
            className="max-w-[98%]"
          />
        </div>

        <div className="pt-6 lg:pt-32 lg:ps-10">
          <div className="text-start">
            <h3 className="text-2xl font-semibold text-ternary">
              Welcome to The Punjab Titans
            </h3>
            {step === "input" && (
              <>
                <p className="text-[14px] text-secondary pt-2">
                  To personalise your experience, please login.
                </p>
                <h4 className="text-base text-secondary pt-3">
                  Verify your Email
                </h4>
              </>
            )}
          </div>

          <div className="pt-6 max-w-[650px]">
            {/* 🔹 LOGIN FORM */}
            {step === "input" && (
              <>
                {/* Name Row */}
                <div className="flex gap-4 pb-4">
                  <div className="w-full border-2 border-[#BDBDBD] rounded-lg px-4 py-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full outline-none text-white"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="w-full border-2 border-[#BDBDBD] rounded-lg px-4 py-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full outline-none text-white"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="pt-4 border-2 border-[#BDBDBD] rounded-lg px-4 py-3">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full outline-none text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </>
            )}

            {/* 🔹 OTP */}
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

            {/* 🔹 SUCCESS */}
            {step === "success" && user && (
              <div className="pt-6">
                <h2 className="text-2xl text-white font-semibold">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-secondary pt-2">{user.email}</p>
              </div>
            )}

            {error && <p className="text-red-600 pt-2">{error}</p>}

            {step !== "success" && (
              <div className="pt-8">
                <button
                  onClick={step === "input" ? handleSendCode : handleVerifyOtp}
                  disabled={loading}
                  className="px-18 py-3 text-sm text-white bg-primary rounded-sm"
                >
                  {loading
                    ? "PLEASE WAIT..."
                    : step === "input"
                    ? "SEND CODE"
                    : "VERIFY CODE"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

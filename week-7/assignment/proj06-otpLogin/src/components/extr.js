import React, { useState, useRef } from "react";

const OTPLogin = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); // An array to store each digit of the OTP
  const otpInputRefs = [useRef(), useRef(), useRef(), useRef()]; // Refs for each OTP input

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return; // Allow only numeric input
    }

    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move the cursor to the next input field if the current input is not empty
    if (value !== "" && index < otp.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      <h2>OTP Login</h2>
      <form>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            ref={otpInputRefs[index]}
          />
        ))}
      </form>
      <button onClick={() => console.log("Logging in...", otp.join(""))}>
        Login
      </button>
    </div>
  );
};

export default OTPLogin;

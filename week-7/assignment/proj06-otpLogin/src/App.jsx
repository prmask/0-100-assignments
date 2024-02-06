import React, { useState } from "react";
import "./App.css";
import GenerateOTP from "./components/GenerateOtp";
// import SendOtp from "./components/SendOtp";

const OTPContext = React.createContext();

function App() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const generateOTP = () => {
    // setUserMobile(inputRef.current.value);
    const digits = "0123456789";
    let OTP = "";

    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log({ OTP });
    const OTPAry = OTP.split("");

    setOtp(OTPAry);
  };

  const contextValue = {
    otp,
    onClick: generateOTP,
  };

  return (
    <OTPContext.Provider value={contextValue}>
      <div>
        {console.log({ otp })}
        {otp !== undefined && <GenerateOTP />}
        {/* <SendOtp /> */}
      </div>
    </OTPContext.Provider>
  );
}

export default App;

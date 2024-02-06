import React, { useContext } from "react";
import styles from "./GenerateOtp.module.css";

const OTPContext = React.createContext();

const GenerateOTP = () => {
  // const [userMobile, setUserMobile] = useState(0);

  // const inputRef = useRef(null);

  const value = useContext(OTPContext);
  // console.log(
  //   `To log in from mobile no. {userMobile} Use these OTP to log in > `,
  //   value.otp.toString()
  // );

  console.log({ value });
  return (
    <div id={styles.mainDiv}>
      <h1>Login via OTP</h1>
      <input
        type="number"
        id={styles.mobInput}
        name="mobInput"
        placeholder="Enter your mobile number"
        // ref={inputRef}
      />
      <input type="button" value="Send OTP" onClick={value.onClick} />
    </div>
  );
};

export default GenerateOTP;

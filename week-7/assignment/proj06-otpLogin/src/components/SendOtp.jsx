import styles from "./SendOtp.module.css";

const SendOtp = () => {
  return (
    <div id={styles.mainDiv}>
      <h1>Login via OTP</h1>
      <div>
        <input type="number" id={styles.otpIn1} name="mobBox" />
        <input type="number" id={styles.otpIn2} name="mobBox" />
        <input type="number" id={styles.otpIn3} name="mobBox" />
        <input type="number" id={styles.otpIn4} name="mobBox" />
      </div>
      <input type="button" value="Login" />
    </div>
  );
};

export default SendOtp;

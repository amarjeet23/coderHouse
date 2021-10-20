import React, { useState } from "react";
import LoginWithEmailOrPhone from "./loginWithEmailPhone/index";
import Otp from "./otp/Otp";
import UserName from "./userName/Username";
import Avatar from "./avatar/Avatar";
import styles from "./Register.module.css";
const steps = {
  1: LoginWithEmailOrPhone,
  2: Otp,
  3: UserName,
  4: Avatar
};
const Register = () => {
  const [step, setStep] = useState(1);
  const ComponentTorender = steps[step];
  const goToNext = () => {
    step < 4 && setStep((prev) => prev + 1);
  };

  return (
    <div className={styles.RegistrationWrapper}>
      <ComponentTorender goToNExt={goToNext} />
    </div>
  );
};

export default Register;

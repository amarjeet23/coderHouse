import React from "react";
import Button from "../../../components/shared/button/Button";
const Otp = ({ title, goToNExt }) => {
  return (
    <div>
      confirm your OTP
      <Button click={goToNExt} title="Next"></Button>
    </div>
  );
};

export default Otp;

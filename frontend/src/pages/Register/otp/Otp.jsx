import React from "react";
import Button from "../../../components/shared/button/Button";
import Card from "../../../components/shared/card/Card";
const Otp = ({ title, goToNExt }) => {
  return (
    <Card title="confirm your OTP">
      <Button click={goToNExt} title="Next"></Button>
    </Card>
  );
};

export default Otp;

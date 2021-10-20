import React from "react";
import Button from "../../../components/shared/button/Button";
const index = ({ title, goToNExt }) => {
  return (
    <div>
      login with phone or Email
      <Button click={goToNExt} title="Next"></Button>
    </div>
  );
};

export default index;

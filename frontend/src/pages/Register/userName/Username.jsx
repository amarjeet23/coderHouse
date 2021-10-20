import React from "react";
import Button from "../../../components/shared/button/Button";
const Username = ({ title, goToNExt }) => {
  return (
    <div>
      setup your username
      <Button click={goToNExt} title="Next"></Button>
    </div>
  );
};

export default Username;

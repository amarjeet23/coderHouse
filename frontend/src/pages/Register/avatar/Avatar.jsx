import React from "react";
import Button from "../../../components/shared/button/Button";
const Avatar = ({ title, goToNExt }) => {
  return (
    <div>
      set your Avatar
      <Button click={goToNExt} title="Next"></Button>
    </div>
  );
};

export default Avatar;

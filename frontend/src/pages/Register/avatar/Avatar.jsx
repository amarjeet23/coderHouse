import React from "react";
import Button from "../../../components/shared/button/Button";
import Card from "../../../components/shared/card/Card";
const Avatar = ({ title, goToNExt }) => {
  return (
    <Card title="set your Avatar">
      <Button click={goToNExt} title="Next"></Button>
    </Card>
  );
};

export default Avatar;

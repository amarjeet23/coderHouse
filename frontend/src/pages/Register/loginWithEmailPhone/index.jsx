import React from "react";
import Button from "../../../components/shared/button/Button";
import Card from "../../../components/shared/card/Card";
const index = ({ title, goToNExt }) => {
  return (
    <Card title="login with phone or Email">
      <Button click={goToNExt} title="Next"></Button>
    </Card>
  );
};

export default index;

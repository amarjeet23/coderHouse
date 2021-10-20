import React from "react";
import Button from "../../../components/shared/button/Button";
import Card from "../../../components/shared/card/Card";
const Username = ({ title, goToNExt }) => {
  return (
    <Card title=" setup your username">
      <Button click={goToNExt} title="Next"></Button>
    </Card>
  );
};

export default Username;

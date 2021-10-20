import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/card/Card";
import Button from "../../components/shared/button/Button";
export default function Home() {
  const signinStyle = {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "var(--white)",
    marginLeft: "5px"
  };
  const history = useHistory();
  const goToRegister = () => {
    history.push("/login");
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="coderHouse">
        <p className={styles.text}>
          loreum lipsum loreum lispsum lorium lipsum lorium lipsum loriu lipsum
          lorium lipsum
        </p>
        <Button title="Get your username" click={goToRegister} />
        <div className={styles.inviteWrapper}>
          <span className={styles.hasinvitetext}>Have an invite text</span>
          <Link style={signinStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}

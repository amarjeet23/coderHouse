import React from "react";
import styles from "./Button.module.css";
export default function Button({ title,click }) {
  return (
    <button onClick={click}className={styles.button}>
      <span>{title}</span>
      <span>&#8594;</span>
    </button>
  );
}

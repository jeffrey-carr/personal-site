import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({ onClick, children }: { onClick?: () => void; children?: ReactNode }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
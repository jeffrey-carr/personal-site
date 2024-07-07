import React from "react";
import styles from "./page.module.scss";
import InteractiveBackground from "@/components/InteractiveBackground/InteractiveBackground";

export default function Page() {
  return (
    <div className={styles.container}>
      <InteractiveBackground />
    </div>
  )
}
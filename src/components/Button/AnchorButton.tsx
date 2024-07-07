import React, { ReactNode } from "react";

import cx from "classnames";
import styles from "./Button.module.scss";

export const AnchorButton = (
  { href, newTab = false, children, className }:
    { href: string; newTab?: boolean; children?: ReactNode; className?: string }
) => {
  return (
    <a
      className={cx(styles.button, className)}
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
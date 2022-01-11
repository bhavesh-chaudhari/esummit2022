import * as React from "react";
import styles from "../../styles/Hero.module.css";


const SvgBlueMask = (props) => (
  <svg
    width={1366}
    height={673}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={styles["blue-mask"]}
  >
    <path
      d="M600 516C488 568 240.649 674.891.5 672L-1 0h1367v424s-144 92-246 78-408-38-520 14Z"
      fill="#CFFAFE"
    />
  </svg>
);

export default SvgBlueMask;

import * as React from "react";
import styles from "../../styles/Hero.module.css";

const SvgBlueWave = (props) => (
  <svg
    className={styles["blue-mask"]}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1367 580.45"
    {...props}
  >
    <g data-name="Layer 2">
      <path
        d="M366 573c-93.2 21.5-134.3-8-202.4-32.2C93.7 515.9 82.1 517 0 516V0h1367v424s-7.26 143-157.38 99.06c-90.56-26.48-109 49.34-188.92 48.84-89.1-.5-178.7-99.9-246.15-51.9-89 63.4-129.7 73.53-208.61 16.94C492.69 484.41 418 561 366 573Z"
        style={{
          fill: "#cffafe",
        }}
        data-name="Layer 1"
      />
    </g>
  </svg>
);

export default SvgBlueWave;

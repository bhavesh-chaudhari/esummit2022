import * as React from "react";
import styles from "../../styles/Hero.module.css";

const SvgOrangeWave = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles["orange-mask"]}
    viewBox="0 0 1368 603.5"
    {...props}
  >
    <defs>
      <linearGradient
        id="orangeWave_svg__a"
        x1={684}
        y1={624}
        x2={684}
        y2={-29.02}
        gradientTransform="matrix(1 0 0 -1 0 624)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#a5f3fc" />
        <stop offset={1} stopColor="#f59e0b" stopOpacity={0.5} />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <path
        d="M346.6 507.74C182.57 452 173 593 2.31 603.5L0 0h1368v543.49c-14.43-11.23-124-35.49-151-11.49-38.15 33.91-78.38 26.23-149.38-.77-95-36.12-195.83 72.07-292.09 30.64-80.68-34.72-82.72-107.23-212.38-21.81-62.29 41.04-135.94-4.9-216.55-32.32Z"
        style={{
          fillOpacity: 0.5,
          fill: "url(#orangeWave_svg__a)",
        }}
        data-name="Layer 1"
      />
    </g>
  </svg>
);

export default SvgOrangeWave;

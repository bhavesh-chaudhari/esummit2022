import * as React from "react";
import styles from "../../styles/Hero.module.css"

const SvgOrangeMask = (props) => (
  <svg
    width={1366}
    height={622}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={styles["orange-mask"]}
  >
    <path
      d="M530 490C277 403 159.641 484.439.31 621.5L-2 0h1368v386c-44.52-8.592-106-23-160 15l-184 147c-164.783 121.434-239 29-492-58Z"
      fill="url(#orangeMask_svg__a)"
      fillOpacity={0.5}
    />
    <defs>
      <linearGradient
        id="orangeMask_svg__a"
        x1={682}
        y1={0}
        x2={682}
        y2={672.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A5F3FC" />
        <stop offset={1} stopColor="#F59E0B" stopOpacity={0.5} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgOrangeMask;

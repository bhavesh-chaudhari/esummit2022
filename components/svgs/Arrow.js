import * as React from "react";

const SvgArrow = (props) => (
  <svg
    width={19}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.2 19.134 2.35 3.5 16.4-11.15L2.55.234.2 3.684l11.05 7.8L.2 19.134Z"
      fill="#000"
    />
  </svg>
);

export default SvgArrow;

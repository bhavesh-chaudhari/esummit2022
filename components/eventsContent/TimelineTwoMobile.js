import React from "react";
import Image from "next/image";
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsContent.module.css";

const TimelineTwoMobile = () => {
  const items = [
    {
      title: "Competition begins",
    },
    {
      title: "Final submission",
    },
    {
      title: "Ending ceremony",
    },
  ];
  return (
    <div className={styles["timeline-2"]}>
      <p className={styles["para1"]}>21st Jan</p>
      <div style={{ width: "100%", height: "90%", margin: "auto" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          hideControls={true}
          borderLessCards={true}
          disableClickOnCircle={true}
          lineWidth={4}
          cardHeight={0}
          theme={{
            primary: "#155E75",
            secondary: "#F5FDFE",
            cardForeColor: "violet",
            titleColor: "#0891B2",
          }}
        >
          <div className="chrono-icons">
            <Image
              src="/images/EventContent/circle.png"
              width={40}
              height={40}
              alt="dot"
            ></Image>
            <Image
              src="/images/EventContent/circle.png"
              width={40}
              height={40}
              alt="dot"
            ></Image>
            <Image
              src="/images/EventContent/circle.png"
              width={40}
              height={40}
              alt="dot"
            ></Image>
          </div>
        </Chrono>
      </div>
      <p className={styles["para2"]}>30th Jan</p>
    </div>
  );
};

export default TimelineTwoMobile;

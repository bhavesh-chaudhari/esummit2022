import React from "react";
import Image from "next/image";
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsContent.module.css";

const TimelineOne = () => {
  const items = [
    {
      title: "Round 1 Begins",
    },
    {
      title: "Round 1  Ends",
    },
    {
      title: "Round 1 Results",
    },
    {
      title: "Round 2 Begins",
    },
    {
      title: "Round 2  Ends",
    },
    {
      title: "Round 3 & ceremony",
    },
  ];
  return (
      <div className={styles["timeline-1"]}>
        <p className={styles["para1"]}>15th Jan</p>
        <div>
          <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={140}
            hideControls={true}
            borderLessCards={true}
            disableClickOnCircle={true}
            lineWidth={5}
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
                width={70}
                height={70}
                alt="dot"
              ></Image>
              <Image
                src="/images/EventContent/circle.png"
                width={70}
                height={70}
                alt="dot"
              ></Image>
              <Image
                src="/images/EventContent/circle.png"
                width={70}
                height={70}
                alt="dot"
              ></Image>
              <Image
                src="/images/EventContent/circle.png"
                width={70}
                height={70}
                alt="dot"
              ></Image>
              <Image
                src="/images/EventContent/circle.png"
                width={70}
                height={70}
                alt="dot"
              ></Image>
              <Image
                src="/images/EventContent/circle.png"
                width={70}
                height={70}
                alt="dot"
              ></Image>
            </div>
          </Chrono>
        </div>
        <p className={styles["para2"]}>30th Jan</p>
      </div>
  );
};

export default TimelineOne;

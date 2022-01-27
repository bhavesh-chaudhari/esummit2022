import React from 'react'
import Image from 'next/image';
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsContent.module.css"

const TimelineThree = () => {
    const items = [{
        title: "Round 1"
    }, {
        title: "Round 2"
    }];
    return (
      <div className={styles["timeline-3"]}>
        <p className={styles["para1"]}> 11th Feb</p>
        <div style={{ width: "360px", height: "100px" }}>
          <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={180}
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
            </div>
          </Chrono>
        </div>
        <p className={styles["para2"]}>12th Feb</p>
      </div>
    );
}

export default TimelineThree

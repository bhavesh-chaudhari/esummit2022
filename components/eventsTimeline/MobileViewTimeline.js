import React from "react";
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsTimeline.module.css";
import CardItem from "./CardItem";

import eventsData from "./eventsData";

const MobileViewTimeline = () => {
  return (
    <div className={styles["timeline"]} style={{ width: "70%", height: "90%" }}>
      <Chrono
        mode="VERTICAL"
        borderLessCards={true}
        allowDynamicUpdate={true}
        // slideShow
        hideControls={true}
        theme={{
          primary: "#FCD34D",
          secondary: "#FCD34D",
          cardBgColor: "#F5FDFE",
        }}
      >
        {eventsData.map((event) => {
          return (
            <CardItem
              key={event.id}
              title={event.title}
              subTitle={event.subtitle}
              date={event.date}
              alignText="align-right"
              dataAos="fade-right"
            />
          );
        })}
      </Chrono>
    </div>
  );
};

export default MobileViewTimeline;

import React from "react";
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsTimeline.module.css";
import CardItem from "./CardItem";

import eventsData from "./eventsData";

const DesktopViewTimeline = () => {
  return (
    <div className={styles["timeline"]}>
      <div className={styles["custom-timeline-content"]}>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          borderLessCards={true}
          allowDynamicUpdate={true}
          // slideShow
          hideControls={true}
          slideItemDuration={2000}
          theme={{
            primary: "#FCD34D",
            secondary: "#FCD34D",
            cardBgColor: "#F5FDFE",
            cardForeColor: "violet",
            titleColor: "red",
          }}
        >{eventsData.map((event) => {
            return (
              <CardItem
                key={event.id}
                title={event.title}
                subTitle={event.subtitle}
                date={event.date}
                alignText={event.alignText}
                dataAos={event.dataAos}/>
            );
          })}
        </Chrono>
      </div>
    </div>
  );
};

export default DesktopViewTimeline;

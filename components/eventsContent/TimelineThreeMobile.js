import React from 'react'
import Image from 'next/image';
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsContent.module.css"

const TimelineThreeMobile = () => {
    const items = [{
        title: "Round 1"
    }, {
        title: "Round 2"
    }];
    return (
        <div className={styles["timeline-3"]}>
            <p className={styles["para1"]}> 29th Jan</p>
            <div style={{ width: "70%", height: "90%", margin: "auto" }}>
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
                        titleColor: "#0891B2"
                    }}
                >
                    <div className="chrono-icons">
                        <Image
                            src="/images/EventContent/circle.png"
                            width={40}
                            height={40}
                        ></Image>
                        <Image
                            src="/images/EventContent/circle.png"
                            width={40}
                            height={40}
                        ></Image>
                    </div>
                </Chrono>
            </div>
            <p className={styles["para2"]}>30th Jan</p>
        </div>
    )
}

export default TimelineThreeMobile

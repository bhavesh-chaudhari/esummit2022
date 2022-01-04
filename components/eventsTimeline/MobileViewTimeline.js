import React from 'react'
import { Chrono } from "react-chrono";
import styles from "../../styles/EventsTimeline.module.css"
import CardItem from './CardItem';

const MobileViewTimeline = () => {
    return (
        <div className={styles["timeline"]} style={{ width: "50%", height: "90%" }}>
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
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                    alignText="align-right"
                />
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                />
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                    alignText="align-right"
                />
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                />
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                    alignText="align-right"
                />
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                />
                <CardItem
                    title="Pitching Competition"
                    subTitle="Minimum Viable Product"
                    date="15/01/2022"
                    alignText="align-right"
                />
            </Chrono>
        </div>
    )
}

export default MobileViewTimeline

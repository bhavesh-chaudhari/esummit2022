import { Chrono } from "react-chrono";
import styles from "../../styles/EventsTimeline.module.css"

const EventsTimeline = () => {


    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <h1>Events</h1>
                <p>View Details</p>
            </div>
            <div>
                <div className={styles["timeline"]} style={{ width: "50%", height: "100%" }}>
                    <Chrono
                        mode="VERTICAL_ALTERNATING"
                        borderLessCards={true}
                        theme={{
                            primary: "#FCD34D",
                            secondary: "#F59E0B",
                            cardBgColor: "#F5FDFE",
                            cardForeColor: "violet",
                            titleColor: "red"
                        }}
                    >
                        <div className={`${styles["card"]} ${styles["align-right"]}`}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                        <div className={styles["card"]}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                        <div className={`${styles["card"]} ${styles["align-right"]}`}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                        <div className={styles["card"]}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                        <div className={`${styles["card"]} ${styles["align-right"]}`}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                        <div className={styles["card"]}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                        <div className={`${styles["card"]} ${styles["align-right"]}`}>
                            <p className={styles["title"]}>Pitching Competition</p>
                            <p className={styles["sub-title"]}>Minimum Viable Product</p>
                            <p className={styles["date"]}>15/01/2022</p>
                        </div>
                    </Chrono>
                </div>
            </div>
        </div>
    )
}

export default EventsTimeline

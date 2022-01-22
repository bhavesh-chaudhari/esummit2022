import React from 'react'
import styles from "../../styles/EventsTimeline.module.css"

const CardItem = (props) => {
    return (
        <div data-aos-duration={1200} data-aos={props.dataAos} className={`${styles["card"]} ${styles[`${props.alignText}`]}`}>
            <p className={styles["title"]}>{props.title}</p>
            <p className={styles["sub-title"]}>{props.subTitle}</p>
            <p className={styles["date"]}>{props.date}</p>
        </div>
    )
}

export default CardItem

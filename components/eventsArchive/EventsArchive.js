import styles from "../../styles/EventsArchive.module.css"
import EventCard from "./eventCard/EventCard";
import Carousel from "./Carousel";
import archiveData from "./archiveData.js"

const EventsArchive = () => {
    return (
      <div className={styles["events-archive-container"]}>
        <div className={styles["header"]}>
          <h1>Events Archive</h1>
        </div>
        <div className={styles["events-carousel"]}>
          <Carousel>
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
          </Carousel>
        </div>
      </div>
    );
}

export default EventsArchive

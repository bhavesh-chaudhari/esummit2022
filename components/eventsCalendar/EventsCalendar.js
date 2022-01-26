import styles from "../../styles/EventsCalendar.module.css"
import EventCard from "./eventCard/EventCard";
import Carousel from "./Carousel";
import calendarData from "./calendarData.js"

const EventsArchive = () => {
    return (
      <div data-aos="fade-up" className={styles["events-archive-container"]}>
        <div className={styles["header"]}>
          <h1>Add to Calendar</h1>
        </div>
        <div className={styles["events-carousel"]}>
          <Carousel>
            {calendarData.map((event) => {
              return <EventCard key={event.id} event={event}></EventCard>;
            })}
          </Carousel>
        </div>
      </div>
    );
}

export default EventsArchive

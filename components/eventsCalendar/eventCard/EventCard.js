import styles from "../../../styles/EventsCalendar.module.css";

const EventCard = (props) => {
  const { event } = props;

  let newCurrentTime = new Date();

  const checkIsUpcoming = (day, startHour, startMinute, month) => {
    const eventMonth = month - 1;
    return (
      newCurrentTime <
      new Date(2022, eventMonth, day, startHour, startMinute, 1)
    );
  };

  return (
    <div className={styles["event-card"]}>
      <h4>{event.title}</h4>
      <p>{event.subtitle}</p>
      {checkIsUpcoming(
        event.day,
        event.startHour,
        event.startMinute,
        event.month
      ) === true ? (
        <a
          rel="noreferrer"
          target="_blank"
          href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
            event.title
          )}&details=${encodeURIComponent(
            event.title
          )}(${event.subtitle}) presented by ESUMMIT2021, Thanks!&location=Esummit2021 IIITN&dates=20220${
            event.month
          }${event.day}T${event.startHour}${event.startMinute}00/20220${
            event.month
          }${event.day}T${event.endHour}${
            event.endMinute
          }`}
        >
          <button>Add</button>
        </a>
      ) : (
        <button className={styles["archived"]} disabled>Archived</button>
      )}
    </div>
  );
};

export default EventCard;

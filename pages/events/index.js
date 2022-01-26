import Head from "next/head";
import EventsContent from "../../components/eventsContent/EventsContent";
import EventsCalendar from "../../components/eventsCalendar/EventsCalendar";

const events = () => {

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
      </Head>
      <div>
        <EventsContent />
        <EventsCalendar></EventsCalendar>
      </div>
    </>
  );
};

export default events;

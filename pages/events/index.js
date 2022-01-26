import {useState, useEffect } from "react";
import Head from "next/head";
import EventsContent from "../../components/eventsContent/EventsContent";
import EventsCalendar from "../../components/eventsCalendar/EventsCalendar";

const events = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
      </Head>
      {mounted && (
        <div>
          <EventsContent />
          <EventsCalendar></EventsCalendar>
        </div>
      )}
    </>
  );
};

export default events;

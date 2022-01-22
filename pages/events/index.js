import Head from "next/head";
import EventsContent from "../../components/eventsContent/EventsContent";
import EventsArchive from "../../components/eventsArchive/EventsArchive";

const events = () => {

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
      </Head>
      <div>
        <EventsContent />
        <EventsArchive></EventsArchive>
      </div>
    </>
  );
};

export default events;

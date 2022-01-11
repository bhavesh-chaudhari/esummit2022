import Head from "next/head";
import EventsContent from "../../components/eventsContent/EventsContent";

const events = () => {

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
      </Head>
      <div>
        <EventsContent />
      </div>
    </>
  );
};

export default events;

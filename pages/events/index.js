import Head from "next/head";
import EventsContent from "../../components/eventsContent/EventsContent";
import EventsCalendar from "../../components/eventsCalendar/EventsCalendar";

const events = () => {
  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
        <meta name="title" content="Esummit 2021 | Events"></meta>
        <meta
          name="description"
          content="E summit is Flagship event of IIITNagpur under the Innovation Council Club. "
        />
        <meta
          name="keywords"
          content="ACE IIITN, ACE, Esummit 2021, IIIT Nagpur, Pitchers 3.0, QuizHunt, The House of Investors, Scam 2022, Esummit competitions"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
      </Head>
      <div>
        <EventsContent />
        <EventsCalendar></EventsCalendar>
      </div>
    </>
  );
};

export default events;

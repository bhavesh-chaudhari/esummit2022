import Head from "next/head";
import EventsContent from "../../components/eventsContent/EventsContent";
import EventsCalendar from "../../components/eventsCalendar/EventsCalendar";

const events = () => {
  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
        <meta name="title" content="ESUMMIT 2022 | EVENTS"></meta>
        <meta
          name="description"
          content="E summit is the Flagship event of IIIT Nagpur under the Innovation Council Club. We bring together students, professors, new-age entrepreneurs, leaders, and investors on a common platform. We instill the spirit of innovation and entrepreneurship among them."
        />
        <meta
          name="keywords"
          content="ACE IIITN, ACE, Esummit 2022, IIIT Nagpur, Pitchers 3.0, QuizHunt, The House of Investors, Scam 2022, Esummit competitions"
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

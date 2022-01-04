import Head from "next/head";
import Link from "next/link"
import EventsTimeline from "../components/eventsTimeline/EventsTimeline"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | IIITN</title>
      </Head>
      <div>
        <h1>Home</h1>
        <div className={styles["temp-links"]}>
          <Link href="/events">Events Page</Link>
          <Link href="/contact">Contact Page</Link>
          <Link href="/sponsors">Sponsors Page</Link>
        </div>
      </div>
      <EventsTimeline />
    </>
  );
}

export default Home
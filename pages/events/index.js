import Head from "next/head";
import styles from "../../styles/Events.module.css";

const events = () => {

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | EVENTS</title>
      </Head>
      <div className={styles["events-container"]}>
        <h1>Events</h1>
      </div>
    </>
  );
};

export default events;

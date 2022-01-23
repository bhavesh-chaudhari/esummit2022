import Head from "next/head"
import styles from "../../styles/Contact.module.css"
import Card from "../../components/contactTeam/Card";

const contact = () => {
    return (
      <>
        {/* Metadata goes inside Head Component */}
        <Head>
          <title>ESUMMIT 2022 | CONTACT</title>
        </Head>
        <div className={styles["contact-container"]}>
          <Card></Card>
          <Card></Card>
        </div>
      </>
    );
}

export default contact

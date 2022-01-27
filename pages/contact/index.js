import Head from "next/head";
import styles from "../../styles/Contact.module.css";
import Card from "../../components/contactTeam/Card";
import teamData from "../../components/contactTeam/teamData";

const contact = () => {
  const studentHeads = teamData.filter((member) => member.isHead === true);
  const leads = teamData.filter(
    (member) => member.isLead === true || member.isColead === true
  );
  const teamMembers = teamData.filter((member) => member.isMember === true);

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | CONTACT</title>
        <meta name="title" content="Esummit 2021 | Contact"></meta>
        <meta
          name="description"
          content="E summit is Flagship event of IIITNagpur under the Innovation Council Club. "
        />
        <meta
          name="keywords"
          content="ACE, Esummit Contact, Esummit 2021, IIITN, IIIT Nagpur, Entrepreneurship, Entrepreneurship Cell"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
      </Head>
      <div className={styles["contact-container"]}>
        <div
          data-aos="fade-up"
          data-aos-once={true}
          className={styles["contact-content"]}
        >
          <h1>Contact</h1>
          <div className={styles["header"]}>
            <h2>Student Heads</h2>
          </div>
          <div
            data-aos="zoom-in"
            className={`${styles["member-cards-container"]} ${styles["heads"]}`}
          >
            {studentHeads.map((head) => {
              return <Card key={head.id} {...head}></Card>;
            })}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-once={true}
            data-aos-duration={200}
            className={styles["header"]}
          >
            <h2>Leads</h2>
          </div>
          <div data-aos="fade-up" className={styles["member-cards-container"]}>
            {leads.map((lead) => {
              return <Card key={lead.id} {...lead}></Card>;
            })}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-once={true}
            data-aos-duration={200}
            className={styles["header"]}
          >
            <h2>Team Members</h2>
          </div>
          <div data-aos="fade-up" className={styles["member-cards-container"]}>
            {teamMembers.map((member) => {
              return <Card key={member.id} {...member}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

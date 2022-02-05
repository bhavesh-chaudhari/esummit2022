import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Sponsors.module.css";
import Sponsor from "../../components/sponsor/Sponsor";
import {
  mainSponsors,
  platformSponsors,
} from "../../components/sponsor/sponsorsData";

const sponsors = () => {
  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | SPONSORS</title>
      </Head>
      <div className={styles["sponsors-container"]}>
        <div className={styles["content"]}>
          <div className={styles["main-sponsors"]}>
            {mainSponsors.map((sponsor) => {
              return <Sponsor key={sponsor.id} {...sponsor}></Sponsor>;
            })}
          </div>
          <div data-aos="fade-up" className={styles["platform-sponsors"]}>
            <h2>Platform Sponsors</h2>
            <div className={styles["platform-sponsors-content"]}>
              {platformSponsors.map((sponsor) => {
                return (
                  <div key={sponsor.id} >
                    <div className={styles["image"]}>
                      <Image
                        layout="responsive"
                        width={150}
                        height={150}
                        src={sponsor.src}
                        alt="sponsor"
                      ></Image>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={sponsor.websiteLink}
                    >
                      Visit Website
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sponsors;

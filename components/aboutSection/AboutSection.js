import styles from "../../styles/AboutSection.module.css";
import Image from "next/image";
import col1 from "./assets/col-1.png";
import col2 from "./assets/col-2.png";
import col3 from "./assets/col-3.png";
import col4 from "./assets/col-4.png";
import col5 from "./assets/col-5.png";
import col4Child from "./assets/col-4-child.png";

const AboutSection = (props) => {

  const {heading, para, flexDirection} = props;
  
  return (
    <div className={styles["about-section-container"]}>
      <div style={{flexDirection: flexDirection}} className={styles["about-section-content"]}>
        <div className={styles["pillars"]}>
          <div data-aos="fade-up" className={styles["col"]}>
            <Image src={col1} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles["col"]}
          >
            <Image src={col2} alt="col2" />
            <div className={styles["child-pillar-1"]}>
              <Image src={col1} />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles["col"]}
          >
            <Image src={col3}></Image>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className={styles["col"]}
          >
            <Image src={col4}></Image>
            <div className={styles["child-pillar-2"]}>
              <Image src={col4Child}></Image>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className={styles["col"]}
          >
            <Image src={col5}></Image>
          </div>
        </div>
        <div className={styles["about-info"]}>
          <h2>{heading}</h2>
          <p>
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

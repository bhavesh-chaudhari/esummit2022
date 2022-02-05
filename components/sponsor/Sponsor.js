import Image from "next/image";
import styles from "../../styles/Sponsors.module.css";

const Sponsor = (props) => {
  const { title, src, websiteLink, details, flexDirection } = props;

  return (
    <div style={{flexDirection: flexDirection}} className={styles["main-sponsor"]}>
      <div className={styles["details"]}>
        <h2>{title}</h2>
        <p>{details}</p>
        <a rel="noreferrer" target="_blank" href={websiteLink}>
          <button>Visit Website</button>
        </a>
      </div>
      <div data-aos="zoom-in"  className={styles["image"]}>
        <Image src={src} layout="responsive" width={300} height={70} alt={title}></Image>
      </div>
    </div>
  );
};

export default Sponsor;

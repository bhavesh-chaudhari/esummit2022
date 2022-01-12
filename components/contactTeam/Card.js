import Image from "next/Image";
import styles from "../../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles["Card"]}>
      <div className={styles["Pic"]}>
        <Image
          src="/assets/DP.jpg"
          width={150}
          height={150}
          className={styles["profile_Pic"]}
        ></Image>
      </div>
      <h2 className={styles["Name"]}>PARAS SAXENA</h2>
      <div className={styles["social_logo"]}>
        <div className={styles["logo_bg"]}>
          <Image src="/assets/twitter.svg" width={45} height={32}></Image>
        </div>
        <div className={styles["logo_bg"]}>
          <Image src="/assets/facebook.svg" width={45} height={32}></Image>
        </div>
        <div className={styles["logo_bg"]}>
          <Image src="/assets/instagram.svg" width={45} height={32}></Image>
        </div>
      </div>
    </div>
  );
};
export default Card;

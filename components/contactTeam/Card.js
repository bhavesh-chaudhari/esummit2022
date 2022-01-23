import Image from "next/Image";
import styles from "../../styles/Card.module.css";

const Card = () => {

  const src =
    "https://www.crucial.com.au/wp-content/uploads/2014/07/example-person.png";
  
  return (
    <div className={styles["Card"]}>
      <div className={styles["Pic"]}>
        <Image
        loader={()=>src}
          src={src}
          width={150}
          height={150}
          className={styles["profile_Pic"]}
        ></Image>
      </div>
      <h2 className={styles["Name"]}>John Doe</h2>
      <div className={styles["social_logo"]}>
        <div className={styles["logo_bg"]}>
          <Image src="/logos/twitter.svg" width={45} height={32}></Image>
        </div>
        <div className={styles["logo_bg"]}>
          <Image src="/logos/facebook.svg" width={45} height={32}></Image>
        </div>
        <div className={styles["logo_bg"]}>
          <Image src="/logos/instagram.svg" width={45} height={32}></Image>
        </div>
      </div>
    </div>
  );
};
export default Card;

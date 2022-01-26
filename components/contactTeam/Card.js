import Image from "next/image";
import styles from "../../styles/Card.module.css";

const Card = (props) => {
  const { name, imagePath, department, email, instagramLink, linkedinLink } =
    props;

  return (
    <div className={styles["card"]}>
      <div className={styles["pic"]}>
        <Image
          src={imagePath}
          width={150}
          height={150}
          className={styles["profile-pic"]}
          alt={`${name}'s image`}
        ></Image>
      </div>
      <h2>{name}</h2>
      <h3>{department ? department : null}</h3>
      <div className={styles["social-logo"]}>
        <div className={styles["logo-bg"]}>
          <a href={`mailto:${email}`}>
            <Image
              src="/logos/mail.svg"
              width={45}
              height={32}
              alt="Twitter Logo"
            ></Image>
          </a>
        </div>
        {instagramLink ? (
          <div className={styles["logo-bg"]}>
            <a rel="noreferrer" target="_blank" href={instagramLink}>
              <Image
                src="/logos/instagram.svg"
                width={45}
                height={32}
                alt="Instagram Logo"
              ></Image>
            </a>
          </div>
        ) : null}
        {linkedinLink ? (
          <div className={styles["logo-bg"]}>
            <a rel="noreferrer" target="_blank" href={linkedinLink}>
              <Image
                src="/logos/linkedin.svg"
                width={45}
                height={32}
                alt="Facebook Logo"
              ></Image>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Card;

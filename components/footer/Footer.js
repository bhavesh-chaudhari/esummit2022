import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <footer className={styles["footer"]}>
        <div className={styles["esummit"]}>
          <div className={styles["esummit-logo"]}>
            <Image src="/logos/logo.png" width={186} height={80} alt="Logo" ></Image>
          </div>
          <div className={styles["flex-column"]}>
            <h2>PRESENTED BY:</h2>
            <h4>Ace, E Cell, IIIT Nagpur</h4>
          </div>
        </div>
        <div className={styles["query"]}>
          <div className={styles["flex-column"]}>
            <h2>TECHNICAL QUERIES AT:</h2>
            <p>
              <a href="mailto:esummit@gmail.com">esummit@gmail.com</a>
            </p>
          </div>
          <div className={styles["flex-column"]}>
            <h2>FOLLOW US AT:</h2>
            <div className={styles["square"]}>
              <Image src="/logos/twitter.svg" width={186} height={30} alt="Twitter Logo" ></Image>
              <Image src="/logos/facebook.svg" width={186} height={30} alt="Fackebook Logo" ></Image>
              <Image
                src="/logos/instagram.svg"
                width={186}
                height={30}
                alt="Instagram Logo"
              ></Image>
              <Image src="/logos/twitter.svg" width={186} height={30} alt="Twitter Logo" ></Image>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

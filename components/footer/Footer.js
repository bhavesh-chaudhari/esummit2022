import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <footer className={styles["footer"]}>
        <div className={styles["esummit"]}>
          <div className={styles["esummit_logo"]}>
            <Image src="/assets/logo.png" width={220} height={110}></Image>
          </div>
          <div className={styles["presentedBy"]}>
            <h2>PRESENTED BY:</h2>
            <div className={styles["icons"]}>Ace, E Cell, IIIT Nagpur</div>
          </div>
        </div>
        <div className={styles["query"]}>
          <div className={styles["presentedBy"]}>
            <h2>TECHNICAL QUERIES AT:</h2>
            <a href="mailto:tantrahelp@iiitn.ac.in">
              <div className={styles["icons"]}>esummit@gmail.com</div>
            </a>
          </div>
          <div className={styles["presentedBy"]}>
            <h2>FOLLOW US AT:</h2>
            <div className={styles["square"]}>
              <Image src="/assets/twitter.svg" width={186} height={30}></Image>
              <Image src="/assets/facebook.svg" width={186} height={30}></Image>
              <Image
                src="/assets/instagram.svg"
                width={186}
                height={30}
              ></Image>
              <Image src="/assets/twitter.svg" width={186} height={30}></Image>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

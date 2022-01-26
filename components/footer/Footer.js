import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <footer className={styles["footer"]}>
        <div className={styles["esummit"]}>
          <div className={styles["esummit-logo"]}>
            <Image
              src="/logos/logo.png"
              width={186}
              height={80}
              alt="Logo"
            ></Image>
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
            <h2>CONNECT WITH US:</h2>
            <div className={styles["square"]}>
              <a
                rel="noreferrer"
                href="https://instagram.com/ecell_iiitn?utm_medium=copy_link"
                target="_blank"
              >
                <Image
                  src="/logos/instagram.svg"
                  width={40}
                  height={25}
                  alt="Instagram Logo"
                ></Image>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/KCE9sXvQJs"
              >
                <Image
                  src="/logos/discord.svg"
                  width={40}
                  height={24}
                  alt="Discord Logo"
                ></Image>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/ace-iiitn-785041204/"
              >
                <Image
                  src="/logos/linkedin.svg"
                  width={40}
                  height={29}
                  alt="Linkedin Logo"
                ></Image>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://t.me/+-_zqYXogyt44MmQ9"
              >
                <Image
                  src="/logos/telegram.svg"
                  width={40}
                  height={28}
                  alt="Telegram Logo"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

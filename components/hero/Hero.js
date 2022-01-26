import {BlueMask, OrangeMask } from "../svgs"
import styles from "../../styles/Hero.module.css"

const Hero = () => {
    return (
      <div className={styles["hero-container"]}>
        <BlueMask></BlueMask>
        <OrangeMask></OrangeMask>
        <div className={styles["hero-content"]}>
          <h1>E Summit 2022</h1>
          <h3>Progress over Perfection</h3>
          <a target="_blank" rel="noreferrer" href="https://dare2compete.com/festival/e-summit-22-iiit-nagpur-indian-institute-of-information-technology-iiit-nagpur-19299">
            <button>Register</button>
          </a>
        </div>
      </div>
    );
}

export default Hero

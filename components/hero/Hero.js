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
            <button>
                Register
            </button>
        </div>
      </div>
    );
}

export default Hero

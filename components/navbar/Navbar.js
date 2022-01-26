import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const router = useRouter()

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["nav-logo"]}>
          <Image
            src="/logos/navlogo.png"
            width={180}
            height={30}
            alt="logo"
          ></Image>
        </div>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={
            show
              ? `${styles["hamburger-btn"]} ${styles["open"]}`
              : styles["hamburger-btn"]
          }
        >
          <div className={styles["hamburger"]}></div>
        </div>
        <div
          className={
            show
              ? styles["nav-links"]
              : `${styles["nav-links"]} ${styles["hide"]}`
          }
        >
          <ul>
            <li className={styles["menu-title"]}>Menu</li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={router.pathname == "/" ? styles["active"] : ""}
            >
              <Link scroll={true} href="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={router.pathname == "/events" ? styles["active"] : ""}
            >
              <Link scroll={true} href="/events">Events</Link>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={router.pathname == "/contact" ? styles["active"] : ""}
            >
              <Link scroll={true} href="/contact">Contact</Link>
            </li>
            {/* <li
              onClick={() => {
                setShow((prevState) => !prevState);
                window.scrollTo(0, 0)
              }}
              className={router.pathname == "/sponsors" ? styles["active"] : ""}
            >
              <Link href="/sponsors">Sponsors</Link>
            </li> */}
          </ul>
          <div className={styles["mobile-menu-logo"]}>
            <div className={styles["mobile-menu-logo-content"]}>
              <Image
                src="/images/navbar/navlogo.png"
                height={25}
                width={120}
                alt="logo"
              ></Image>
              <hr />
              <p>Progress over Perfection</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

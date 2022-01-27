import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";

import styles from "../../styles/EventsContent.module.css";
import TimelineOne from "./TimelineOne.js";
import TimelineOneMobile from "./TimelineOneMobile.js";
import TimelineTwoMobile from "./TimelineTwoMobile.js";
import TimelineThreeMobile from "./TimelineThreeMobile.js";
import TimelineThree from "./TimelineThree.js";
import TimelineTwo from "./TimelineTwo.js";

const EventsContent = () => {
  return (
    <div id="details" className={styles["container"]}>
      <div className={styles["content-container"]}>
        <h1>
          Pitchers 3.0
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dare2compete.com/competition/pitchers-30-e-summit-22-iiit-nagpur-indian-institute-of-information-technology-iiit-nagpur-252237"
            className={styles["register-link"]}
          >
            <button>
              <span>Register</span>
              <span>&#8599;</span>
            </button>
          </a>
        </h1>
        <p>
          The Entrepreneurship Cell of IIIT Nagpur presents{" "}
          <q>Pitchers 3.0</q>, a platform for the entrepreneurship enthusiasts
          out there. In this competition, participants will explain the idea,
          create an MVP (no code), land a customer, create a pitch deck, finally
          pitch to the judges. This competition will contain three rounds.
        </p>
        <p>
          (I) <span>Idea Description</span> - The first round, stronger your
          market research about your idea, easier for you to clear this round.
          Participants have to describe their idea or product on the D2C portal.
        </p>
        <p>
          (II) <span>Pitch Deck Submission</span> - Selected participants will
          have to submit a pitch deck and a MVP. Also, land one customer.
        </p>
        <p>
          (III) <span>Pitching Live</span> - Selected participants will get to
          pitch their idea in front of the jury and win the rewards as decided.{" "}
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-once={true}
        className={styles["timeline-container"]}
      >
        <MediaQuery minWidth={950}>
          <TimelineOne />
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <TimelineOneMobile />
        </MediaQuery>
      </div>

      <div className={styles["content-container"]}>
        <h1>
          The House of Investors
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dare2compete.com/competition/the-house-of-investors-e-summit-22-iiit-nagpur-indian-institute-of-information-technology-iiit-nagpur-256143"
            className={styles["register-link"]}
          >
            <button>
              <span>Register</span>
              <span>&#8599;</span>
            </button>
          </a>
        </h1>
        <p>
          Presenting <q>The House of Investors</q>, a platform for the
          entrepreneurship & wanna-be VCs enthusiasts out there. In this
          competition, participants are supposed to step into investor&apos;s shoes,
          think like investors, create an investment pitch and record it for a
          startup chosen from the provided decks.
        </p>
      </div>

      <div data-aos="zoom-in" className={styles["timeline-container"]}>
        <MediaQuery minWidth={580}>
          <TimelineTwo />
        </MediaQuery>
        <MediaQuery maxWidth={580}>
          <TimelineTwoMobile />
        </MediaQuery>
      </div>

      <div className={styles["content-container"]}>
        <h1>
          Scam 2022
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dare2compete.com/competition/scam-2022-virtual-trading-competition-e-summit-22-iiit-nagpur-indian-institute-of-information-technology-iii-257886"
            className={styles["register-link"]}
          >
            <button>
              <span>Register</span>
              <span>&#8599;</span>
            </button>
          </a>
        </h1>
        <p>
          Presenting <q>Scam 2022</q>, a platform for the stock market
          enthusiasts out there, in association with StockGro. The online
          virtual trading event will last for 5 trading days. The login
          information for the trading account will be made available to the
          registered participants only. Details regarding login and registration
          on the online platform would be communicated via email. Participants
          will be ranked based on their performances.
        </p>
      </div>
      <div className={styles["content-container"]}>
        <h1>
          QuizHunt
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dare2compete.com/p/connect-the-unicorns-e-summit-22-iiit-nagpur-indian-institute-of-information-technology-iiit-nagpur-258311?lb=Y3xEm0y"
            className={styles["register-link"]}
          >
            <button>
              <span>Register</span>
              <span>&#8599;</span>
            </button>
          </a>
        </h1>
        <p>
          The Entrepreneurship Cell of IIIT Nagpur in its second edition brings
          to you the <q>QuizHunt</q>, a platform for the business,
          entrepreneurship, technology, and marketing enthusiasts out there.
          Solve questions, and supercharge your competitive spirit for this
          trial of entrepreneurship, technology, business, and marketing
          mastery.
        </p>
      </div>
      <div data-aos="zoom-in" className={styles["timeline-container"]}>
        <MediaQuery minWidth={580}>
          <TimelineThree />
        </MediaQuery>
        <MediaQuery maxWidth={580}>
          <TimelineThreeMobile />
        </MediaQuery>
      </div>
    </div>
  );
};

export default EventsContent;

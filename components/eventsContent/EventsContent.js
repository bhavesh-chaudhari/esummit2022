import React from 'react'
import MediaQuery from 'react-responsive'

import styles from "../../styles/EventsContent.module.css"
import TimelineOne from './TimelineOne'
import TimelineOneMobile from './TimelineOneMobile'
import TimelineTwoMobile from './TimelineTwoMobile'
import TimelineThreeMobile from './TimelineThreeMobile'
import TimelineThree from './TimelineThree'
import TimelineTwo from './TimelineTwo'


const EventsContent = () => {


    return (
        <div className={styles["container"]}>
            <div className={styles["content-container"]}>
                <h1>Pitch it to win it</h1>
                <p>This is the main event of E-Summit, anyone can participate in a team of 1-4 people. It consists of three rounds-</p>
                <p>(I) First round- Participants have to answer the questions related to their idea and product.</p>
                <p>(II) Second round- Selected participants will have to submit a pitch deck and a MVP. Also, land one customer.</p>
                <p>(III) Third round- Selected participants will get to pitch their idea in front of the jury and win the rewards as decided.</p>
            </div>
            <MediaQuery minWidth={580}>
                <TimelineOne />
            </MediaQuery>
            <MediaQuery maxWidth={580}>
                <TimelineOneMobile />
            </MediaQuery>
            <div className={styles["content-container"]}>
                <h1>Case Study Competition</h1>
                <p>Participants will team up and analyze other startups and make case studies/case lets about them which can also be used as a resource for other students.Through this they will learn about the entrepreneur world.</p>
            </div>
            <MediaQuery minWidth={580}>
                <TimelineTwo />
            </MediaQuery>
            <MediaQuery maxWidth={580}>
                <TimelineTwoMobile />
            </MediaQuery>
            <div className={styles["content-container"]}>
                <h1>Virtual Trading Competition</h1>
                <p>The team achieving maximum gain in portfolio value at the end of 6 hours will be the overall winner of the competition. Real-time market prices will be used, and the participants cannot influence the prices.</p>
            </div>
            <div className={styles["content-container"]}>
                <h1>Connect the unicorns</h1>
                <p>2 rounds of quiz, will give you a one-day tour around the entrepreneurship world.
                    First round-Participants have to connect pictures and answer related questions to it.
                    Second round-Selected students will have to face different real world situations in the form of a quiz.</p>
            </div>
            <MediaQuery minWidth={580}>
                <TimelineThree />
            </MediaQuery>
            <MediaQuery maxWidth={580}>
                <TimelineThreeMobile />
            </MediaQuery>
        </div >
    )
}

export default EventsContent

import React, { useState, useEffect } from 'react'
import MediaQuery from 'react-responsive'
import styles from "../../styles/EventsTimeline.module.css"
import DesktopViewTimeline from './DesktopViewTimeline'
import MobileViewTimeline from './MobileViewTimeline'
import Link from 'next/link'

const EventsTimeline = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    return (
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h2>Events</h2>
          <Link href="/events#details">
            <a>
              <p>View Details</p>
            </a>
          </Link>
        </div>
        <div>
          {mounted && (
            <>
              <MediaQuery minWidth={650}>
                <DesktopViewTimeline />
              </MediaQuery>
              <MediaQuery maxWidth={650}>
                <MobileViewTimeline />
              </MediaQuery>
            </>
          )}
        </div>
      </div>
    );
}

export default EventsTimeline

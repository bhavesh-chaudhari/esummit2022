import MediaQuery from 'react-responsive'
import styles from "../../styles/EventsTimeline.module.css"
import DesktopViewTimeline from './DesktopViewTimeline'
import MobileViewTimeline from './MobileViewTimeline'

const EventsTimeline = () => {

    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <h2>Events</h2>
                <p>View Details</p>
            </div>
            <div>
                <MediaQuery minWidth={650}>
                    <DesktopViewTimeline />
                </MediaQuery>
                <MediaQuery maxWidth={650}>
                    <MobileViewTimeline />
                </MediaQuery>
            </div>
        </div>
    )
}

export default EventsTimeline

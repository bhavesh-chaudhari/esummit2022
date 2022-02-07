import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/Hero";
import AboutSection from "../components/aboutSection/AboutSection";
import aboutSectionData from "../components/aboutSection/aboutSectionData";
import EventsTimeline from "../components/eventsTimeline/EventsTimeline"


const Home = () => {
  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | IIITN</title>
        <meta name="title" content="ESUMMIT 2022 | IIITN"></meta>
        <meta
          name="description"
          content="E summit is the Flagship event of IIIT Nagpur under the Innovation Council Club. We bring together students, professors, new-age entrepreneurs, leaders, and investors on a common platform. We instill the spirit of innovation and entrepreneurship among them."
        />
        <meta
          name="keywords"
          content="ACE, Esummit, Esummit 2022 IIITN, IIITN, IIIT Nagpur, Entrepreneurship, Entrepreneurship Cell, Event"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta
          name="google-site-verification"
          content="JDXcwG5v5EZWW9sWAe6KbNv_RnVh3xd-Heqoc1g852U"
        />
        <meta
          property="og:image"
          content="https://esummit.vercel.app/_next/image?url=%2Flogos%2Flogo.png&w=384&q=75"
        ></meta>
      </Head>
      <div>
        <Hero></Hero>
        {aboutSectionData.map((section) => {
          return (
            <AboutSection
              key={section.id}
              flexDirection={section.flexDirection}
              heading={section.heading}
              para={section.para}
            ></AboutSection>
          );
        })}
      </div>
      <EventsTimeline />
    </>
  );
};

export default Home

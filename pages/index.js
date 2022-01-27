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
        <meta name="title" content="Esummit 2021 | IIITN"></meta>
        <meta name="description" content="E summit is Flagship event of IIITNagpur under the Innovation Council Club. "/>
        <meta name="keywords" content="ACE, Esummit, Esummit 2021, IIITN, IIIT Nagpur, Entrepreneurship, Entrepreneurship Cell, Event"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"></meta>
      </Head>
      <div>
        <Hero></Hero>
        {
          aboutSectionData.map(section=>{
            return <AboutSection key={section.id} flexDirection={section.flexDirection} heading={section.heading} para={section.para}  ></AboutSection>
          })
        }
      </div>
      <EventsTimeline />
    </>
  );
};

export default Home

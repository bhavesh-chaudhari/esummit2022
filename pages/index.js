import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/Hero";
import AboutSection from "../components/aboutSection/AboutSection";
import aboutSectionData from "../components/aboutSection/aboutSectionData";

const Home = () => {

  return (
    <>
      <Head>
        <title>ESUMMIT 2022 | IIITN</title>
      </Head>
      <div>
        <Hero></Hero>
        {
          aboutSectionData.map(section=>{
            return <AboutSection key={section.id} flexDirection={section.flexDirection} heading={section.heading} para={section.para}  ></AboutSection>
          })
        }
      </div>
    </>
  );
};

export default Home;

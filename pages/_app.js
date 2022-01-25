import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // easing: "ease",
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(
          navigator.userAgent
        );
      },
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

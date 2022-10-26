import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  // const [bg, setBg] = useState("bg-[url('/pagebg.svg')]");
  // const bgs = {
  //   BuildIt: "bg-[url('/pagebg.svg')]",
  //   About: "bg-[url('/bgAbout.svg')]",
  // };
  // useEffect(() => {
  //   setBg(bgs[document.title]);
  // }, []);
  return (
    // className={bg + " bg-no-repeat  " }
    <div >
    
      <Component {...pageProps} />
      <Footer />
    </div>

  );
}

export default MyApp;

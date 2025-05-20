import { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Team } from "./components/Team";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Benefits } from "./components/Benefits";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Partners } from "./components/partners";
import { Testimonials } from "./components/testimonials";
import JsonData from "./data/data.json";
import VisitUs from "./components/VisitUs";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Benefits data={landingPageData.Benefits} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Partners data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <VisitUs />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

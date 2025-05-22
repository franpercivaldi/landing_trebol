import SmoothScroll from "smooth-scroll";
import { AboutUs } from "./components/AboutUs";
import { Allies } from "./components/Allies";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Introduction } from "./components/Introduction";
import { NavigationHeader } from "./components/NavigationHeader";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import VisitUs from "./components/VisitUs";
import FAQ from "./components/FAQ";
import landingPageData from "./data/data.json";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 101, // Height of the fixed header
  easing: "easeInOutCubic",
});

const App = () => {
  return (
    <div>
      <NavigationHeader />
      <Introduction data={landingPageData.Introduction} />
      <Benefits data={landingPageData.Benefits} />
      <AboutUs data={landingPageData.AboutUs} />
      <Services data={landingPageData.Services} />
      <Allies data={landingPageData.Allies} />
      <Reviews data={landingPageData.Reviews} />
      <Team data={landingPageData.Team} />
      <VisitUs />
      <FAQ />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

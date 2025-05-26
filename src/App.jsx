import SmoothScroll from "smooth-scroll";
import { AboutUs } from "./components/AboutUs";
import { Allies } from "./components/Allies";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Introduction } from "./components/Introduction";
import { NavigationHeader } from "./components/NavigationHeader";
// import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import VisitUs from "./components/VisitUs";
import FAQ from "./components/FAQ";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 100, // Height of the fixed header
  easing: "easeInOutCubic",
});

const App = () => {
  return (
    <div>
      <NavigationHeader />
      <Introduction />
      <Benefits />
      <AboutUs />
      <Services />
      <Allies />
      {/* <Reviews /> */}
      <Team />
      <VisitUs />
      <FAQ />
      <Contact />
    </div>
  );
};

export default App;

import { AboutUs } from "./components/AboutUs";
import { Allies } from "./components/Allies";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { NavigationHeader } from "./components/NavigationHeader";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import VisitUs from "./components/VisitUs";
import FAQ from "./components/FAQ";

document.documentElement.lang = "es";

const App = () => {
  return (
    <div className="app-shell">
      <NavigationHeader />
      <main>
        <Introduction />
        <Benefits />
        <AboutUs />
        <Services />
        <Allies />
        <Team />
        <VisitUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

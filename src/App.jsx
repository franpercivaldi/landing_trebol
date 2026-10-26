import { useEffect } from "react";
import { About } from "./components/About";
import { Branches } from "./components/Branches";
import { Contact } from "./components/Contact";
import { Coverages } from "./components/Coverages";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Insurers } from "./components/Insurers";
import { Process } from "./components/Process";
import { QuoteProvider } from "./components/QuoteDrawer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { startSmoothScroll } from "./lib/smoothScroll";

const App = () => {
  useEffect(() => startSmoothScroll(), []);

  return (
    <QuoteProvider>
      <a className="skip-link" href="#coberturas">
        Ir al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Insurers />
        <Coverages />
        <Process />
        <About />
        <Branches />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </QuoteProvider>
  );
};

export default App;

import { useState } from "react";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="overflow-x-hidden w-full">
      {!introFinished && (
        <IntroSplash onFinish={() => setIntroFinished(true)} />
      )}

      {introFinished && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Packages />
          <Testimonials />
          <Contact />
          <Footer />
          <WhatsAppFloating />
        </>
      )}
    </div>
  );
}

export default App;
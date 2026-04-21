import { useState } from "react";
import { Helmet } from "react-helmet-async";
import IntroSplash from "../components/IntroSplash";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";
import LatestStories from "../components/LatestStories";

function LandingPage() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="overflow-x-hidden w-full">
      <Helmet>
        <title>Studio Uday | Best Photographer in Jalgaon & Wedding Photography Maharashtra</title>
        <meta name="description" content="Capture your timeless moments with Studio Uday. Specialized in Wedding Photography, Portraits, and Cinematography in Jalgaon and across Maharashtra." />
        <meta name="keywords" content="Best Photographer in Jalgaon, Wedding Photography Maharashtra, Pre-wedding shoot Jalgaon, Professional Photographer Jalgaon, Studio Uday, Photography Studio Jalgaon" />
        <meta property="og:title" content="Studio Uday | Professional Photography" />
        <meta property="og:description" content="Luxury wedding and portrait photography in Jalgaon, Maharashtra." />
        <meta property="og:type" content="website" />
      </Helmet>

      {!introFinished && (
        <IntroSplash onFinish={() => setIntroFinished(true)} />
      )}

      {introFinished && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <LatestStories />
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

export default LandingPage;

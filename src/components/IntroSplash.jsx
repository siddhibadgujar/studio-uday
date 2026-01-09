import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/studioLogo.png";
import shutterSound from "../assets/audio/shutter.mp3";

function IntroSplash({ onFinish }) {
  const [showSite, setShowSite] = useState(false);
  const audioRef = useRef(null);

  // preload the audio
  useEffect(() => {
    audioRef.current = new Audio(shutterSound);
    audioRef.current.load();
  }, []);

  const handleStart = () => {
    audioRef.current.play().catch(() => {});
    setShowSite(true);
    setTimeout(onFinish, 500); // optional small delay
  };

  return (
    <>
      {!showSite && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col justify-center items-center text-center px-4">
          <img src={logo} alt="Studio Uday Logo" className="h-24 mb-6 animate-bounce" />
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-2">
            Welcome to Studio Uday
          </h1>
          <p className="text-orange-500 text-xl mb-1">Say Cheeseee… 📸</p>
          <p className="text-gray-300 text-lg mb-8">Hold that smile!</p>
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold transition transform hover:scale-105"
          >
            Let's Go
          </button>
        </div>
      )}
    </>
  );
}

export default IntroSplash;
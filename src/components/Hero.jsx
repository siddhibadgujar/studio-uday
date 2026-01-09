import { useEffect, useState } from "react";
import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";

function Hero() {
  const images = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3700);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeUp">
          Uday Photography
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl animate-fadeUp delay-200">
          Capturing moments that turn into timeless memories.
        </p>

        <a
          href="#portfolio"
          className="mt-10 inline-block px-10 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold tracking-wide transition transform hover:scale-105 animate-fadeUp delay-400"
        >
          Explore Portfolio
        </a>
      </div>
    </section>
  );
}

export default Hero;
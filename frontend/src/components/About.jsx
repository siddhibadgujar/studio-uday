import udayPhoto from "../assets/images/about/uday.jpg";
import signature from "../assets/images/about/signature.png";

function About() {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left – Signature Portrait */}
        <div className="relative group flex justify-center">

          {/* Soft background glow */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-orange-500/10 rounded-full"></div>

          {/* Image wrapper */}
          <div className="relative overflow-hidden rounded-2xl max-h-[420px]">

            <img
              src={udayPhoto}
              alt="Uday Badgujar"
              className="max-h-[420px] w-auto object-cover
                         grayscale transition-all duration-700
                         group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* Signature */}
            <img
              src={signature}
              alt="Uday Badgujar Signature"
              className="absolute bottom-4 right-4 w-28 opacity-80
                         group-hover:opacity-100 transition"
            />

            {/* Minimal line accent */}
            <div className="absolute bottom-4 left-4 w-10 h-[1px] bg-orange-400"></div>
          </div>
        </div>

        {/* Right – Text */}
        <div>
          <p className="text-orange-500 uppercase tracking-widest mb-3">
            Meet the Photographer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Uday Badgujar
          </h2>

          <p className="text-sm text-gray-400 tracking-[0.25em] mt-2 mb-6">
            PHOTOGRAPHER • SINCE 1998
          </p>

          <p className="text-gray-300 leading-relaxed mb-5">
            Hi, I am <span className="text-white font-semibold">Uday Badgujar</span>, 
            the heart behind <span className="text-white font-semibold">Studio Uday</span>.
            For me, photography is not just a profession — it’s my way of preserving emotions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            From a baby’s first smile to a bride’s shy glance, I believe every moment
            deserves to live forever. With over{" "}
            <span className="text-white font-semibold">27 years of experience</span>, 
            I capture stories, not just images.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">27+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">1000+</h3>
              <p className="text-sm text-gray-400">Events Covered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">5+</h3>
              <p className="text-sm text-gray-400">States Travelled</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
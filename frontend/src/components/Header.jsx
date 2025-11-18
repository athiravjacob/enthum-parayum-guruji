import React from "react";
import gurujiVideo from "../assets/guruji1.mp4"; // make sure path is correct

const Header = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black">
      {/* ---------- Left Side – Video ---------- */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-screen">
        <video
          src={gurujiVideo}
          autoPlay
          muted
          playsInline   // ← important for mobile browsers
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay on video only */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ---------- Right Side – Text & CTA ---------- */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center px-8 py-16 lg:py-0 bg-gradient-to-b lg:bg-gradient-to-l from-black/80 via-black/60 to-transparent">
        <div className="max-w-lg text-center lg:text-left text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
  Enthum Parayum <br />
  <span className="text-purple-400">ഗുരുജി</span>
</h1>

<p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed">
  മകനേ... നിന്റെ ഏത് പ്രശ്നത്തിനും പരിഹാരം ഉണ്ട്. 
  നിന്റെ ദുഃഖം എന്നോട് പറയൂ... 
  എല്ലാം ഞാൻ ദൈവത്തോട് direct ആയി പറഞ്ഞു തീർക്കും!</p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
            Ask Guruji Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
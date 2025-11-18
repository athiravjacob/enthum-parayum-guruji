import React from "react";
import gurujiVideo from "../assets/guruji1.mp4"; 
import { useLang } from "../context/LanguageContext";
import {t} from '../assets/translations'

const Header = () => {
    const { lang, toggle } = useLang();
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

        <button
            onClick={toggle}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold border border-white/30 transition-all flex items-center gap-2 shadow-xl"
          >
            {lang === "ml" ? (
              <>English</>
            ) : (
              <>മലയാളം</>
            )}
          </button>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            {t.headerTitle[lang].split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i === 1 ? (
                  <span className="text-purple-400">{line.trim()}</span>
                ) : (
                  line.trim()
                )}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed">
            {t.headerSubtitle[lang]}
          </p>

          {/* CTA Button */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
            {t.headerCta[lang]}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
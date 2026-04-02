import React from "react";
import BenefitsSection from "./Benifits";
import CallbackSection from "./Footer";
import Navbar from "./Navbar";

const AyurvedaSection = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <Navbar/>
   <section
  className="relative h-[500px] w-full bg-cover bg-center flex items-center"
  style={{
    backgroundImage: "url(/bg.jpg)",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative text-white z-10 w-full max-w-6xl mx-auto px-6 flex justify-start">
    <div className="text-left max-w-lg">
      
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Ayurvedic Massage <br /> in Abu Dhabi
      </h1>

      <p className="text-sm md:text-base mb-6 text-gray-200">
        Discover the healing essence of Ayurveda at Herbal Park — your haven
        for holistic wellness, rejuvenation, and inner harmony.
      </p>

     <a
  href="https://wa.me/971564169883?text=Hello%2C%20I%20would%20like%20a%20callback%20for%20Ayurvedic%20massage"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#5E8846] hover:bg-green-700 px-5 py-2 rounded-md text-sm font-medium transition">
    Get a Callback
  </button>
</a>
    </div>
  </div>
</section>



      {/* ABOUT SECTION */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#5E8846] mb-4">
              About Ayurveda
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Ayurveda is a 3-millennium-old natural system of medicine with
              origins in India. The term Ayurveda is derived from the Sanskrit
              words Ayur (life) and Veda (science or knowledge). It is a holistic
              system deeply embedded in a way of life, offering insights into
              maintaining balance and harmony.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Ayurvedic practices focus on strengthening the body’s natural
              healing processes. With therapies rooted in herbs and natural
              oils, it promotes wellness and inner peace. Each treatment is
              customized to individual needs, ensuring long-lasting benefits and
              a deeply rejuvenating experience.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/about.png"
              alt="Ayurveda Massage"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
      <BenefitsSection/>
      <CallbackSection/>
    </div>
  );
};

export default AyurvedaSection;
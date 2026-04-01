import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const CallbackSection = () => {
  const socials = [
    { icon: FaInstagram, href: "https://www.instagram.com/herbalpark_ayurveda", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/herbalparkayurveda", label: "Facebook" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/herbalpark/", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://www.youtube.com/@herbalpark_ayurveda", label: "YouTube" },
  ];

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative w-full py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url(/contact.png)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Form Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-black/60 backdrop-blur-md rounded-md p-8 shadow-lg text-white">
            
            {/* Title */}
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-2">
              Get a callback for Ayurvedic Massage
            </h2>

            <p className="text-center text-xs text-gray-200 mb-6 max-w-lg mx-auto">
              Contact us today to start your journey towards better wellness. We're here to assist you every step of the way.
            </p>

            {/* Form */}
            <form className="space-y-4">
              
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="bg-[#5E8846] hover:bg-green-700 text-white text-xs px-4 py-2 rounded transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Footer (outside bg) */}
      <div className="bg-gray-100 text-center py-10 mt-16">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo1.png"   // place inside public folder
            alt="Herbal Park"
            className="h-19 object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          {socials.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-9 h-9 flex items-center justify-center bg-[#5E8846] text-white rounded-full hover:bg-green-700 hover:scale-110 transition"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-gray-400">
          © COPYRIGHT {new Date().getFullYear()} HERBAL PARK. ALL RIGHTS RESERVED.
        </p>
      </div>
    </>
  );
};

export default CallbackSection;
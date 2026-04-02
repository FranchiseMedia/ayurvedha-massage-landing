import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const CallbackSection = () => {
  const socials = [
    { icon: FaInstagram, href: "https://www.instagram.com/herbalpark_ayurveda", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/herbalparkayurveda", label: "Facebook" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/herbalpark/", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://www.youtube.com/@herbalpark_ayurveda", label: "YouTube" },
  ];

  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle Submit → WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    // Simple validation
    if (!name || !phone) {
      alert("Please fill Name and Phone");
      return;
    }

    const text = `
Hello, I want a callback for Ayurvedic Massage:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "971564169883";

    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative w-full py-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/contact.png)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-black/60 backdrop-blur-md rounded-md p-8 shadow-lg text-white">
            
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-2">
              Get a callback for Ayurvedic Massage
            </h2>

            <p className="text-center text-xs text-gray-200 mb-6 max-w-lg mx-auto">
              Contact us today to start your journey towards better wellness.
            </p>

            {/* ✅ Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  className="bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
                />
              </div>

              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="w-full bg-white/20 text-white placeholder-gray-200 text-sm px-4 py-2 rounded focus:outline-none"
              ></textarea>

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

      {/* Footer */}
      <div className="bg-gray-100 text-center py-10 mt-16">
        <div className="flex justify-center mb-4">
          <img src="/logo1.png" alt="Herbal Park" className="h-19 object-contain" />
        </div>

        <div className="flex justify-center gap-4 mb-4">
          {socials.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#5E8846] text-white rounded-full hover:bg-green-700 hover:scale-110 transition"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        <p className="text-[10px] text-gray-400">
          © COPYRIGHT {new Date().getFullYear()} HERBAL PARK. ALL RIGHTS RESERVED.
        </p>
      </div>
    </>
  );
};

export default CallbackSection;
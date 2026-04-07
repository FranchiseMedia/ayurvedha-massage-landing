import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971564169883"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition cursor-pointer">
          <FaWhatsapp className="text-white w-5 h-5" />
        </div>
      </a>

      {/* Call Button */}
      <a href="tel:+971564169883">
        <div className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg transition cursor-pointer">
          <Phone className="text-white w-5 h-5" />
        </div>
      </a>

    </div>
  );
};

export default FloatingButtons;
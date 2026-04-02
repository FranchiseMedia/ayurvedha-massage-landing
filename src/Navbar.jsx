import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo1.png" alt="logo" className="w-40 sm:w-52" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <a href="https://www.herbalpark.ae/about-us" className="hover:text-green-600">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="https://www.herbalpark.ae/ayurveda" className="hover:text-green-600">
              OUR SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-600">
              CONTACT US
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li>
             <a
  href="https://herbalark.ae/about-us" 
                className="block hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                OUR SERVICES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
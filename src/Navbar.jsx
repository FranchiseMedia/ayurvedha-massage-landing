import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo1.png" alt="logo" className="w-52 " />
         
        </div>

        {/* Links */}
        <ul className="flex items-center space-x-8 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-green-600">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-600">
              OUR SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-600">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
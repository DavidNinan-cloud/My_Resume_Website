import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure react-icons is installed

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about-me' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav id="navbar" className="fixed top-0 w-full bg-white shadow-md z-50 font-Nunito">
      <div className=" mx-auto px-4 md:px-8 lg:px-24">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Name */}
          <div className="text-xl xl:text-3xl font-bold text-cyan-950 uppercase tracking-widest">
            <a href="/">David Ninan</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 xl:text-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cyan-950 hover:text-[#462B58] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-cyan-950 text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-6`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Closes menu after clicking
                className="text-cyan-950 hover:text-[#462B58] font-medium transition-colors border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
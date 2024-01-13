import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById('about-me');
    if (aboutMeElement) {
        const yOffset = -100; // Adjust this value to control how much higher you want to scroll
        const y = aboutMeElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    // if (aboutMeElement) {
    //   aboutMeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'  });
    // }
  };
// bg-[#55637A] text-white
  return (
    <div
      id="navbar"
      className={`w-full flex justify-between px-6 md:px-16 py-4 md:py-8 fixed top-0 z-50 ${
        scrolling ? 'bg-[#f2f1]  text-[#1565C0] shadow-md ' : 'bg-[#F2F5F7] text-[#1565C0]'
      }`}
    >
      <div className="text-2xl md:text-4xl font-bold text-left">
        David Ninan
      </div>
      <div>
        <ul className="flex space-x-6 pt-2 uppercase">
          <li>
            <a href="#about-me" className="hover:underline" onClick={scrollToAboutMe}>
              About Me
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="hover:underline">
              Testimonials
            </a>
          </li> */}
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
